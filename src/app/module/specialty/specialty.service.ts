import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (payload: Specialty): Promise<Specialty> => {

    const speciality = await prisma.specialty.create({
        data: payload
    })
    return speciality;
}

const getAllSpecialties = async (): Promise<Specialty[]> => {
    const specialties = await prisma.specialty.findMany();
    return specialties;
}


const deleteSpecialty = async (id: string): Promise<Specialty> => {
    const speciality = await prisma.specialty.delete({
        where: { id }
    })
    return speciality;
}


export const SpecialtyService = {
    createSpecialty,
    getAllSpecialties,
    deleteSpecialty
}
