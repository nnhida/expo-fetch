'use server';

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getKegiatanAll() {
    try {
        const data = prisma.kegiatan.findMany()
        await prisma.$disconnect()
        return data
    } catch (err) {
        console.log('error in: ' + err)
        await prisma.$disconnect()
    }
}

export async function getKegiatanCount() {
    try {
        const data = prisma.kegiatan.count()
        await prisma.$disconnect()
        return data
    } catch (err) {
        console.log('error in: ' + err)
        await prisma.$disconnect()
    }

}
export async function addKegiatan(formData: FormData) {
    try {
        const title = String(formData.get('title'))
        const desc = String(formData.get('desc'))
        const image = String(formData.get('image'))
        
        await prisma.kegiatan.create({
            data: {
                title: title,
                desc: desc,
                image: image,

            }
        })
        await prisma.$disconnect()
        revalidatePath('/')
        return {
            success: 'success add Kegiatan'
        }
    } catch (err) {
        console.log('error is: ' + err)
        await prisma.$disconnect()
        return {
            error: 'something wrong'
        }
    }
}
export async function editKegiatan(formData: FormData) {
    try {

        const kegiatanID = String(formData.get('kegiatanID'))
        const title = String(formData.get('title'))
        const desc = String(formData.get('desc'))
        const image = String(formData.get('image'))


        await prisma.kegiatan.update({
            where:{
                kegiatanID: kegiatanID
            },
            data: {
                title: title,
                desc: desc,
                image: image,

            }
        })
        await prisma.$disconnect()
        revalidatePath('/')
        return {
            success: 'success edit Kegiatan'
        }
    } catch (err) {
        console.log('error is: ' + err)
        await prisma.$disconnect()
        return {
            error: 'something wrong'
        }
    }
}

export async function deleteKegiatan(kegiatanID: string) {
    try {
       await prisma.kegiatan.delete({
            where: {
                kegiatanID: kegiatanID
            }
        })

        await prisma.$disconnect()
        revalidatePath('/')
        return {
            success: 'success delete Kegiatan'
        }
    } catch (err) {
        console.log('error in: ' +err)
        return{
            error: 'something wrong'
        }
    }
}