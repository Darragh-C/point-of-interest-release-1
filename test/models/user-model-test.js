import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { johnDoe, multiTestUsers } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";
import { EventEmitter } from "events";

EventEmitter.setMaxListeners(25);

suite("User Model tests", () => {

  setup(async () => {
    db.init("mongo");
    await db.userStore.deleteAll();
    for (let i = 0; i < multiTestUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      multiTestUsers[i] = await db.userStore.addUser(multiTestUsers[i]);
    }
  });

  test("create a user", async () => {
    const newUser = await db.userStore.addUser(johnDoe);
    assertSubset(johnDoe, newUser);
  });

  test("delete all users", async () => {
    let returnedUsers = await db.userStore.getAllUsers();
    assert.equal(returnedUsers.length, 3);
    await db.userStore.deleteAll();
    returnedUsers = await db.userStore.getAllUsers();
    assert.equal(returnedUsers.length, 0);
  });

  test("get a user - success", async () => {
    const user = await db.userStore.addUser(johnDoe);
    const returnedUser1 = await db.userStore.getUserById(user._id);
    assert.deepEqual(user, returnedUser1);
    const returnedUser2 = await db.userStore.getUserByEmail(user.email);
    assert.deepEqual(user, returnedUser2);
  });

  test("get a user - bad params", async () => {
    assert.isNull(await db.userStore.getUserById(""));
    assert.isNull(await db.userStore.getUserById());
    assert.isNull(await db.userStore.getUserByEmail(""));
  });

  test("delete single user - success", async () => {
    await db.userStore.deleteUserById(multiTestUsers[0]._id);
    const returnedUsers = await db.userStore.getAllUsers();
    assert.equal(returnedUsers.length, multiTestUsers.length - 1);
    const deletedUser = await db.userStore.getUserById(multiTestUsers[0]._id);
    assert.isNull(deletedUser);
  });

  test("delete single user - fail", async () => {
    await db.userStore.deleteUserById("bad-id");
    const allUsers = await db.userStore.getAllUsers();
    assert.equal(multiTestUsers.length, allUsers.length);
  });
/*
  test("edit user name", async () => {
    let user = await db.userStore.addUser(johnDoe);
    //let user = await db.userStore.getUserById(johnDoe._id);
    assert.equal(user.lastName, "Doe");
    let updatedUser = {
        firstName: "Jiminy",
        lastName: "Cricket",
    };
    await db.userStore.updateName(user, updatedUser);
    user = await db.userStore.getUserById(user._id);
    assert.equal(user.firstName, "Jiminy");
    assert.equal(user.lastName, "Cricket");
  })

  test("edit user password", async () => {
    let user = await db.userStore.addUser(johnDoe);
    assert.equal(user.lastName, "Doe");
    let updatedUser = {
        password: "test",
    };
    await db.userStore.updatePassword(user, updatedUser);
    user = await db.userStore.getUserById(user._id);
    assert.equal(user.password, "test");
  })

  test("edit user email", async () => {
    let user = await db.userStore.addUser(johnDoe);
    assert.equal(user.lastName, "Doe");
    let updatedUser = {
        email: "test@test.com",
    };
    await db.userStore.updateEmail(user, updatedUser);
    user = await db.userStore.getUserById(user._id);
    assert.equal(user.email, "test@test.com");
  })
  */
});
