import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testCategory, testCategories, multiTestPins, testPin } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";
import { EventEmitter } from "events";

EventEmitter.setMaxListeners(25);

suite("Category Model tests", () => {
    let pin = null;
    
   setup(async () => {
        db.init("mongo");
        await db.categoryStore.deleteAllCategories();
        await db.pinStore.deleteAll();
        // add pins
        
        let pin = await db.pinStore.addPin(testPin); 
        /* 
        for (let i = 0; i < multiTestPins.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            const pin = await db.pinStore.addPin(multiTestPins[i]);
            pins.push(pin);
        }
        */
        // add a category to each pin in multitestpins
        for (let i = 0; i < testCategories.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            await db.categoryStore.addCategory(pin._id, testCategories[i]);
        }
    });

    test("create a category", async () => {
        const pin = await db.pinStore.addPin(testPin);
        const newCategory = await db.categoryStore.addCategory(pin._id, testCategory);
        assert.isNotNull(newCategory._id);
        assertSubset(testCategory, newCategory);
    });

    
    test("delete all categories", async () => {
        let returnedCategories = await db.categoryStore.getAllCategories();
        assert.equal(returnedCategories.length, 3);
        await db.categoryStore.deleteAllCategories();
        returnedCategories = await db.categoryStore.getAllCategories();
        assert.equal(returnedCategories.length, 0);
    });

    test("get a category by id - success", async () => {
        const pin = await db.pinStore.addPin(testPin);
        const category = await db.categoryStore.addCategory(pin._id, testCategory);
        const returnedCategory = await db.categoryStore.getCategoryById(category._id);
        assert.deepEqual(category, returnedCategory);
    });

    test("get a category by id - fail", async () => {
        let noCategoryWithId = await db.categoryStore.getCategoryById("ObjectId(123");
        assert.isNull(noCategoryWithId);
    });

    test("get a category by id - bad params", async () => {
        let nullCategory = await db.categoryStore.getCategoryById("");
        assert.isNull(nullCategory);
        nullCategory = await db.categoryStore.getCategoryById();
        assert.isNull(nullCategory);
    });

    test("get a pin's categories", async () => {
      // add all categories to testPin
      const pin = await db.pinStore.addPin(testPin);
      for (let i = 0; i < testCategories.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await db.categoryStore.addCategory(pin._id, testCategories[i]);
    }
      const pinCategories = await db.categoryStore.getPinCategories(pin._id);
      assertSubset(pinCategories, testCategories);
    });

    test("delete single category - success", async () => {
        const allCategories = await db.categoryStore.getAllCategories();
        await db.categoryStore.deleteCategoryById(allCategories[0]._id);
        const returnedCategories = await db.categoryStore.getAllCategories();
        assert.equal(returnedCategories.length, allCategories.length - 1);
        const deletedCategory = await db.categoryStore.getCategoryById(allCategories[0]._id);
        assert.isNull(deletedCategory);
    });

    test("delete single category - fail", async () => {
        const allCategories = await db.categoryStore.getAllCategories();
        await db.categoryStore.deleteCategoryById("bad-id");
        const updatedCategories = await db.categoryStore.getAllCategories();
        assert.equal(updatedCategories.length, allCategories.length);
    });

    test("get all pins distinct categories", async () => {
      const originalCategories = await db.categoryStore.getAllCategories();
      // add duplicate categories
      const pin = db.pinStore.addPin(testPin);
      for (let i = 0; i < testCategories.length; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          await db.categoryStore.addCategory(pin._id, testCategories[i]);
      } 
      // tests the duplicate categories added
      const updatedCategories = await db.categoryStore.getAllCategories();
      assert.equal(originalCategories.length * 2, updatedCategories.length);
      // tests for distinct categories
      const distinctCategories = await db.categoryStore.getDistinctCategories();
      assert.equal(originalCategories.length, distinctCategories.length);
      assertSubset(originalCategories, distinctCategories);
    });

    test("get single pin distinct categories", async () => {
        // add 3 categories and 3 duplicate categories
        const pin = db.pinStore.addPin(testPin);
        for (let i = 0; i < 2; i += 1) {
            for (let j = 0; j < testCategories.length; j += 1) {
                // eslint-disable-next-line no-await-in-loop
                await db.categoryStore.addCategory(pin._id, testCategories[j]);
            } 
        }
        const pinIdArray = [pin._id];
        const distinctCategories = await db.categoryStore.getPinCategoriesDistinct(pinIdArray);
        assert.equal(distinctCategories.length, 3);
    });

    test("filter categories (objects)", async () => {
        const pin = db.pinStore.addPin(testPin);
        //add duplicate categories
        for (let i = 0; i < testCategories.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            await db.categoryStore.addCategory(pin._id, testCategories[i]);
        } 
        const allCategories = await db.categoryStore.getAllCategories();
        //make first category the filter
        const categoryFilter = allCategories[0].category;
        //get all categories that match that filter (2)
        const filteredCategories = await db.categoryStore.filterCategoryObjs(allCategories[0].category);
        //make test array of expected category objects for assertion - allCategories[0] and allCategories[4]
        const assertCategories = allCategories.slice(0,1).concat(allCategories.slice(4,5));
        assertSubset(filteredCategories,assertCategories);
    });
});