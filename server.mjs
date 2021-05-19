import express from 'express';
import cors from "cors"
const app = express();
const port = 3000;
import test from './router/test.mjs';
app.listen(port,()=>{
    console.log(`🏃‍♀️ Server is running at http://localhost:${port}`)
});


app.get("/", (req, res) => {
    res.send("hello");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(test)
