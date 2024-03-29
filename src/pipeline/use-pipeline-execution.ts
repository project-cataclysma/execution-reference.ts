import {
  ExecutionReference,
  ExecutionConfig,
  Method,
  Pipeline,
} from "../types";
import { useExecutionReference } from "../references";
import { usePipeline } from "./use-pipeline";

export function usePipelineExecution<TResponse, TArgs extends unknown[]>(
  method: Method<TResponse, TArgs>,
  defaultConfig?: ExecutionConfig<TResponse, TArgs>,
): Pipeline<ExecutionReference<TResponse, TArgs>, TResponse, TArgs> {
  return usePipeline(useExecutionReference, method, defaultConfig);
}
