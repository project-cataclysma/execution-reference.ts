import {
  ComposableBuilder,
  Method,
  ExecutionReference,
  ExecutionConfig,
} from "../../types";

export function useValuesReferenceBuilder<
  TReference extends ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArg extends unknown[],
  TArgs extends unknown[],
>(
  composableBuilder: ComposableBuilder<TReference, TResponse, TArgs>,
  method: Method<TResponse, [...arg: TArg, ...args: TArgs]>,
  configuration: ExecutionConfig<TResponse, TArgs>,
  ...arg: TArg
): ExecutionReference<TResponse, TArgs> {
  const reference = composableBuilder(
    (...args: TArgs) => method(...arg, ...args),
    configuration,
  );
  return reference;
}
