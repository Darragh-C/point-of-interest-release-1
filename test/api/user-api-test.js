import { assert } from "chai";
import { poiService } from "./poi-service.js";
import { assertSubset } from "../test-utils.js";
import { johnDoe, johnDoeCredentials, multiTestUsers } from "../fixtures.js";
import { EventEmitter } from "events";

EventEmitter.setMaxListeners(25);

const users = new Array(multiTestUsers.length);

suite("User API tests", () => {
  setup(async () => {
    poiService.clearAuth();
    await poiService.createUser(johnDoe);
    const response = await poiService.authenticate(johnDoeCredentials);
    await poiService.deleteAllUsers();
    for (let i = 0; i < multiTestUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await poiService.createUser(multiTestUsers[i]);
    }
    await poiService.createUser(johnDoe);
    await poiService.authenticate(johnDoeCredentials);
  });
  teardown(async () => {
  });

  test("create a user", async () => {
    const newUser = await poiService.createUser(johnDoe);
    assertSubset(johnDoe, newUser);
    assert.isDefined(newUser._id);
  });

  test("delete all users", async () => {
    let returnedUsers = await poiService.getAllUsers();
    assert.equal(returnedUsers.length, 4);
    await poiService.deleteAllUsers();
    await poiService.createUser(johnDoe);
    await poiService.authenticate(johnDoeCredentials);
    returnedUsers = await poiService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("get a user - success", async () => {
    const returnedUser = await poiService.getUser(users[0]._id);
    assert.deepEqual(users[0], returnedUser);
  });

  test("get a user - bad id", async () => {
      try {
        const returnedUser = await poiService.getUser("1234");
        assert.fail("Should not return a response");
      } catch (error) {
        assert(error.response.data.message === "No User with this id");
        assert.equal(error.response.data.statusCode, 503);
      }
  });

  test("get a user - deleted user", async () => {
    await poiService.deleteAllUsers();
    await poiService.createUser(johnDoe);
    await poiService.authenticate(johnDoeCredentials);
      try {
        const returnedUser = await poiService.getUser(users[0]._id);
        assert.fail("Should not return a response");
      } catch (error) {
        assert(error.response.data.message === "No User with this id");
        assert.equal(error.response.data.statusCode, 404);
      }
  });
});
