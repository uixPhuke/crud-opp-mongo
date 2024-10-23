const { dbConnection } = require("./db");

async function hero() {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");

    const updateResult = await collection.updateMany({name:"Jhon"},{$set:{age:25}});
    console.log(updateResult.modifiedCount);
  } catch (error) {
    console.log("Error performing task", error);
  }
}
hero();

console.log(hero)
