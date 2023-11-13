import Stepper from '@/components/shared/stepper';
import Information from '@/components/ui/stepper/steps/Information';
import Payment from '@/components/ui/stepper/steps/paymentpage';
import Phonenumber from '@/components/ui/stepper/steps/phonenumber';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Checkout() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [cb, setCb] = useState<any>();

  const steps = [{ title: 'Phone Number', id: 0 }, { title: 'Make Payment', id: 1 }, { title: 'Information', id: 2 }];

  const handleClick = (direction?: string) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <Phonenumber setCb={setCb} />;
      case 2:
        return <Payment setCb={setCb} />;
      case 3:
        return <Information setCb={setCb} />;
      default:
    }
  };
  useEffect(() => {
    if (cb?.type === 'next') {
      setCurrentStep(() => cb.step++);
    }
    if (cb?.type === 'finish') {
      router.push('/checkout-success');
    }
  }, [router, cb]);

  console.log('callback', cb, currentStep);
  return (
    <div className="container mx-auto rounded-2xl bg-black pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal mt-[138px] px-64">
        <Stepper steps={steps} currentStep={currentStep} setCb={setCb} />

        <div className="mt-[140px] mb-[140px]">
          {displayStep(currentStep)}
        </div>
      </div>

      {/* navigation button */}
      {/*{currentStep !== steps.length && (*/}
      {/*  <StepperControl*/}
      {/*    handleClick={handleClick}*/}
      {/*    currentStep={currentStep}*/}
      {/*    steps={steps}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
}

export default Checkout;
