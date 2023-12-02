import React, { useState, useEffect, useRef } from 'react';

const Stepper = ({ steps, currentStep, setCb }: any) => {
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
  const stepsDisplay = newStep.map((step: any, index: number) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? `w-full flex items-center`
            : '-mr-20 flex items-center'
        }
      >
        <div className="relative flex flex-col items-center">
          <div
            className={`rounded-full transition duration-500 ease-in-out cursor-pointer  h-12 w-12 flex items-center justify-center py-3  ${
              step.selected ? '' : ''
            }`}
            onClick={() => {
              return setCb(() => ({ type: 'next', step: step.stepno }));
            }}
          >
            {step.selected ? (
              <span className={``}>
                <img src={'/images/icons/complete-check.svg'} alt={'check'} />{' '}
              </span>
            ) : (
              <span className={``}>
                <img src={'/images/icons/pending-check.svg'} alt={'check'} />{' '}
              </span>
            )}
          </div>
          <div
            className={`absolute top-0  text-center mt-16 text-xs font-medium text-secondary`}
          >
            <p className={'text-xs mb-4 uppercase'}>Step {index + 1}</p>
            <p className={'text-[28px] w-max font-medium'}>
              {step.description}
            </p>
          </div>
        </div>
        <div
          className={`flex-auto border-t-[6px] rounded-md transition duration-500 ease-in-out mx-10   ${
            step.completed ? 'border-green' : 'border-[#ededed] '
          }  `}
        ></div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {stepsDisplay}
    </div>
  );
};
export default Stepper;
