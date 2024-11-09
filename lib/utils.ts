export function isNumeric(value: string): boolean {
  return !isNaN(Number(value));
}