open Jest;
open Expect;

describe("NpcGen", () => {
  test("rollD6", () =>
       expect(NpcGen.rollD6())
       |> toBeLessThan(6)
       );

  test("rollD6", () =>
  expect(NpcGen.rollD6())
    |> toBeGreaterThan(0)
    );
});

