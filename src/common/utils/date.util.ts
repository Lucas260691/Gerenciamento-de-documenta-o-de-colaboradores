export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0]; // yyyy-mm-dd
};

export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
