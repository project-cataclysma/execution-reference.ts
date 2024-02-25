import { ExecutionConfig } from "../configs";
import { Method } from "../method";

/**
 * This is a helper type for pipeline composables.
 */
export type ReferenceBuilder<
  TReference,
  TReferenceComposable,
  TResponse,
  TArgs extends unknown[],
  TComposableArgs extends unknown[],
> = (
  referenceComposable: TReferenceComposable,
  method: Method<TResponse, TArgs>,
  configuration: ExecutionConfig<TResponse, TArgs>,
  ...composableArgs: TComposableArgs
) => TReference;
