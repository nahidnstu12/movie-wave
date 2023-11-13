import { createContext, useContext, useState } from 'react';

const StepperContext = createContext({
  userData: '',
  setUserData: (val: any) => {}
});

export function UseContextProvider({ children }: any) {
  const [userData, setUserData] = useState<any>('');

  return (
    // @ts-ignore
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
