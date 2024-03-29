import { ExecutionReference } from "./execution-reference";
import { ExecutionStatus } from "../execution-status";
import { Ref } from "vue";

export type StatusReference<
  TResult,
  TReference extends ExecutionReference<TResponse, TArgs>,
  TResponse,
  TArgs extends unknown[],
  TError extends Error = Error,
> = TReference & {
  /**
   * Contains an Error if an Error has occurred.
   * Null otherwise.
   */
  error: Ref<TError | null>;
  /**
   * Contains the result, if successful.
   * Null otherwise.
   */
  result: Ref<TResult | null>;
  /**
   * Contains status information about the execution.
   */
  status: Ref<ExecutionStatus | null>;
};
