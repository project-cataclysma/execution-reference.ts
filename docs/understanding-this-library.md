# The Goal

This library has two objectives:

1. To provide a simplified state machine for asynchronous methods in TypeScript.
2. To provide an easy to use structure to facilitate the developer experience of migrating to this libraries structure.

# Usage Structure

Current Structure

```mermaid
stateDiagram
direction LR;
[*] --> ExecutionReference
ExecutionReference --> ViewA
ExecutionReference --> ViewB
ExecutionReference --> ExecutionComposable
AsyncMethod --> ViewA
AsyncMethod --> ViewB
AsyncMethod --> ExecutionComposable
ExecutionComposable --> ViewC
ExecutionComposable --> ViewD
ExecutionReference --> ValueReference
ValueReference --> ValueComposable
ExecutionComposable --> ValueComposable
ValueComposable --> ViewE
ValueComposable --> ViewF
ValueReference --> FormReference
FormReference --> FormComposable
ValueComposable --> FormComposable
FormComposable --> ViewG
FormComposable --> ViewH
```

Future Structure

```mermaid
stateDiagram
direction LR;
[*] --> ExecutionReference
ExecutionReference --> ViewA
ExecutionReference --> ViewB
ExecutionReference --> BuildComposable
AsyncMethod --> ViewA
AsyncMethod --> ViewB
AsyncMethod --> BuildComposable
BuildComposable --> ViewC
BuildComposable --> ViewD
ExecutionReference --> ValueReference
ValueReference --> BuildComposable
BuildComposable --> ViewE
BuildComposable --> ViewF
ValueReference --> FormReference
FormReference --> BuildComposable
BuildComposable --> ViewG
BuildComposable --> ViewH
```

Final Structure

```mermaid
stateDiagram
direction LR;
[*] --> Pipeline
AsyncMethod --> Pipeline
Pipeline --> Pipeline: Value
Pipeline --> Pipeline: Values
Pipeline --> Pipeline: Form
Pipeline --> Pipeline: Cache
Pipeline --> Execute
Pipeline --> Get
Execute --> Reference
Get --> Reference
Reference --> ViewH
Reference --> ViewG
Reference --> ViewF
Reference --> ViewE
Reference --> ViewD
Reference --> ViewC
```
