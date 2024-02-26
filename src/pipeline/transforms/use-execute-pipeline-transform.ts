import { useExecuteComposable } from "../../reference-composable-builders";
import {
  ComposableBuilder,
  ExecutionConfig,
  ExecutionReference,
  Method,
} from "../../types";

export function useExecutePipelineBuilder<
  TReference extends ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArgs extends unknown[],
>(
  composableBuilder: ComposableBuilder<TReference, TResponse, TArgs>,
  method: Method<TResponse, TArgs>,
  defaultConfig?: ExecutionConfig<TResponse, TArgs>,
) {
  return (config?: Partial<ExecutionConfig<TResponse, TArgs>>) =>
    useExecuteComposable(composableBuilder, method, {
      ...defaultConfig,
      ...config,
    });
}
