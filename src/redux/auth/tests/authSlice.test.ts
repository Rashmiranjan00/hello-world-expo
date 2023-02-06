import { setAuth, setAuthLoading } from "../authSlice";

describe("authSlice", () => {
  it("should create an action to add auth", () => {
    const payload = { user: { email: "johndoe@email.com" } };
    const expetedAction = {
      type: "auth/setAuth",
      payload
    };
    expect(setAuth({ user: { email: "johndoe@email.com" } })).toEqual(expetedAction);
  });

  it("should update the loading state", () => {
    const payload = true;
    const expectedAction = {
      type: "auth/setAuthLoading",
      payload
    };
    expect(setAuthLoading(true)).toEqual(expectedAction);
  });
});
