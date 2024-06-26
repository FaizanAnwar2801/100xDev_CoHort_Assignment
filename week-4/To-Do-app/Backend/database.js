const mongoose = require("mongoose")
mongoose.connect("Your-MongoDB-URL")

const todoSchema = mongoose.Schema({            // Schema for database.
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo,
}