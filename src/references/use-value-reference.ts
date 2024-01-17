import { MaybeRef, toValue } from "vue";
import { Method, ExecuitonReference, ExecutionConfig } from "../types";

export function useValueReference<
    TReference extends ExecuitonReference<TResponse, TArgs>,
    TResponse,
    TArg,
    TArgs extends any[],
>(
    referenceFn: (method: Method<TResponse, TArgs>, configuration: ExecutionConfig<TResponse, TArgs>) => TReference,
    method: Method<TResponse, [arg: TArg, ...args: TArgs]>,
    arg: MaybeRef<TArg>
): ExecuitonReference<TResponse, TArgs> {
    const reference = referenceFn((...args: TArgs) => method(toValue(arg), ...args), { });
    return reference;
}