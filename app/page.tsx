import Image from "next/image";
import img from "../public/heroImg.png"
import { Benefit, Button, EventSchool } from "./component";

import { LuBook, LuClock2 } from "react-icons/lu";
import { FiPenTool } from "react-icons/fi";
import { beritaList, eventList, logo } from "./constant";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="h-screen flex">
        <div className="flex flex-col space-y-5  justify-center lg:w-1/2 p-10 lg:pl-32">
          <p className="text-3xl lg:text-6xl font-semibold">Tuntut Ilmu Untuk Masa depan Yang Cerah</p>
          <p className=" text-lg  lg:text-xl text-gray-500">jelajahi semua pengetahuan dan ilmu bermanfaat yang berguna untuk kehidupan anda kedepannya agar lebih bermanfaat dalam hidup anda dan orang lain</p>
          <Button bgColor="bg-emerald-500 hover:bg-emerald-600" round="rounded-md" txColor="text-white" text="Mulai Belajar"/>
        </div>

        <div className="hidden bg-emerald-500 w-[800px] relative lg:flex items-end">
          <img src="/heroImg2.png" alt="hero image" className= "w-[450px] mx-auto"/>
        </div>
      </section>

      <div className=" h-max lg:h-[20vh] bg-emerald-800 flex flex-col lg:flex-row justify-evenly items-center p-10 lg:px-32 space-y-10 lg:space-y-0">
        <Benefit bgColor="bg-yellow-300" logo= {<LuBook className="stroke-white"/>} text="Menggunakan Kurikulum Merdeka" />
        <Benefit bgColor="bg-red-500" logo= {<LuClock2 className="stroke-white"/>} text="Efektiviats Waktu Saat Belajar Disekolah" />
        <Benefit bgColor="bg-blue-500" logo= {<FiPenTool className="stroke-white"/>} text="Penyaluran Bakat Dan Minat Siswa" />
      </div>

      <section className=" p-10 lg:p-24 flex items-center">
        <div className="flex flex-col lg:flex-row lg:items-end space-y-10 lg:space-y-0 justify-evenly">
          <div className=" bg-emerald-600 lg:pt-10">
            <img src="/aboutImg.png" alt="about image" className= "w-full lg:w-[450px]"/>
          </div>
          
          <div className="flex flex-col space-y-5 lg:w-1/2">
            <p className="font-bold text-3xl lg:text-6xl">Sekolah Alam Insan Mulia Berkarya</p>
            <p className="lg:text-xl text-gray-500">Sekolah kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikankurikulum terbaik agar anak bisa memilih minatnya dan fokusmengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1998 dan terus berkembang.</p>
            <Button bgColor="bg-emerald-500 hover:bg-emerald-600" round="rounded-md" txColor="text-white" text="Mulai Belajar"/>
          </div>
        </div>
      </section>

      <section className="p-10 lg:p-24 flex flex-col space-y-5">
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="font-bold text-3xl lg:text-5xl lg:w-72"> Partner Kerja Sama</p>
          <p className="lg:text-xl text-gray-500 lg:w-[70%]">kami bekerja sama dengan berbagai lembaga dan perusahaan besar di seluruh Indonesia untuk menyalurkan bakat siswa kami. diharapkan dengan adanya kerja sama ini siswa dapat meraih prestasi</p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-between">
          {logo.map((item) => (
            <img src={item.url} alt={item.url} className="size-20 lg:size-32 grayscale"/>
          ))}
        </div>

      </section>

      <section className="p-10 lg:p-24 flex flex-col space-y-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="font-bold text-3xl text-center lg:text-left lg:text-5xl">Kumpulan kegiatan Sekolah</p>
          <Link href={''} className="hidden lg:block text-emerald-400 hover:text-emerald-600 text-xl font-semibold transition-all">Lihat Semua</Link>
        </div>

        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 items-center justify-between">
          {eventList.map((item) =>(
            <EventSchool url={item.url} title={item.title} desc={item.desc}/>
          ))}
          <Link href={''} className="lg:hidden block text-emerald-400 hover:text-emerald-600 text-xl font-semibold transition-all">Lihat Semua</Link>
        </div>
      </section>

      <section className="p-10 lg:p-24">
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between items-center overflow-hidden bg-emerald-600 p-5 lg:pl-16 lg:py-16 rounded-xl">
          <div className="flex flex-col space-y-3 lg:space-y-5 text-white lg:w-3/5">
            <p className="text-3xl lg:text-5xl font-bold ">Siap untuk bergabung?</p>
            <p className="text-lg lg:text-2xl ">Kami akan senantiasa menunggu keikut sertaan anak-anak untuk belajar bersama kami</p>
          </div>

          <div className=" lg:scale-110 shadow-xl">
            <Button bgColor="bg-emerald-400 hover:bg-emerald-500"  round="rounded-lg" txColor="text-white" text="Kontak Kami"/>
          </div>
        </div>
      </section>
      
      <section className="p-10 lg:p-24 flex flex-col space-y-10">
        <div className="flex justify-between items-center text-xl font-semibold">
          <div className="flex text-base lg:text-xl space-x-5">
            <Link href={''} className=" underline underline-offset-8">Semua</Link>
            <Link href={''} className=" text-gray-500 hover:text-black hover:text-lg lg:hover:text-2xl transition-all">Berita</Link>
            <Link href={''} className=" text-gray-500 hover:text-black hover:text-lg lg:hover:text-2xl transition-all">Pengumuman</Link>
          </div>
          <Link href={''} className="hidden lg:block text-emerald-400 hover:text-emerald-600 text-xl font-semibold transition-all">Lihat Semua</Link>
        </div>

        <div className="overflow-x-auto">
          <div className="flex lg:w-full w-max space-x-5 lg:space-x-0 justify-between">
            {beritaList.map((item) =>(
              <EventSchool url={item.url} title={item.title} desc={item.desc}/>
            ))}
          </div>
        </div>

        <Link href={''} className="lg:hidden text-center font-bold text-emerald-400 hover:text-emerald-600 transition-all">Lihat Semua</Link>
      </section>

    </main>
  );
}
