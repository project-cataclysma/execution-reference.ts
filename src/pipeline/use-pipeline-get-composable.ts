import {
  ComposableBuilder,
  ExecutionConfig,
  ExecutionReference,
  Method,
} from "../types";

export function usePipelineGetComposable<
  TReference extends ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArgs extends unknown[],
>(
  composableBuilder: ComposableBuilder<TReference, TResponse, TArgs>,
  method: Method<TResponse, TArgs>,
  defaultConfig?: ExecutionConfig<TResponse, TArgs>,
) {
  return (config?: Partial<ExecutionConfig<TResponse, TArgs>>) => () =>
    composableBuilder(method, { ...defaultConfig, ...config });
}
