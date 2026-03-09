/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";

import { Indexroutes } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";



const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", Indexroutes);

app.get("/", async (req: Request, res: Response) => {
    const speciality = await prisma.specialty.create({
        data: {
            title: 'Cardiology'
        }
    })
    res.status(201).json({
        success: true,
        message: "API is workking",
        data: speciality
    })
});

app.use(globalErrorHandler)
app.use(notFound)
export default app;