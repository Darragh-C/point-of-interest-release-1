import { assert } from "chai";
import { db } from "../src/models/db.js";
import { testCategory, testCategories } from "./fixtures.js";

suite("Category API tests", () => {
    
   setup(async () => {
        db.init();
        await db.categoryStore.deleteAllCategories();
        for (let i = 0; i < testCategories.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            await db.categoryStore.addCategory(testCategories[i]);
        }
    });

    test("create a category", async () => {
        const newCategory = await db.categoryStore.addCategory(testCategory);
        assert.deepEqual(testCategory, newCategory);
    });

    
    test("delete all categories", async () => {
        let returnedCategories = await db.categoryStore.getAllCategories();
        assert.equal(returnedCategories.length, 3);
        await db.categoryStore.deleteAllCategories();
        returnedCategories = await db.categoryStore.getAllCategories();
        assert.equal(returnedCategories.length, 0);
    });

    test("get a category by id - success", async () => {
        const category = await db.categoryStore.addCategory(testCategory);
        const returnedCategory = await db.categoryStore.getCategoryById(category._id);
        assert.deepEqual(category, returnedCategory);
    });

    test("get a category by id - fail", async () => {
        const noCategoryWithId = await db.categoryStore.getCategoryById("123");
        assert.isNull(noCategoryWithId);
    });

    test("get a category by id - bad params", async () => {
        let nullCategory = await db.categoryStore.getCategoryById("");
        assert.isNull(nullCategory);
        nullCategory = await db.categoryStore.getCategoryById();
        assert.isNull(nullCategory);
    });

    test("get a pin's categories", async () => {
      const pinid = "123";
      const pinCategories = await db.categoryStore.getPinCategories(pinid);
      assert.equal(pinCategories.length, testCategories.length - 1);
  });

    test("delete single category - success", async () => {
        await db.categoryStore.deleteCategoryById(testCategories[0]._id);
        const returnedCategories = await db.categoryStore.getAllCategories();
        assert.equal(returnedCategories.length, testCategories.length - 1);
        const deletedCategory = await db.categoryStore.getCategoryById(testCategories[0]._id);
        assert.isNull(deletedCategory);
    });

    test("delete single category - fail", async () => {
        await db.categoryStore.deleteCategoryById("bad-id");
        const allCategories = await db.categoryStore.getAllCategories();
        assert.equal(testCategories.length, allCategories.length);
      });
});