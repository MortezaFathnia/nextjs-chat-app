import { ClassValue,clsx } from 'clsx';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]){
  return twMerge(clsx(inputs))
} 