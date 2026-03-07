/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/CatchAsync";

const createSpecialty = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;
        const result = await SpecialtyService.createSpecialty(payload);
        res.status(201).json({
            success: true,
            message: ' specialties fetch successfully',
            data: result
        });

    }
)

const getAllSpecialties = catchAsync(
    async (req: Request, res: Response) => {
        const result = await SpecialtyService.getAllSpecialties();
        res.status(200).json({
            success: true,
            message: ' specialties fetch successfully',
            data: result
        });
    }
)

const deleteSpecialty = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await SpecialtyService.deleteSpecialty(id as string);
        res.status(200).json({
            success: true,
            message: ' specialties fetch successfully',
            data: result
        });
    }
)

export const SpecialtyController = {
    createSpecialty,
    getAllSpecialties,
    deleteSpecialty
}