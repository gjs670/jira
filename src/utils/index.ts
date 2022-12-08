export const isFalse = (val: any): boolean => (val === 0 ? false : !val);

export const isVoid = (value: unknown): boolean =>
  value === undefined || value === null || value === "";

export const cleanData = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) delete result[key];
  });
  return result;
};
