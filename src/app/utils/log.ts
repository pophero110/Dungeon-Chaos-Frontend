export const log = (message: string, ...args: unknown[]) => {
  console.log(`%c${message}`, 'color: green; font-weight: bold', ...args);
};

export const logStart = (message: string, ...args: unknown[]) => {
  console.log(
    `%c${message}`,
    'color: black; font-weight: bold; font-size: 12px;',
    ...args
  );
};

export const logEnd = (message: string, ...args: unknown[]) => {
  console.log(
    `%c${message}`,
    'color: black; font-weight: bold; font-size: 12px;',
    ...args
  );
};
