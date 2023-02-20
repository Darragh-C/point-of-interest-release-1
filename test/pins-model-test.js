import { assert } from "chai";
import { db } from "../src/models/db.js";
import { testPin, multiTestPins } from "./fixtures.js";

suite("Pin API tests", () => {
    
   setup(async () => {
        db.init();
        await db.pinStore.deleteAllPins();
        for (let i = 0; i < multiTestPins.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            await db.pinStore.addPin(multiTestPins[i]);
        }
    });

    test("create a pin", async () => {
        const newPin = await db.pinStore.addPin(testPin);
        assert.deepEqual(testPin, newPin);
    });

    test("delete all pins", async () => {
        let returnedPins = await db.pinStore.getAllPins();
        assert.equal(returnedPins.length, 3);
        await db.pinStore.deleteAllPins();
        returnedPins = await db.pinStore.getAllPins();
        assert.equal(returnedPins.length, 0);
    });

    test("get a pin by id - success", async () => {
        const pin = await db.pinStore.addPin(testPin);
        const returnedPin1 = await db.pinStore.getPinById(pin._id);
        assert.deepEqual(pin, returnedPin1);
    });

    test("get a pin by id - fail", async () => {
        const noPinWithId = await db.pinStore.getPinById("123");
        assert.isNull(noPinWithId);
    });

    test("get a pin by id - bad params", async () => {
        let nullPin = await db.pinStore.getPinById("");
        assert.isNull(nullPin);
        nullPin = await db.pinStore.getPinById();
        assert.isNull(nullPin);
    });

    test("delete single pin - success", async () => {
        await db.pinStore.deletePinById(multiTestPins[0]._id);
        const returnedPins = await db.pinStore.getAllPins();
        assert.equal(returnedPins.length, multiTestPins.length - 1);
        const deletedPin = await db.pinStore.getPinById(multiTestPins[0]._id);
        assert.isNull(deletedPin);
    });

    test("delete single pin - fail", async () => {
        await db.pinStore.deletePinById("bad-id");
        const allPins = await db.pinStore.getAllPins();
        assert.equal(multiTestPins.length, allPins.length);
      });
});