import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import genresRouter from './api/v1/genresRouter.js'
import boardgamesRouter from './api/v1/boardgamesRouter.js'
import reviewsRouter from './api/v1/reviewsRouter.js'

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use('/api/v1/genres', genresRouter)
rootRouter.use('/api/v1/boardgames', boardgamesRouter)
rootRouter.use('/api/v1/reviews', reviewsRouter)

export default rootRouter;
