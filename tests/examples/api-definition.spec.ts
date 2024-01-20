import { describe, it, expect } from "vitest";
import { usePipelineExecution } from "../../src";

describe("api definition example", () => {
  function doThingAsync(
    name: string,
    id: number,
    mode: "cat1" | "cat2",
  ): Promise<string> {
    return Promise.resolve(mode === "cat1" ? `${name}/${id}` : `${name}-${id}`);
  }
  const doThingPipeline = usePipelineExecution<
    string,
    [name: string, id: number, mode: "cat1" | "cat2"]
  >(doThingAsync);
  const api = {
    // doThing: doThingPipeline.status({
    //   getResult: (resp) => resp,
    // }),
    doThing: doThingPipeline.execute,
  };
  it("can run from the original async function", async () => {
    const user1 = await doThingAsync("user", 1, "cat1");
    const user2 = await doThingAsync("user", 2, "cat2");
    expect(user1).toBe("user/1");
    expect(user2).toBe("user-2");
  });
  it("can be ranas a pipeline with little modification", async () => {
    // DONE #1, api.doThing() needs to look more like: api.doThing('user', :id, :mode)
    // TODO #2, we need a way to automatically schedule execution so we can remove execution aliasing
    // TODO #3, we need a way to be able to nest pipeline actions. Such as running value, status and execute.
    const { result: user1, execute: execute1 } = api.doThing("user", 1, "cat1");
    const { result: user2, execute: execute2 } = api.doThing("user", 2, "cat2");
    await execute1("user", 1, "cat1");
    await execute2("user", 2, "cat2");
    expect(user1.value).toBe("user/1");
    expect(user2.value).toBe("user-2");
  });
});
