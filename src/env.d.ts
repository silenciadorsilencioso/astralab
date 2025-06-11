/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
    interface Window {
      fbq: (...args: any[]) => void;
      _fbq?: (...args: any[]) => void;
    }
  }
  
  declare var fbq: (...args: any[]) => void;
  

