import Information from '@/components/ui/stepper/steps/information';
import Payment from '@/components/ui/stepper/steps/paymentpage';
import Phonenumber from '@/components/ui/stepper/steps/phonenumber';
import React, {useEffect, useRef, useState} from 'react';

const MobileStepper = ({ steps, currentStep, setCb }: any) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber: number, steps: any) => {
    const newSteps = [...steps];

    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step: any, index: number) =>
      Object.assign(
        {},
        {
          description: step.title,
          stepno: step.id,
          completed: false,
          highlighted: index === 0,
          selected: index === 0
        }
      )
    );

    stepsRef.current = stepsState;
    const current: any = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <Phonenumber setCb={setCb} />;
      case 2:
        return <Payment setCb={setCb} />;
      case 3:
        return <Information setCb={setCb} />;
      default:
        return;
    }
  };

  console.log({ currentStep, newStep });
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {newStep.map((step: any, stepIdx) => (
          <li key={stepIdx} className="pb-10 relative">
            <div className="group relative flex items-start flex-col">
              <div className="flex gap-4 h-13 items-center">
                <div
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full cursor-pointer"
                  onClick={() => {
                    return setCb(() => ({ type: 'next', step: step.stepno }));
                  }}
                >
                  <span className={``}>
                    {step.completed ? (
                      <img
                        src={'/images/icons/complete-check-mbl.svg'}
                        alt={'check'}
                      />
                    ) : (
                      <img
                        src={'/images/icons/pending-check-mbl.svg'}
                        alt={'check'}
                      />
                    )}
                  </span>
                </div>
                <div>
                  <p className={'text-2xxs mb-2 uppercase'}>
                    Step {stepIdx + 1}
                  </p>
                  <p className={'text-sm w-max'}>{step.description}</p>
                </div>
              </div>

              <div className=" flex min-w-0 flex-col ">
                <div
                  className={`w-full mt-5 transition-all ease-in-out duration-1000 flex flex-col  ${
                    stepIdx === currentStep - 1 ? 'max-h-full' : 'max-h-0'
                  }`}
                >
                  {stepIdx === currentStep - 1 ? (
                    <div
                      className={`${
                        stepIdx === currentStep - 1
                          ? 'text-secondary'
                          : 'text-green'
                      } mb-5`}
                    >
                      <div className="">{displayStep(currentStep)}</div>
                    </div>
                  ) : null}
                </div>

                {/*{stepIdx === currentStep - 1 ? (*/}
                {/*    <Buttons handleNext={handleNext} handleBack={handleBack} />*/}
                {/*) : (*/}
                {/*    ''*/}
                {/*)}*/}
              </div>
              {/*vertical line*/}
              {stepIdx < steps.length - 1 ? (
                <div
                  className={`block mb-6 w-0.5 border-4 h-12 top-0 -left-4 rounded  ${
                    step.completed ? 'border-green' : 'border-[#ededed] '
                  }  `}
                ></div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default MobileStepper;
