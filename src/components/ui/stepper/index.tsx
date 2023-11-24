import Stepper from '@/components/shared/stepper';
import Information from '@/components/ui/stepper/steps/information';
import Payment from '@/components/ui/stepper/steps/paymentpage';
import Phonenumber from '@/components/ui/stepper/steps/phonenumber';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Checkout() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [cb, setCb] = useState<any>();

  const steps = [
    { title: 'Phone Number', id: 0 },
    { title: 'Make Payment', id: 1 },
    { title: 'Information', id: 2 }
  ];

  // const handleClick = (direction?: string) => {
  //   let newStep = currentStep;
  //
  //   direction === 'next' ? newStep++ : newStep--;
  //   // check if steps are within bounds
  //   newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  // };

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
      setCurrentStep(() => {
        return cb.step + 1;
      });
    }
    if (cb?.type === 'finish') {
      router.push('/');
    }
  }, [router, cb]);

  return (
    <div className="container xs:hidden sm:block lg:block mx-auto rounded-2xl bg-body pb-2 md:w-1/2">
      {/* Stepper */}
      <div className="horizontal mt-[80px] px-64">
        <Stepper steps={steps} currentStep={currentStep} setCb={setCb} />

        <div className="mt-[140px] mb-[120px]">{displayStep(currentStep)}</div>
      </div>
    </div>
  );
}

export default Checkout;
