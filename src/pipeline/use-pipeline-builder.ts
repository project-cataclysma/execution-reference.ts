import {
  ExecutionReference,
  ExecutionConfig,
  Method,
  Pipeline,
} from "../types";
import { isMethodWithParameters } from "../types/method/method-with-parameters";
import { useValuesPipelineBuilder } from "./transforms/use-values-pipeline-transform";
import { useExecutePipelineBuilder } from "./transforms/use-execute-pipeline-transform";
import { useStatusPipelineBuilder } from "./transforms/use-status-pipeline-transform";
import { useGetPipelineBuilder } from "./transforms/use-get-pipeline-transform";
import { useValuePipelineBuilder } from "./transforms/use-value-pipeline-transform";
import { useFormPipelineBuilder } from "./transforms/use-form-pipeline-transform";
import { useReactivePipelineBuilder } from "./transforms/use-reactive-pipeline-transform";
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
