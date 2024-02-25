import {
  ExecutionReference,
  ExecutionConfig,
  Method,
  Pipeline,
} from "../types";
import { isMethodWithParameters } from "../types/method/method-with-parameters";
import { useValuesPipelineBuilder } from "./builders/use-values-pipeline-builder";
import { useExecutePipelineBuilder } from "./builders/use-execute-pipeline-builder";
import { useStatusPipelineBuilder } from "./builders/use-status-pipeline-builder";
import { useGetPipelineBuilder } from "./builders/use-get-pipeline-builder";
import { useValuePipelineBuilder } from "./builders/use-value-pipeline-builder";
import { useFormPipelineBuilder } from "./builders/use-form-pipeline-builder";
import { useReactivePipelineBuilder } from "./builders/use-reactive-pipeline-builder";
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
  const get = useGetPipelineBuilder(composableBuilder, method, defaultConfig);
  const execute = useExecutePipelineBuilder(
    composableBuilder,
    method,
    defaultConfig,
  );
  const status = useStatusPipelineBuilder(
    composableBuilder,
    method,
    defaultConfig,
  );

  if (isMethodWithParameters(method)) {
    const reactive = useReactivePipelineBuilder(
      composableBuilder,
      method,
      defaultConfig,
    );
    const value = useValuePipelineBuilder(
      composableBuilder,
      method,
      defaultConfig,
    );
    const form = useFormPipelineBuilder(
      composableBuilder,
      method,
      defaultConfig,
    );
    const values = useValuesPipelineBuilder(
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
