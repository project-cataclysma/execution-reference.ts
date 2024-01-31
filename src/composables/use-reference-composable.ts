import { ComposableBuilder, ExecutionConfig, Method } from '../types';

export function useReferenceComposable<TReference, TResponse, TArgs extends unknown[], TComposableArgs extends unknown[]>(
    composableBuilder: ComposableBuilder<TReference, TResponse, TArgs, TComposableArgs>,
    ...composableArgs: TComposableArgs
) {
    return (
        method: Method<TResponse, TArgs>,
        config: ExecutionConfig<TResponse, TArgs>
    ) => composableBuilder(method, config, ...composableArgs)
}