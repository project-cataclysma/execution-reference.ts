import { useStatusReferenceBuilder } from "../../references";
import { ComposableBuilder, StatusComposable } from "../../types";
import { StatusConfig } from "../../types/configs";
import { Method } from "../../types/method";
import { ExecutionReference } from "../../types/references";

export function useStatusComposable<
  TResult,
  TReference extends ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArgs extends unknown[],
  TError extends Error,
>(
  composableBuilder: ComposableBuilder<TReference, TResponse, TArgs>,
  method: Method<TResponse, TArgs>,
  defaultConfig: StatusConfig<TResult, TResponse, TArgs, TError>,
): StatusComposable<TResult, TReference, TResponse, TArgs, TError> {
  return (config?: Partial<StatusConfig<TResult, TResponse, TArgs, TError>>) =>
    useStatusReferenceBuilder(composableBuilder, method, {
      ...defaultConfig,
      ...config,
    });
}
