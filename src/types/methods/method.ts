export type Method<TI extends unknown[], TO> = (...args: TI) => TO | Promise<TO>