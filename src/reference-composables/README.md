# Reference Composables

Reference Composables are methods that when executed will create a set of reactive elements for tracking information about a given method.

There are methods that directly give the composable, and transform methods, which will indirectly add information to the composable.

## Direct Methods

There is only one explicitly defined Reference Composable, `ExecutionReference`.

## Transform Methods

There are the following transform methods, which will ammend information or inject parameters into the provided Reference Composable.

**_NOTE: A Reference Composable might be one directly defined, or the result of another transformation method_**

| Transform   | Injection                                          | Ammended                                   | Comment                                                      |
| ----------- | -------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| Execute     | Method Parameters                                  | NA                                         | Inject Parameters during composition                         |
| Form        | The first Method Parameter as a created ref `form` | `form`                                     | Inject Parameters during composition                         |
| Reactive    | The first Method Parameter as a provided ref       | NA                                         | Inject Parameters during composition                         |
| Status      | NA                                                 | Post Processing Results, `status`, `error` | Adds important information for Form Submission and RPC Calls |
| Swap (TODO) | NA                                                 | NA                                         | Swaps the first two parameters                               |
| Value       | The first Method Parameter                         | NA                                         | Inject Parameters during composition                         |
| Values      | The first **_n_** Method Parameters                | NA                                         | Inject Parameters during composition                         |
