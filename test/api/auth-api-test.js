import { assert } from "chai";
import { poiService } from "./poi-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { johnDoe, johnDoeCredentials } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    console.log("test");
    poiService.clearAuth();
    const jd = await poiService.createUser(johnDoe);
    console.log(jd);
    const response = await poiService.authenticate(johnDoeCredentials);
    console.log(response);
    await poiService.deleteAllUsers();
  });

  test("authenticate", async () => {
    console.log("test");
    const returnedUser = await poiService.createUser(johnDoe);
    console.log(returnedUser);
    const response = await poiService.authenticate(johnDoeCredentials);
    console.log(response);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await poiService.createUser(johnDoe);
    const response = await poiService.authenticate(johnDoeCredentials);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("check Unauthorized", async () => {
    poiService.clearAuth();
    try {
      await poiService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});

