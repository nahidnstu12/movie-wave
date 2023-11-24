import Information from '@/components/ui/stepper/steps/information';
import Payment from '@/components/ui/stepper/steps/paymentpage';
import Phonenumber from '@/components/ui/stepper/steps/phonenumber';
import React, {MouseEventHandler, useState} from 'react';

const steps = [
  { title: 'Phone Number', id: 0 },
  { title: 'Make Payment', id: 1 },
  { title: 'Information', id: 2 }
];

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}

const MobileStepperOld = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cb, setCb] = useState<any>();
  function isCurrent(stepIdx: number) {
    return currentStep === stepIdx;
  }

  function isLastStep(stepIdx: number) {
    return stepIdx === steps.length - 1;
  }

  function handleNext(result?: any) {
    setCurrentStep(currentStep + 1);
  }

  const displayStep = (step: number) => {
    switch (step) {
      case 0:
        return <Phonenumber setCb={setCb} />;
      case 1:
        return <Payment setCb={setCb} />;
      case 2:
        return <Information setCb={setCb} />;
      default:
        return;
    }
  };

  function handleBack() {
    setCurrentStep(currentStep - 1);
  }

  console.log({ currentStep, cb });
  return (
    <div className="container mx-auto max-w-3xl mt-5">
      <nav aria-label="Progress">
        <ol role="list" className="overflow-hidden lg:mx-10">
          {steps.map((step, stepIdx) => (
            <li key={step.title} className="pb-10 relative">
              <div className="group relative flex items-start flex-col">
                <div className="flex gap-6 h-13 items-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
                    <span className={``}>
                      <img
                        src={'/images/icons/complete-check-mbl.svg'}
                        alt={'check'}
                      />{' '}
                    </span>
                  </div>
                  <div>
                    <p className={'text-2xxs mb-4 uppercase'}>
                      Step {stepIdx + 1}
                    </p>
                    <p className={'text-sm w-max'}>{step.title}</p>
                  </div>
                </div>

                <div className="ml-4 flex min-w-0 flex-col ">
                  <div
                    className={`w-full mt-5 transition-all ease-in-out duration-1000 flex flex-col  ${
                      stepIdx === currentStep ? 'max-h-full' : 'max-h-0'
                    }`}
                  >
                    {stepIdx === currentStep ? (
                      <div
                        className={`${
                          isCurrent(stepIdx) ? 'text-secondary' : 'text-green'
                        } mb-5`}
                      >
                        <div className="">{displayStep(currentStep)}</div>
                      </div>
                    ) : null}
                  </div>

                  {isCurrent(stepIdx) ? (
                    <Buttons handleNext={handleNext} handleBack={handleBack} />
                  ) : (
                    ''
                  )}
                </div>
                {/*vertical line*/}
                {stepIdx < steps.length - 1 ? (
                  <div
                    className={`block mb-6 w-0.5 border-4 h-12 top-0 -left-4 rounded  ${
                      step.id === stepIdx ? 'border-green' : 'border-[#ededed] '
                    }  `}
                  ></div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export const Buttons = (props: {
  handleNext: MouseEventHandler<HTMLButtonElement>;
  handleBack: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="flex">
      <button
        className="inline-flex items-center bg-orange-600 hover:bg-orange-700 font-bold py-2 px-4 rounded-lg"
        onClick={props.handleNext}
      >
        <span className="text-white">Next</span>
      </button>

      <button
        className="inline-flex items-center bg-orange-600 hover:bg-orange-700 font-bold py-2 px-4 rounded-lg"
        onClick={props.handleBack}
      >
        <span className="text-white">Back</span>
      </button>
    </div>
  );
};

export default MobileStepperOld;
