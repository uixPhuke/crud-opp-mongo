const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
const dbName = "crudDB";

const dbConnection = async () => {
    try {
        await client.connect()
        console.log('connected to server successfully')
        const db = client.db(dbName)
        return db;
    } catch (error) {
        console.log('Failed to connect to db', error)
        throw error
    }

}

module.exports={dbConnection}
