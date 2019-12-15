const express = require("express");
const fs = require("fs");
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)

    }); 