import { Ref, ref } from "vue";
import {
  ComposableBuilder,
  Method,
  ExecutionReference,
  ExecutionConfig,
  FormReference,
} from "../types";

export function useFormReference<
  TReference extends ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArg,
  TArgs extends unknown[],
>(
  composableBuilder: ComposableBuilder<TReference, TResponse, TArgs>,
  method: Method<TResponse, [arg: TArg, ...args: TArgs]>,
  configuration: ExecutionConfig<TResponse, TArgs>,
  initialValue: TArg,
): FormReference<TReference, TResponse, TArg, TArgs> {
  const form = ref(initialValue) as Ref<TArg>;
  const reference = composableBuilder(
    (...args: TArgs) => method(form.value, ...args),
    configuration,
  );
  return {
    ...reference,
    form,
  };
}
