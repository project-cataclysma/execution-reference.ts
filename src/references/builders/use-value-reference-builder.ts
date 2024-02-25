import {
  ComposableBuilder,
  Method,
  ExecutionReference,
  ExecutionConfig,
} from "../types";

export function useValueReference<
  TReference extends ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArg,
  TArgs extends unknown[],
>(
  composableBuilder: ComposableBuilder<TReference, TResponse, TArgs>,
  method: Method<TResponse, [arg: TArg, ...args: TArgs]>,
  configuration: ExecutionConfig<TResponse, TArgs>,
  arg: TArg,
): ExecutionReference<TResponse, TArgs> {
  return composableBuilder((...args: TArgs) => method(arg, ...args), configuration);
}
