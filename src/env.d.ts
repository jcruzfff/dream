/// <reference path="../.astro/types.d.ts" />

/// <reference types="astro/client" />

interface Window {
  Chart: typeof import('chart.js');
}

declare module 'chart.js' {
  interface ChartConfiguration {
    options?: {
      scales?: {
        x?: {
          grid?: {
            display?: boolean;
            border?: boolean;
          };
        };
        y?: {
          grid?: {
            display?: boolean;
            border?: boolean;
            color?: string;
          };
          ticks?: {
            color?: string;
            callback?: (value: any) => string;
            font?: {
              size?: number;
            };
          };
        };
      };
    };
  }
}