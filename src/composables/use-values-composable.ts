import { useValuesReference } from "../references";
import { ExecutionComposable } from "../types";
import { ComposableBuilder } from "../types/composables/composable-builder";
import { ExecutionConfig } from "../types/configs";
import { Method } from "../types/method";
import { ExecutionReference } from "../types/references";

export function useValuesComposable<
  TReference extends ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArg extends unknown[],
  TArgs extends unknown[],
  TError extends Error,
>(
  composableBuilder: ComposableBuilder<TReference, TResponse, TArgs>,
  method: Method<TResponse, [...arg: TArg, ...args: TArgs]>,
  defaultConfig: ExecutionConfig<TResponse, TArgs, TError>,
  ...arg: TArg
): ExecutionComposable<TResponse, TArgs> {
  return (config?: Partial<ExecutionConfig<TResponse, TArgs, TError>>) =>
    useValuesReference(
      composableBuilder,
      method,
      {
        ...defaultConfig,
        ...config,
      },
      ...arg,
    );
}
