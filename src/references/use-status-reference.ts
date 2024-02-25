import { Method, ExecutionReference, StatusReference } from "../types";
import { StatusConfig } from "../types/configs/status-config";
import { useExecutionReference } from "./use-execution-reference";
import { useStatusReferenceBuilder } from "./builders/use-status-reference-builder";

export function useStatusReference<
  TResult,
  TResponse,
  TArgs extends unknown[],
  TError extends Error,
>(
  method: Method<TResponse, TArgs>,
  configuration?: StatusConfig<TResult, TResponse, TArgs, TError>,
): StatusReference<
  TResult,
  ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArgs,
  TError
> {
  return useStatusReferenceBuilder(
    useExecutionReference,
    method,
    configuration,
  );
}
