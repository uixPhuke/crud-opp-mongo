const { dbConnection } = require("./db");

async function main() {
  try {
    const db = await dbConnection();
      const collection = db.collection("users");
      const data = [{
          name: "Harry",
          age:20
      }, {
          name: "Jack",
          age:18
      }]

    const InsertResult = await collection.insertMany(data)
    console.log(InsertResult);
  } catch (error) {
    console.log("Error performing task", error);
  }
}
main();
