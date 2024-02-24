# Understanding the Pipeline

For this package, the pipeline is a relatively simple concept:
We have pipeline-methods and pipeline-endpoints.

To explain it simply, we need to start with the pipeline-endpoint, which is a method which generates an `ExecutionReference`, this requires the method to implement the `ComposableBuilder` type. The default being `useExecutionReference` method.

A pipeline-method takes in atleast two parameters, the `ComposableBuilder`, the `Method`, and potentially a few more extra parameters. This is the `PipelineMethod` type.

The type `Pipeline` has a few defaault pipeline-methods such as status, value, values, and reactive. There are also a few pipeline-endpoints such as get, form and execute.

What does all of this mean?

- pipeline-methods are properties of the pipeline, which will wrap the old pipeline into a new one, with modified behavior. For example, the value method will inject a parameter, returning a new pipeline that does not need that parameter.
- pipeline-endpoints are properties of the pipeline, which will return a composable. For example, the get endpoint will return a composable, which will require the remaining parameters to execute.

In short, use pipeline-methods to pipe data, use pipeline-endpoints to recurse into a composable.

# Understanding Types

At the Core of this library, is the Reference Types.
The lowest level of the reference type is the `ExecutionReference`, which gets consumed by `ValueReference` and `FormReference`

This library has composables for creating references, these are called `ComposableBuilders`.

`PipelineBuilders` can be setup to recurse through multple `ComposableBuilders` to create a complex Reference, such as a Reference combining `ValueReference` and `FormReference`

Finally, the `Pipeline` itself is a type with methods to configure the recursive execution of `PipelineBuilders`.

This means: To Create a Reference of some type, execute `use[Feature]Reference`, which is a `ComposableBuilder`.

To Create a Composable for that Reference, execute `useComposableBuilder`, providing the Feature.
