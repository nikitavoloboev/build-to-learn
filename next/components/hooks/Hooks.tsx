import { useEffect, useState } from "react";

let listeners = [];
let state = { counter: 0 };

const setState = newState => {
  state = { ...state, ...newState };
  listeners.forEach(listener => {
    listener(state);
  });
};

export const useCustom = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
  }, []);
  return [state, setState];
};

export const useReverse = bool => {
  const [state, newState] = useState(bool);
  return !state;
};
