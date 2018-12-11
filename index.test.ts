import test, { Test } from "tape";
import { cond } from ".";

const eq = (a: any) => (b: any) => a === b;
const always = (value: any) => () => value;
const T = always(true);
const F = always(false);

test("works", (t: Test) => {
  t.plan(1);

  const result = cond([[F, always("false")], [T, always("true")]])();

  t.equal(result, "true", "returns correct logic path");
});

test("works with argument", (t: Test) => {
  t.plan(1);

  const animal = "dog";

  const applyTest = cond([
    [eq("cat"), (a: string) => `${a} is bossy`],
    [eq("dog"), (a: string) => `${a} is your best friend`],
    [eq("skunk"), (a: string) => `${a} is stinky`],
    [T, always("failed the test")]
  ]);

  const result = applyTest(animal);

  t.equal(result, "dog is your best friend");
});
