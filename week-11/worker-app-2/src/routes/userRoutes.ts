import { Hono } from "hono";
import {
    getAllUsers,
    userProfile,
    signup,
    signin
} from "../controllers/userController";
import { authmiddleware } from "../middlewares/user";

export const userRouter = new Hono();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);

userRouter.get('/user/:id', authmiddleware, userProfile);
userRouter.get('/users', authmiddleware, getAllUsers);
