import MobileStepper from '@/components/shared/stepper/mobileStepper';
import Progress from '@/components/ui/stepper/steps/progress';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Checkout() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [cb, setCb] = useState<any>();
  const [loading, setLoading] = useState(false);
  const steps = [
    { title: 'Phone Number', id: 0 },
    { title: 'Make Payment', id: 1 },
    { title: 'Information', id: 2 }
  ];

  useEffect(() => {
    if (cb?.type === 'next') {
      setCurrentStep(() => {
        return cb.step + 1;
      });
    }
    if (cb?.type === 'finish') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.push('/');
      }, 1000);
    }
  }, [router, cb]);

  return (
    <div className="container sm:hidden lg:hidden mx-auto mb-24 pt-28">
      <MobileStepper steps={steps} currentStep={currentStep} setCb={setCb} />
      {loading && <Progress />}
      {/**/}
    </div>
  );
}

export default Checkout;
