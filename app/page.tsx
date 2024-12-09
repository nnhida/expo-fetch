'use server';

import Image from "next/image";
import img from "../public/heroImg.png"
import { Benefit, Button, EventSchool } from "./component";

import { LuBook, LuClock2 } from "react-icons/lu";
import { FiPenTool } from "react-icons/fi";
import { beritaList, eventList, logo } from "./constant";
import Link from "next/link";
import Ui from "./ui";
import { getBeritaAll } from "./api/berita";
import { getKegiatanAll } from "./api/kegiatan";

export default async function Home() {

  const berita = await getBeritaAll()
  const kegiatan = await getKegiatanAll()
  return (
    <Ui beritaList={berita} kegiatanList={ kegiatan}/>
  );
}
