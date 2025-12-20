import { prisma } from "@/lib/prisma";

export const getBarbershops = async () => {
    const barbershops = await prisma.barbershop.findMany();
    return barbershops
};

export const getPopularBarbershops = async () => {
    const popularBarbershops = await prisma.barbershop.findMany({
        orderBy: {
            name:"desc"
        },
    })

  return popularBarbershops;
};
