export const getErrorObject = (id: any, errorInstance: any) => {
  const keyArray = id
    .replaceAll('.', ',')
    .replaceAll('[', ',')
    .replaceAll(']', '')
    .split(',');
  let errorObj = errorInstance;
  keyArray.forEach((key: string) => {
    errorObj = errorObj?.[key];
  });
  return errorObj;
};
