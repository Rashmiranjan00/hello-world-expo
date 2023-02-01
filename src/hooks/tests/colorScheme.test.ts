import { renderHook } from "@testing-library/react-hooks";
import colorScheme from "../colorScheme";

describe("colorScheme", () => {
  const hook = renderHook(() => colorScheme());

  it("returns the expected values", () => {
    expect(hook.result.current).toBe("light");
  });
});
