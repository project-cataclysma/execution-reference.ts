import {
  ExecutionReference,
  ExecutionConfig,
  Method,
  Pipeline,
} from "../types";
import { useExecutionReference } from "../reference-composables";
import { usePipeline } from "./use-pipeline-builder";

export function usePipelineExecution<TResponse, TArgs extends unknown[]>(
  method: Method<TResponse, TArgs>,
  defaultConfig?: ExecutionConfig<TResponse, TArgs>,
): Pipeline<ExecutionReference<TResponse, TArgs>, TResponse, TArgs> {
  return usePipeline(useExecutionReference, method, defaultConfig);
}
