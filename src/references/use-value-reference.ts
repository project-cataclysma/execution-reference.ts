import { MaybeRef, toValue } from "vue";
import { Method, ExecutionReference, ExecutionConfig } from "../types";

export function useValueReference<
  TReference extends ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArg,
  TArgs extends unknown[],
>(
  referenceFn: (
    method: Method<TResponse, TArgs>,
    configuration: ExecutionConfig<TResponse, TArgs>,
  ) => TReference,
  method: Method<TResponse, [arg: TArg, ...args: TArgs]>,
  configuration: ExecutionConfig<TResponse, TArgs>,
  arg: MaybeRef<TArg>,
): ExecutionReference<TResponse, TArgs> {
  return referenceFn(
    (...args: TArgs) => method(toValue(arg), ...args),
    configuration,
  );
}
