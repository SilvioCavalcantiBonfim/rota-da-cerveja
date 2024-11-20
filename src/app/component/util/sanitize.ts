export const sanitize: (txt: string) => string = (txt: string) => {
  return txt?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll(" ", "-");
}