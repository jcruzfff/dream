/// <reference path="../.astro/types.d.ts" />

/// <reference types="astro/client" />

interface Window {
  Chart: typeof import('chart.js');
}

declare module 'chart.js' {
  interface GridLineOptions {
    border?: boolean;
    color?: string;
    display?: boolean;
  }

  interface ChartConfiguration {
    options?: {
      scales?: {
        x?: {
          grid?: Partial<GridLineOptions>;
          ticks?: {
            color?: string;
            font?: {
              size?: number;
            };
          };
        };
        y?: {
          grid?: Partial<GridLineOptions>;
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