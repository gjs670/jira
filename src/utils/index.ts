export const isFalse = (val: any): boolean => (val === 0 ? false : !val);

export const cleanData = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    //@ts-ignore
    if (isFalse(value)) delete result[key];
  });
  return result;
};
