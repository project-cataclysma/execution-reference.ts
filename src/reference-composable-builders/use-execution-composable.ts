import { useExecutionReference } from "../reference-composables";
import { ExecutionConfig } from "../types/configs";
import { ExecutionComposable } from "../types/composables";
import { Method } from "../types/method";
import { useComposableBuilder } from "./use-composable-builder";

export function useExecutionComposable<
  TConfig extends ExecutionConfig<TResponse, TArgs>,
  TResponse,
  TArgs extends unknown[],
>(
  method: Method<TResponse, TArgs>,
  config: TConfig,
): ExecutionComposable<TResponse, TArgs> {
  return useComposableBuilder(useExecutionReference, method, config);
}
