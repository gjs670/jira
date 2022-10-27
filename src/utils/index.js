export const isFalse = (val) => (val === 0 ? false : !val);

export const cleanData = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalse(value)) delete result[key];
  });
  return result;
};
