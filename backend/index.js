import express from "express"
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"
import db from "./config/Database.js"

const app = express()
app.use(cors())
app.use(express.json())


db.sync()
    .then(() => {
        // seed.userSeed()
        // seed.categorySeed()
        console.log('database connected');
    })
    .catch((err) => {
        console.error('database connection failed', err);
    })


// (async() => {
//     await db.sync({force: true})
// })


// route user
app.use(UserRoute)

app.listen(4000, () => {
    console.log("Server is running");
})

