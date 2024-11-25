
import express , {Request, Response, NextFunction} from "express";

const app = express();

let requestCount = 0;

function middleware(req: Request, res: Response, next: NextFunction) {
    requestCount++;
    next()
  }

app.use(middleware);

app.get("/", (req, res) => {
  res.send("Hello world");
})

app.get("/requestCount", (req, res) => {
  res.json({
    requestCount
  })
})

app.listen(3000);