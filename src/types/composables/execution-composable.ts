import { ExecutionConfig } from "../../types";
import { ExecuitonReference } from "../references";

export type ExecutionComposable<
    TResponse,
    TArgs extends any[]
> = (config?: Partial<ExecutionConfig<TResponse, TArgs>>) => ExecuitonReference<TResponse, TArgs>