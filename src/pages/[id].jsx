import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {coin} from './data';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'

export default function Id() {

    const [bal, setBal] = useState(coin);

    const router = useRouter();
    const { id } = router.query;

    const [data, setData] = useState({});
    const url = `/api/hero/${id}`;

    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((r) => {
                setData(r);
            });
    }, [url]);


    const [hero, setHero] = useState(data);

    const update = () => {
        if (bal > 0) {
            setBal(bal - 100);
            data.health += 100;
            data.power += 100;
            data.speed += 100;
        }
        fetch(`/api/heroes/${id}`, {method: "POST", body: JSON.stringify(id)})
    }

    return (<>
        <Head>
            <title>{data?.name}</title>
        </Head>
        <Link href={"/"} className='absolute h-10 aspect-square bg-white top-4 left-4 flex place-items-center justify-center rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>

        </Link>
        <div className='w-screen h-screen flex place-items-center justify-center px-[200px] bg-slate-900'>

            <div className='w-1/2 h-screen flex flex-col place-items-center gap-8 py-10'>
                <Image src={data?.img} width={500} height={1000} alt={data?.name} className='border border-white border-1 rounded-lg'></Image>
                <h1 className='text-white text-3xl font-extrabold'>{data?.name}</h1>
            </div>
            <div className='w-1/2 h-screen flex flex-col gap-4 py-10 px-10'>

                <div className='flex gap-4 place-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <h1 className='font-extrabold text-3xl text-red-500'>{`Health : ${data?.health}`}</h1>
                </div>
                <div className='flex gap-4 place-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>


                    <h1 className='font-extrabold text-3xl text-white'>{`Power : ${data?.power}`}</h1>
                </div>
                <div className='flex gap-4 place-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>

                    <h1 className='font-extrabold text-3xl text-white'>{`Speed : ${data?.speed}`}</h1>
                </div>
                <div className='mt-10 flex gap-4 place-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>

                    <h1 className='text-yellow-500 font-black text-3xl'>{bal}</h1>
                </div>
                <div className='mt-4'>
                    <button className='bg-pink-600 px-6 py-4 rounded-xl text-white font-bold' onClick={update}>Upgrade</button>
                </div>

            </div>


        </div>
    </>
    )
}
