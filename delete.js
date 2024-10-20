const { dbConnection } = require("./db");

async function main() {
  try {
    const db = await dbConnection();
      const collection = db.collection("users");
      const filter={name:"Jack"}

    const deleteResult = await collection.deleteMany(filter);
    console.log(deleteResult.deletedCount);
  } catch (error) {
    console.log("Error performing task", error);
  }
}
main();
