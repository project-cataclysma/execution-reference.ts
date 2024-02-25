import { ExecutionConfig } from "../types/configs";
import { ComposableBuilder, ExecuteComposable } from "../types/composables";
import { Method } from "../types/method";
import { useExecuteReferenceBuilder } from "../references/builders/use-execute-reference-builder";
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
    useExecuteReferenceBuilder(composableBuilder, method, config, ...args);
}
