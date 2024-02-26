# Reference Composable Builders

A very similar concept to [Reference Composable Transform Methods](../reference-composables/README.md#transform-methods)

There is however, one key difference, Composable Builders do not output a `ReferenceComposable`. They instead output a function to create a `ReferenceComposable` (hence `ReferenceComposableBuilder`). This allows for developers to use this library to create their own composables to satisfy the needs of their API. Further, it lays the groundwork for the Pipeline, which will allow the stacking of multiple `ReferenceComposables` before executing them.

Again, a key note here, is that executing a `ReferenceComposableBuilder` does not execute a composable, instead it creates a function to create a composable. This is for programatic sequencing of Reference Composable Transforms.

## Direct Methods

There are two Direct Methods defined:

1. `useExecutionReferenceComposable`, which is parameterless. Executing the method `useExecutionReferenceComposable` will create an instance of the `useExecutionReference`composable.
2. `useComposableBuilder`

## Transform Methods
