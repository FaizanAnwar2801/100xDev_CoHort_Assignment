// type-specification of data using zod.

const zod = require("zod")

const createObject = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateObject = zod.object({
    id: zod.string(),
})

module.exports = {
    createObject,
    updateObject
}