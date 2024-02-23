import { ComposableBuilder } from "..";
import { ExecutionConfig } from "../configs";
import { Method } from "../method";

/**
 * This is a helper type for pipeline composables.
 */
export type ReferenceBuilder<
  TReference,
  TComposable,
  TResponse,
  TArgs extends unknown[],
  TComposableArgs extends unknown[] = [],
> = (
  composableBuilder: ComposableBuilder<
    TComposable,
    TResponse,
    TArgs,
    TComposableArgs
  >,
  method: Method<TResponse, TArgs>,
  configuration: ExecutionConfig<TResponse, TArgs>,
  ...composableArgs: TComposableArgs
) => TReference;
