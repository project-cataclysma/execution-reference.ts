import {
  ExecutionReference,
  ExecutionConfig,
  Method,
  Pipeline,
} from "../types";
import { isMethodWithParameters } from "../types/method/method-with-parameters";
import { usePipelineValuesComposable } from "./pipeline-builders/use-values-pipeline-builder";
import { usePipelineExecuteComposable } from "./pipeline-builders/use-execute-pipeline-builder";
import { usePipelineStatusComposable } from "./pipeline-builders/use-status-pipeline-builder";
import { usePipelineGetComposable } from "./pipeline-builders/use-get-pipeline-builder";
import { usePipelineValueComposable } from "./pipeline-builders/use-value-pipeline-builder";
import { usePipelineFormComposable } from "./pipeline-builders/use-form-pipeline-builder";
import { usePipelineReactiveComposable } from "./pipeline-builders/use-reactive-pipeline-builder";
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
  const get = usePipelineGetComposable(
    composableBuilder,
    method,
    defaultConfig,
  );
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
    const form = usePipelineFormComposable(
      composableBuilder,
      method,
      defaultConfig,
    );
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
