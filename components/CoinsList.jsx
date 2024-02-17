"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Spinner from "./Spinner";
import useFetchCoins from "@/hooks/useFetchCoins";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const CoinsList = () => {
    const { coins, fetchCoins } = useFetchCoins();
    
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            fetchCoins();
        }
    }, [inView]);

    return (
        <div className="w-full overflow-x-auto">
            <div className="rounded-md border">
                <Table className="text-left text-sm font-light">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="px-6 py-4">#</TableHead>
                            <TableHead className="px-6 py-4"></TableHead>
                            <TableHead className="px-6 py-4">Name</TableHead>
                            <TableHead className="px-10 py-4">Price</TableHead>
                            <TableHead className="px-10 py-4">
                                24h High
                            </TableHead>
                            <TableHead className="px-10 py-4">
                                24h Low
                            </TableHead>
                            <TableHead className="px-6 py-4">
                                Price Change (24h)
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {coins?.map((coin, index) => (
                            <TableRow key={index}>
                                <TableCell className="px-6 py-4">
                                    {index + 1}
                                </TableCell>
                                <TableCell className="px-6 py-4">
                                    <Image
                                        src={coin.image || alt}
                                        alt={coin.name}
                                        className="w-auto h-auto"
                                        width={30}
                                        height={30}
                                    />
                                </TableCell>
                                <TableCell className="px-6 py-4 font-normal">
                                    <Link href={`${coin.id}`}>
                                        {coin.name}{" "}
                                        <span className="text-neutral-500">
                                            {coin.symbol.toUpperCase()}
                                        </span>
                                    </Link>
                                </TableCell>
                                <TableCell className="px-10 py-4">
                                    ${coin.current_price}
                                </TableCell>
                                <TableCell className="px-10 py-4">
                                    ${coin.high_24h}
                                </TableCell>
                                <TableCell className="px-10 py-4">
                                    ${coin.low_24h}
                                </TableCell>
                                <TableCell className="px-6 py-4">
                                    {coin.price_change_percentage_24h.toFixed(
                                        2
                                    )}
                                    %
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div
                className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
                ref={ref}
            >
                <Spinner />
            </div>
        </div>
    );
};

export default CoinsList;
