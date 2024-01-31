import {
  ExecutionReference,
  ExecutionConfig,
  Method,
  Pipeline,
} from "../types";
import { isMethodWithParameters } from "../types/method/method-with-parameters";
import { usePipelineValuesComposable } from "./use-pipeline-values-composable";
import { usePipelineExecuteComposable } from "./use-pipeline-execute-composable";
import { usePipelineStatusComposable } from "./use-pipeline-status-composable";
import { usePipelineGetComposable } from "./use-pipeline-get-composable";
import { usePipelineValueComposable } from "./use-pipeline-value-composable";
import { usePipelineFormComposable } from "./use-pipeline-form-composable";
import { usePipelineReactiveComposable } from "./use-pipeline-reactive-composable";
import { ComposableBuilder } from "../types/composables/composable-builder";

export function usePipeline<
  TReference extends ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArgs extends unknown[],
>(
  composableBuilder: ComposableBuilder<TReference, TResponse, TArgs>,
  method: Method<TResponse, TArgs>,
  defaultConfig?: ExecutionConfig<TResponse, TArgs>,
): Pipeline<TReference, TResponse, TArgs> {
  const get = usePipelineGetComposable(composableBuilder, method, defaultConfig);
  const execute = usePipelineExecuteComposable(
    composableBuilder,
    method,
    defaultConfig,
  );
  const status = usePipelineStatusComposable(
    composableBuilder,
    method,
    defaultConfig,
  );

  if (isMethodWithParameters(method)) {
    const reactive = usePipelineReactiveComposable(
      composableBuilder,
      method,
      defaultConfig,
    );
    const value = usePipelineValueComposable(
      composableBuilder,
      method,
      defaultConfig,
    );
    const form = usePipelineFormComposable(composableBuilder, method, defaultConfig);
    const values = usePipelineValuesComposable(
      composableBuilder,
      method,
      defaultConfig,
    );
    return {
      execute,
      form,
      get,
      reactive,
      status,
      value,
      values,
    } as Pipeline<TReference, TResponse, TArgs>;
  } else {
    return {
      execute,
      get,
      status,
    } as Pipeline<TReference, TResponse, TArgs>;
  }
}
