/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "../../store";
import { AuthSliceState } from "../authModel";
import { selectUser } from "../authSelectors";

const emptyState: RootState = {
  secure: {} as any
} as any;

describe("authSelectors", () => {
  it("should loading return true", () => {
    const state: RootState = {
      secure: {
        _persist: {} as any,
        auth: {
          user: {
            firstName: "firstName",
            lastName: "lastName",
            email: "email@email.com"
          }
        } as AuthSliceState
      }
    } as any;

    const value = selectUser(state);
    expect(value).toBeTruthy();
  });

  it("should loading return false", () => {
    const value = selectUser(emptyState);
    expect(value).toBeFalsy();
  });
});
