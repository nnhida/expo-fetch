'use server';

import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getBeritaAll() {
    try {
        const data = prisma.berita.findMany()
        await prisma.$disconnect()
        return data
    } catch (err) {
        console.log('error in: ' + err)
        await prisma.$disconnect()
    }
}

export async function getBeritaCount() {
    try {
        const data = prisma.berita.count()
        await prisma.$disconnect()
        return data
    } catch (err) {
        console.log('error in: ' + err)
        await prisma.$disconnect()
    }

}
export async function addBerita(formData: FormData) {
    try {
        const title = String(formData.get('title'))
        const desc = String(formData.get('desc'))
        const image = String(formData.get('image'))
        
        await prisma.berita.create({
            data: {
                title: title,
                desc: desc,
                image: image,

            }
        })
        await prisma.$disconnect()
        revalidatePath('/','layout')
        return {
            success: 'success add Berita'
        }
    } catch (err) {
        console.log('error is: ' + err)
        await prisma.$disconnect()
        return {
            error: 'something wrong'
        }
    }
}
export async function editBerita(formData: FormData) {
    try {

        const beritaID = String(formData.get('beritaID'))
        const title = String(formData.get('title'))
        const desc = String(formData.get('desc'))
        const image = String(formData.get('image'))


        await prisma.berita.update({
            where:{
                beritaID: beritaID
            },
            data: {
                title: title,
                desc: desc,
                image: image,

            }
        })
        await prisma.$disconnect()
        revalidatePath('/','layout')
        return {
            success: 'success edit Berita'
        }
    } catch (err) {
        console.log('error is: ' + err)
        await prisma.$disconnect()
        return {
            error: 'something wrong'
        }
    }
}

export async function deleteBerita(beritaID: string) {
    try {
       await prisma.berita.delete({
            where: {
                beritaID: beritaID
            }
        })

        await prisma.$disconnect()
        revalidatePath('/','layout')
        return {
            success: 'success delete Berita'
        }
    } catch (err) {
        console.log('error in: ' +err)
        return{
            error: 'something wrong'
        }
    }
}