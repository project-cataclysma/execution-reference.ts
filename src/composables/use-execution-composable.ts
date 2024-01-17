import { useExecutionReference } from "../references";
import { ExecutionConfig } from "../types/configs";
import { ExecutionComposable } from "../types/composables";
import { Method } from "../types/method";

export function useExecutionComposable<
    TConfig extends ExecutionConfig<TResponse, TArgs>,
    TResponse,
    TArgs extends any[]
> (
    action: Method<TResponse, TArgs>,
    defaultConfig: TConfig
): ExecutionComposable<TConfig, TResponse, TArgs> {
    return (config?: Partial<TConfig>) => useExecutionReference(action, {
        ...defaultConfig,
        ...config,
    });
}