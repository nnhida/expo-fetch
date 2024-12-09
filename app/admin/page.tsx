'use server';

import { getBeritaCount } from "../api/berita";
import { getKegiatanCount } from "../api/kegiatan";
import Ui from "./ui";

export default async function Page () {

    const kegiatan = await getKegiatanCount()
    const berita = await getBeritaCount()

    return (
        <Ui kegiatanCount={kegiatan} berita={berita}/>
    )
}