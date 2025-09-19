export const normalizeCpf = (cpf: string): string => {
  return cpf.replace(/\D/g, '');
};

export const capitalize = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};
