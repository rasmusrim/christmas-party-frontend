import {useEffect, useState} from "react";

export function useKeyPress(targetKey: string) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({key}: KeyboardEvent) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({key}: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
}
