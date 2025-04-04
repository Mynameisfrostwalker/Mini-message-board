const { Client } = require("pg");
const dotenv =  require("dotenv");
dotenv.config();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR (255),
        text VARCHAR (255),
        added TIMESTAMP
    );
`

const main = async () => {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    })
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done");
}

main();
