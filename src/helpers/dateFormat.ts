export const dateFormated = (date: string) => {
  return new Intl.DateTimeFormat("pt-br").format(new Date(date));
};
