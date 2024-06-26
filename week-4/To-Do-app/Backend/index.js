const express = require("express")
const app = express();
const { createObject, updateObject } = require("./types");
const { todo } = require("./database");
const cors = require("cors")

app.use(express.json());
app.use(cors());

app.post("/home", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createObject.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs!"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "To-Do Created"
    })

})

app.get("/home", async function (req, res) {
    const todos = await todo.find({})
    res.json({
        todos
    })

})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateObject.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs!"
        })
        return;
    }

    await todo.updateOne({  // used todo.updateOne instead of todo.update
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "To-Do Marked as completed"
    })

})

app.listen(3000);