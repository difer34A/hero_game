import Link from "next/link";
import { useState, useEffect } from "react";
export default function SelectHero() {
    
    const [data, setData] = useState([]);
    const url = `/api/heroes`;

    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((r) => {
                setData(r);
            });
    }, [url]);

    return (
        <>
            <div className="text-2xl text-white col-span-4 text-center">
                Select your hero!
            </div>

            {data.map((d) => (
                <>
                    <Link href={`/${d.id}`} className="relative flex flex-col group place-items-center aspect-square overflow-clip rounded border border-white p-2 mix-blend-luminosity hover:mix-blend-normal transition-all ease-in-out duration-500">
                        <img src={d.img} alt={d.img} className="object-fit" />
                        <h1 className="text-3xl font-extrabold text-white absolute bottom-1/4 translate-y-40 group-hover:translate-y-16 duration-200">{d.name}</h1>
                    </Link>
                </>
            ))}

        </>
    );
}
