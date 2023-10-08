/**
 * DISCLAIMER:
 * This function was written for demo purpose.
 * - It does not hash anything
 * - It simply returns the reversed the input
 * @returns string
 */
export const hashPassword = (s: string) => {
  return s.split("").reverse().join("");
}