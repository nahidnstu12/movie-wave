import React, { MouseEventHandler } from 'react';

export default function StepperControl({
  handleClick,
  currentStep,
  steps
}: any) {
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-dark bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? ' cursor-not-allowed opacity-50 ' : ''
        }`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick('next')}
        className="cursor-pointer rounded-lg bg-green py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-dark hover:text-white"
      >
        {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
      </button>
    </div>
  );
}

// mobile controls
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
