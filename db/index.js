const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    password: "postgres",
    database: "juicebox_dev",
});

client.connect((err) => {
    if (err) {
        console.error("connection error");
    } else {
        console.log("connected", client.database);
        client.end();
    }
});
