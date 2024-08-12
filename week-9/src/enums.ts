// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.

enum Direction {
    Up,    //0 {by default}
    Down,  //1 {can be explicitly given a value(str/num)}
    Left,  //2
    Right  //3
}

function doSomething(keyPressed: Direction) {
	if(keyPressed == Direction.Up){
        console.log("UP")
    }
}

doSomething(Direction.Up)
console.log(Direction.Up)
console.log(Direction.Down)
console.log(Direction.Left)
console.log(Direction.Right)

// Common use-case in express

// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500,
//     UndefinedRequest = 411
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })