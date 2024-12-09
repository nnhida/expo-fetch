'use client'

import { useState } from "react"
import { toast } from "sonner"
import { PiPlus } from "react-icons/pi"
import { CgClose } from "react-icons/cg"
import Image from "next/image"
import { beritaProps, kegiatanProps } from "@/lib/type"
import { addKegiatan, deleteKegiatan, editKegiatan } from "@/app/api/kegiatan"

interface uiProps {
    kegiatanList: kegiatanProps[] | undefined
}

export default function Ui({ kegiatanList}: uiProps) {

    const [open, setOpen] = useState<boolean>(false)
    const [typeForm, setTypeForm] = useState<string>('')

    const [kegiatanID, setkegiatanID] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [image, setImage] = useState<string>('')


    function openForm(e: React.MouseEvent<HTMLButtonElement>, typeForm: string, data: kegiatanProps | null) {
        e.preventDefault()
        setTypeForm(typeForm)
        if (typeForm === 'edit') {
            setkegiatanID(data?.kegiatanID || '')
            setTitle(data?.title || '')
            setDesc(data?.desc || '')
            setImage(data?.image || '')
        } else {
            setkegiatanID('')
            setTitle('')
            setDesc('')
            setImage('')
        }

        setOpen((prevstate) => !prevstate)

    }


    async function Submit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const formData = new FormData()

        if (kegiatanID) formData.append('kegiatanID', kegiatanID)
        if (title) formData.append('title', title)
        if (desc) formData.append('desc', desc)
        if (image) formData.append('image', image)

        if (typeForm === 'edit') {
            const result = await editKegiatan(formData)
            if (result.error) {
                toast.error(result.error)
            } else {
                toast.success(result.success)
            }
        } else if (typeForm == 'add') {
            const result = await addKegiatan(formData)
            if (result.error) {
                toast.error(result.error)
            } else {
                toast.success(result.success)
            }
        }
        setOpen((prevstate) => !prevstate)
    }

    async function delPost(e: React.MouseEvent<HTMLButtonElement>, postID: string) {

        e.preventDefault()
        confirm('yakin ingin menghapus data ini?')
        const result = await deleteKegiatan(postID)
        if (result.error) {
            toast.error(result.error)
        } else {
            toast.success(result.success)
        }

    }




    return (
        <div>
            <section className='flex-col space-y-5 p-10 pt-40 min-h-screen'>
                <div className=' flex justify-between'>
                    <p className='text-4xl font-bold'>Daftar Kegiatan</p>
                    <button onClick={(e) => openForm(e, 'add', null)} className='flex items-center space-x-2 bg-green-400 p-3 rounded-md active:scale-90 transition-all'>
                        <PiPlus className='fill-white size-5' />
                        <p className='font-semibold text-white'>Add Post</p>
                    </button>
                </div>


                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-emerald-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Deskripsi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {kegiatanList !== undefined && kegiatanList.map((item, index) => (
                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.title || 'not available'}
                                </th>
                                <td className="px-6 py-4">{item.desc}</td>
                                <td className="px-6 py-4">
                                    <img src={item.image} alt="image user" width={400} height={400}/>
                                </td>
                                <td className="px-6 py-4 flex space-x-5">
                                    <button onClick={(e) => delPost(e, item.kegiatanID)} className="font-medium py-1 px-3 bg-red-500 text-white rounded-md">
                                        Delete
                                    </button>
                                    <button onClick={(e) => openForm(e, 'edit', item)} className="font-medium py-1 px-3 bg-blue-500 text-white rounded-md">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>




            </section>
            <div className={`${open ? '' : 'hidden'} flex top-0 justify-center items-center bg-gray-800 bg-opacity-50 h-screen w-full z-50 fixed`}>
                <div className='flex-col space-y-5 bg-white p-5 rounded-lg'>
                    <button onClick={() => setOpen((prevstate) => !prevstate)} className='p-2 rounded-full bg-red-500'><CgClose className=' stroke-white' /></button>
                    <form className=''>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title*</label>
                                <input
                                    type="text"
                                    id="title"
                                    title="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""

                                />
                            </div>
                            <div>
                                <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description*</label>
                                <input
                                    type="text"
                                    id="desc"
                                    name="desc"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image*</label>
                                <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required
                                />
                            </div>

                        </div>
                        <button
                        onClick={Submit}
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}
