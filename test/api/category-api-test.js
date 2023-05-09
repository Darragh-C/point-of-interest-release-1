import { assert } from "chai";
import { poiService } from "./poi-service.js";
import { assertSubset } from "../test-utils.js";
import { johnDoe, johnDoeCredentials, testPin, multiTestPins, testCategory, testCategories } from "../fixtures.js";
import { EventEmitter } from "events";

EventEmitter.setMaxListeners(25);

suite("Category API tests", () => {
  let user = null;
  let pin = null;

  setup(async () => {
    poiService.clearAuth();
    user = await poiService.createUser(johnDoe);
    await poiService.authenticate(johnDoeCredentials);
    await poiService.deleteAllPins();
    await poiService.deleteAllCategories();
    await poiService.deleteAllUsers();
    user = await poiService.createUser(johnDoe);
    await poiService.authenticate(johnDoeCredentials);
    testPin.userid = user._id;
    pin = await poiService.createPin(testPin);
  });
  teardown(async () => {
  });

  test("create a category", async () => {
    console.log(testCategory);
    const newCategory = await poiService.createCategory(pin._id, testCategory);
    console.log(newCategory);
    assertSubset(testCategory, newCategory);
  });

  test("create multiple categories", async () => {
    for (let i = 0; i < testCategories.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await poiService.createCategory(pin._id, testCategories[i]);
    }
    const returnedCategories = await poiService.getAllCategories();
    console.log(returnedCategories);
    assert.equal(returnedCategories.length, testCategories.length);
    for (let i = 0; i < returnedCategories.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const category = await poiService.getCategory(returnedCategories[i]._id)
      assertSubset(category, returnedCategories[i]);
    }
  });

  test("delete all categories", async () => {
    for (let i = 0; i < testCategories.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await poiService.createCategory(pin._id, testCategories[i]);
    }
    let returnedCategories = await poiService.getAllCategories();
    assert.equal(returnedCategories.length, testCategories.length);
    console.log(returnedCategories);
    for (let i = 0; i < returnedCategories.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const category = await poiService.deleteCategory(returnedCategories[i]._id);
    }
    returnedCategories = await poiService.getAllCategories();
    assert.equal(returnedCategories.length, 0);
  });

});
