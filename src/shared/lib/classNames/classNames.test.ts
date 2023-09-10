import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("class1")).toBe("class1");
  });

  test("with additional class", () => {
    expect(classNames("class1", {}, ["class2", "class3"])).toBe("class1 class2 class3");
  });

  test("with mods", () => {
    expect(classNames("class1", { class2: true, class3: true }, ["class4", "class5"])).toBe(
      "class1 class2 class3 class4 class5",
    );
  });

  test("with mods false", () => {
    expect(classNames("class1", { class2: true, class3: false }, ["class4", "class5"])).toBe(
      "class1 class2 class4 class5",
    );
  });

  test("with mods undefined", () => {
    expect(classNames("class1", { class2: true, class3: undefined }, ["class4", "class5"])).toBe(
      "class1 class2 class4 class5",
    );
  });
});
