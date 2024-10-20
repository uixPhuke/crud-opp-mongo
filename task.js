const { dbConnection } = require('./db')

async function main() {
    try {
        const db = await dbConnection()
        const collection = db.collection('users')
        
        const findResult = await collection.find().toArray()
        console.log(findResult)
    } catch (error) {
        console.log("Error performing task",error)
    }
    
}
main()