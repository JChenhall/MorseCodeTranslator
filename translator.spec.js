
import {translateEnglishToMorse,} from "./translator.js";

///TESTING ENGILISH ----> MORSE
describe("lowerCaseEng-Morse", () => {
  it("Should translate a to ._", () => {
    const result = translateEnglishToMorse("a");
    expect(result).toBe("._");
  });

  it("Should translate b to _...", () => {
    const result = translateEnglishToMorse("b");
    expect(result).toBe("_...");
  });
  
  it("Should translate c to _. _.", () => {
    const result = translateEnglishToMorse("c");
    expect(result).toBe("_._.");
  });

  it("Should translate d to _..", () => {
    const result = translateEnglishToMorse("d");
    expect(result).toBe("_..");
  });

  it("Should translate e to .", () => {
    const result = translateEnglishToMorse("e");
    expect(result).toBe(".");
  });

  it("Should translate f to .._.", () => {
    const result = translateEnglishToMorse("f");
    expect(result).toBe(".._.");
  });

  it("Should translate g to __.", () => {
    const result = translateEnglishToMorse("g");
    expect(result).toBe("__.");
  });

  it("Should translate h to ....", () => {
    const result = translateEnglishToMorse("h");
    expect(result).toBe("....");
  });
  it("Should translate i to ..", () => {
    const result = translateEnglishToMorse("i");
    expect(result).toBe("..");
  });
  it("Should translate j to .____", () => {
    const result = translateEnglishToMorse("j");
    expect(result).toBe(".____");
  });
  it("Should translate k to _ . _", () => {
    const result = translateEnglishToMorse("k");
    expect(result).toBe("_._");
  });
  it("Should translate l to ._..", () => {
    const result = translateEnglishToMorse("l");
    expect(result).toBe("._..");
  });
  it("Should translate m to __", () => {
    const result = translateEnglishToMorse("m");
    expect(result).toBe("__");
  });
  it("Should translate n to _.", () => {
    const result = translateEnglishToMorse("n");
    expect(result).toBe("_.");
  });
  it("Should translate o to ___", () => {
    const result = translateEnglishToMorse("o");
    expect(result).toBe("___");
  });
  it("Should translate p to .__.", () => {
    const result = translateEnglishToMorse("p");
    expect(result).toBe(".__.");
  });
  it("Should translate q to __._", () => {
    const result = translateEnglishToMorse("q");
    expect(result).toBe("__._");
  });
  it("Should translate r to ._.", () => {
    const result = translateEnglishToMorse("r");
    expect(result).toBe("._.");
  });
  it("Should translate s to ...", () => {
    const result = translateEnglishToMorse("s");
    expect(result).toBe("...");
  });
  it("Should translate t to _", () => {
    const result = translateEnglishToMorse("t");
    expect(result).toBe("_");
  });
  it("Should translate u to .._", () => {
    const result = translateEnglishToMorse("u");
    expect(result).toBe(".._");
  });
  it("Should translate v to ..._", () => {
    const result = translateEnglishToMorse("v");
    expect(result).toBe("..._");
  });
  it("Should translate w to .__", () => {
    const result = translateEnglishToMorse("w");
    expect(result).toBe(".__");
  });
  it("Should translate x to _.._", () => {
    const result = translateEnglishToMorse("x");
    expect(result).toBe("_.._");
  });
  it("Should translate y to _.__", () => {
    const result = translateEnglishToMorse("y");
    expect(result).toBe("_.__");
  });
  it("Should translate z to __..", () => {
    const result = translateEnglishToMorse("z");
    expect(result).toBe("__..");
  });
 });


