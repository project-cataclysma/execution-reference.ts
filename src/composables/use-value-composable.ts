import { MaybeRef } from "vue";
import { useValueReference } from "../references";
import { ExecutionComposable } from "../types";
import { ExecutionConfig } from "../types/configs";
import { Method } from "../types/method";
import { ExecuitonReference } from "../types/references";

export function useValueComposable<
    TReference extends ExecuitonReference<TResponse, TArgs>,
    TResponse,
    TArg,
    TArgs extends any[],
    TError extends Error
>(
    referenceFn: (method: Method<TResponse, TArgs>, configuration: ExecutionConfig<TResponse, TArgs>) => TReference,
    action: Method<TResponse, [arg: TArg, ...args: TArgs]>,
    defaultConfig: ExecutionConfig<TResponse, TArgs, TError>,
    arg: MaybeRef<TArg>
): ExecutionComposable<TResponse, TArgs> {
    return (config?: Partial<ExecutionConfig<TResponse, TArgs, TError>>) => useValueReference(referenceFn, action, {
        ...defaultConfig,
        ...config
    }, arg);
}