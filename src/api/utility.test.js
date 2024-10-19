import { handleError, isUserAuthorized } from "./utility";

describe("utitlity test cases - isUserAuthorized", () => {
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      value: { assign: jest.fn() },
    });
  });
  it("status 200", () => {
    expect(isUserAuthorized({ status: 200 })).toBeTruthy();
  });
  it("status 401", () => {
    expect(isUserAuthorized({ status: 401 })).toBeFalsy();
  });
});

describe("utitlity test cases - handleError", () => {
  it("no error message", () => {
    const { errMsg } = handleError({ status: 200 });
    expect(errMsg).toBe("");
  });
  it("string error message", () => {
    const { errMsg } = handleError({
      response: {
        status: 401,
        data: { err: "Unauthorized" },
      },
    });
    expect(errMsg).toBe("Unauthorized");
  });
  it("object error message", () => {
    const { errMsg } = handleError({
      response: {
        status: 401,
        data: {
          err: {
            errorResponse: {
              code: 1000,
              errmsg: "Duplicate mail",
            },
          },
        },
      },
    });
    const { errMsg: newErrMsg } = handleError({
      response: {
        status: 401,
        data: {
          err: {
            errorResponse: {},
          },
        },
      },
    });
    expect(errMsg).toBe("Duplicate mail");
    expect(newErrMsg).toBe("");
  });
});
