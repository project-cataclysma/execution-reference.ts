import { ComposableBuilder, ExecutionConfig, Method } from "../types";

export function useComposableBuilder<
  TReference,
  TResponse,
  TArgs extends unknown[],
  TComposableArgs extends unknown[],
>(
  composableBuilder: ComposableBuilder<
    TReference,
    TResponse,
    TArgs,
    TComposableArgs
  >,
  method: Method<TResponse, TArgs>,
  defaultConfig: ExecutionConfig<TResponse, TArgs>,
  ...composableArgs: TComposableArgs
) {
  return (config: ExecutionConfig<TResponse, TArgs>) =>
    composableBuilder(
      method,
      { ...defaultConfig, ...config },
      ...composableArgs,
    );
}
