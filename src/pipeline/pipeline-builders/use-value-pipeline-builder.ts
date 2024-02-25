import { ExecutionConfig, ExecutionReference, Method } from "../../types";
import { PipelineValueComposable } from "../../types/pipeline/pipeline-value-composable";
import { usePipeline } from "../use-pipeline";
import { ComposableBuilder } from "../../types/composables/composable-builder";

export function usePipelineValueComposable<
  TReference extends ExecutionReference<TResponse, PN>,
  TResponse,
  P1,
  PN extends unknown[],
>(
  composableBuilder: ComposableBuilder<TReference, TResponse, PN>,
  method: Method<TResponse, [p1: P1, ...args: PN]>,
  defaultConfig?: ExecutionConfig<TResponse, PN>,
): PipelineValueComposable<TResponse, P1, PN> {
  return (arg: P1) =>
    usePipeline(
      composableBuilder,
      (...args: PN) => method(arg, ...args),
      defaultConfig,
    );
}
