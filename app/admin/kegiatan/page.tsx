'use server';

import { getKegiatanAll } from "@/app/api/kegiatan";
import Ui from "./ui";

export default async function Page () {

    const data = await getKegiatanAll()

    return (
        <Ui kegiatanList={data}/>
    )
}