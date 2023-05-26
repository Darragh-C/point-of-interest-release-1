import { assert } from "chai";
import { poiService } from "./poi-service.js";
import { assertSubset } from "../test-utils.js";
import { johnDoe, johnDoeCredentials, testPin, multiTestPins, pinUpdates } from "../fixtures.js";
import { EventEmitter } from "events";

EventEmitter.setMaxListeners(25);

suite("Pin API tests", () => {
  let user = null;
    
  setup(async () => {
    poiService.clearAuth();
    user = await poiService.createUser(johnDoe);
    await poiService.authenticate(johnDoeCredentials);
    await poiService.deleteAllPins();
    await poiService.deleteAllUsers();
    user = await poiService.createUser(johnDoe);
    await poiService.authenticate(johnDoeCredentials);
    testPin.userid = user._id;

  });
  teardown(async () => {
  });

  test("create a pin", async () => {
    const newPin = await poiService.createPin(testPin);
    console.log(newPin);
    assert.isNotNull(newPin);
    assertSubset(testPin, newPin);
  });

  test("create multiple pins" , async () => {
    for (let i = 0; i < multiTestPins.length; i += 1) {
      multiTestPins[i].userid = user._id;
      // eslint-disable-next-line no-await-in-loop
      await poiService.createPin(multiTestPins[i]);
    }
    let returnedPins = await poiService.getAllPins();
    assert.equal(returnedPins.length, multiTestPins.length);
    await poiService.deleteAllPins();
    returnedPins = await poiService.getAllPins();
    assert.equal(returnedPins.length, 0);
  });

  test("delete all pins", async () => {
      for (let i = 0; i < multiTestPins.length; i += 1) {
        multiTestPins[i].userid = user._id;
        // eslint-disable-next-line no-await-in-loop
        await poiService.createPin(multiTestPins[i]);
      }
      let returnedPins = await poiService.getAllPins();
      console.log(returnedPins);
      assert.equal(returnedPins.length, 3);
      await poiService.deleteAllPins();
      returnedPins = await poiService.getAllPins();
      assert.equal(returnedPins.length, 0);
  });
  
  test("get a pin - success", async () => {
    const addedPin = await poiService.createPin(testPin);
    const returnedPin = await poiService.getPin(addedPin._id);
    assert.deepEqual(addedPin, returnedPin);
  });

  test("get a pin - fail", async () => {
      try {
        const returnedPin = await poiService.getPin("1234");
        assert.fail("Should not return a response");
      } catch (error) {
        assert(error.response.data.message === "No Pin with this id");
        assert.equal(error.response.data.statusCode, 503);
      }
  });


  test("delete a pin", async () => {
    const pin = await poiService.createPin(testPin);
    const response = await poiService.deletePin(pin._id);
    assert.equal(response.status, 204);
    try {
      const returnedPin = await poiService.getPin(pin.id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Pin with this id", "Incorrect Response Message");
    }
  });

  test("remove non-existant pin", async () => {
    try {
      const response = await poiService.deletePin("not an id");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No pin with this id", "Incorrect Response Message");
    }
  });

  test("upload image", async () => {
    const newPin = await poiService.createPin(testPin);
    console.log(newPin);
    assert.isNotNull(newPin);
    assertSubset(testPin, newPin);
  });

  test("pin update", async () => {
    const pin = await poiService.createPin(testPin);
    const dbPin = await poiService.getPin(pin._id);
    console.log(dbPin);
    console.log(`dbPin id: ${dbPin._id}`);
    assertSubset(dbPin, testPin);
    const test = await poiService.pinUpdate(dbPin._id, pinUpdates);
    console.log(test);
    
  });

  test("update pin", async () => {
    const pin = await poiService.createPin(testPin);
    const dbPin = await poiService.getPin(pin._id);
    console.log(dbPin);
    console.log(`dbPin id: ${dbPin._id}`);
    assertSubset(dbPin, testPin);
    const test = await poiService.updatePin(dbPin._id, pinUpdates);
    console.log(test);
    
  });

});