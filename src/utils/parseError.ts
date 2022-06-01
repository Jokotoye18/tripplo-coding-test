export const parseError = (error: unknown) => {
  return typeof error === 'string' ? error : ' Unknown error occurred.';
};
