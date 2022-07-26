import React, { useEffect, useRef, useState } from "react";
import { ControlApp } from './ControlApp';

interface IAppProps {
  value: number;
  onClick: () => void;
}

export const App = (props: IAppProps) => {
  return <App1 {...props} />
};

const App1 = ({ value, onClick }: IAppProps) => {
  const a = useRef();

  const [controlAppState, setControlAppState] = useState<ControlApp>(null);
  
  useEffect(() => {
    const controlApp = new ControlApp(a.current);
    controlApp.update(value)
    setControlAppState(controlApp);

    return () => {
      controlApp.destroy()
    }
  }, []);

  useEffect(() => {
    controlAppState?.update(value);
  }, [value]);

  return <div>
    { value }
    <div ref={a}></div>
    <div>some test</div>
    <button onClick={() => {onClick()}}>Button</button>
  </div>
}
