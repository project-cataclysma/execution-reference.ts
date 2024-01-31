import { ExecutionConfig } from "../types/configs";
import { ComposableBuilder, ExecuteComposable } from "../types/composables";
import { Method } from "../types/method";
import { useExecuteReference } from "../references/use-execute-reference";
import { ExecutionReference } from "../types/references";

export function useExecuteComposable<
  TReference extends ExecutionReference<TResponse, TArgs>,
  TConfig extends ExecutionConfig<TResponse, TArgs>,
  TResponse,
  TArgs extends unknown[],
>(
  composableBuilder: ComposableBuilder<TReference, TResponse, TArgs>,
  method: Method<TResponse, TArgs>,
  config: TConfig,
): ExecuteComposable<TResponse, TArgs> {
  return (...args: TArgs) =>
    useExecuteReference(composableBuilder, method, config, ...args);
}
