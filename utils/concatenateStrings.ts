/**
 * Turns an array of strings into a single string separated by commas 
 * 
 */

export function concatenateStrings(...args: string[]) {
   return args.join(',');
}