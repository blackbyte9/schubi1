"use server";

import { prisma } from "@/prisma";
import { getLeasesByItem } from "./data";

export async function returnItem(input: string): Promise<{ ok: boolean; message: string; student: string }> {
    'use server';
    const item = await getLeasesByItem(input);
    if (item.length === 0 || item[0].active === false) {
        return {
            ok: false,
            message: `Item with code ${input} is not leased.`,
            student: "",
        };
    } else {
        // Update the lease to mark it as returned
        const updatedLease = await prisma.borrow.update({
            where: { id: item[0].id },
            data: { active: false, returned: new Date() },
        });

        return {
            ok: true,
            message: `Item with code ${input} has been returned.`,
            student: updatedLease.studentId.toString(),
        };
    }
}
