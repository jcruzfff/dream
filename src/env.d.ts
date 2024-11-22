/// <reference path="../.astro/types.d.ts" />

/// <reference types="astro/client" />

interface Window {
  Chart: typeof import('chart.js');
}

declare module 'chart.js' {
  interface GridLineOptions {
    display?: boolean;
    color?: string;
    drawBorder?: boolean;
    borderColor?: string;
    borderWidth?: number;
  }

  interface ScaleOptions {
    grid?: Partial<GridLineOptions>;
    ticks?: {
      color?: string;
      callback?: (value: any) => string;
      font?: {
        size?: number;
      };
    };
  }

  interface ChartConfiguration {
    options?: {
      scales?: {
        x?: ScaleOptions;
        y?: ScaleOptions;
      };
      plugins?: {
        legend?: {
          position?: string;
          labels?: {
            color?: string;
            padding?: number;
            font?: {
              size?: number;
            };
          };
        };
        tooltip?: {
          backgroundColor?: string;
          titleColor?: string;
          bodyColor?: string;
          padding?: number;
          bodyFont?: {
            size?: number;
          };
          bodySpacing?: number;
          boxPadding?: number;
        };
      };
    };
  }
}