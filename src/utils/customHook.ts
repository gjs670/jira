import { useEffect, useState } from "react";

export const useMount = (callback: () => void) => {
  return useEffect(() => {
    callback();
  }, []);
};

// 泛型
// function fn<V>() {}   const fn = <V>() => {}
//
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <T>(initArray: T[]) => {
  const [value, setValue] = useState(initArray);

  return {
    value,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (i: number) => {
      const copy = [...value];
      copy.splice(i, 1);
      setValue(copy);
    },
  };
};
