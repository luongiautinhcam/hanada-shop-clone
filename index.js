const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');

app.use(express.json());
app.use(cors());
require('dotenv').config();
const port = process.env.PORT || 3000


//Routers

const productRouter = require('./routers/Products');
app.use("/products",productRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log(`listening on http://localhost:${port}`);
    });
})