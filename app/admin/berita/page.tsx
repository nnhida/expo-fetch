'use server';

import { getKegiatanAll } from "@/app/api/kegiatan";
import Ui from "./ui";
import { getBeritaAll } from "@/app/api/berita";

export default async function Page () {

    const data = await getBeritaAll()

    return (
        <Ui beritaList={data}/>
    )
}