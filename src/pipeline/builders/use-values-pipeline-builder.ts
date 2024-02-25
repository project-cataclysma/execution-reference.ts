import {
  Method,
  ExecutionConfig,
  ExecutionReference,
  ComposableBuilder,
} from "../../types";
import { useValuesComposable } from "../../composables";

export function useValuesPipelineBuilder<
  TReference extends ExecutionReference<TResponse, [...pi: TPI, ...pf: TPF]>,
  TResponse,
  TPI extends unknown[],
  TPF extends unknown[],
>(
  composableBuilder: ComposableBuilder<
    TReference,
    TResponse,
    [...pi: TPI, ...pf: TPF]
  >,
  method: Method<TResponse, [...pi: TPI, ...pf: TPF]>,
  defaultConfig?: ExecutionConfig<TResponse, [...pi: TPI, ...pf: TPF]>,
) {
  return (...pi: TPI) =>
    useValuesComposable(
      composableBuilder,
      (...pf: TPF) => method(...pi, ...pf),
      defaultConfig,
    );
}
