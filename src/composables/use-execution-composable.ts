import { useExecutionReference } from "../references";
import { ExecutionConfig } from "../types/configs";
import { ExecutionComposable } from "../types/composables";
import { Method } from "../types/method";

export function useExecutionComposable<
  TConfig extends ExecutionConfig<TResponse, TArgs>,
  TResponse,
  TArgs extends unknown[],
>(
  method: Method<TResponse, TArgs>,
  config: TConfig,
): ExecutionComposable<TResponse, TArgs> {
  return (config?: Partial<TConfig>) =>
    useExecutionReference(method, {
      ...config,
      ...config,
    });
}
