"use client"
import { Input } from "@/components/ui/input";
import SearchIcon from '../../../public/assets/search';
import LikeIcon from "../../../public/assets/like";
import CartIcon from "../../../public/assets/cart";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import UserIcon from "../../../public/assets/user";

export const SearchBar = () => {
    const pathname = usePathname()
    const [ SignUp, SetSignUp ] = useState(true);

    useEffect(() => {
        if (pathname === "/SignUp") {
            SetSignUp(true);
        } else {
            SetSignUp(false);
        }
    }, [pathname]);
console.log("SignUp",SignUp)
return (
    <>
        <section className="flex justify-center gap-x-6">
            <section className="flex justify-center gap-x-4 px-3 py-1 bg-[#F5F5F5] rounded">
                <Input className="py-1 border-none bg-[#F5F5F5]" type="text" placeholder="What are you looking for?" />
                <SearchIcon className="mt-2" />
            </section>
            <section className="flex gap-x-6 mt-4">
                <section>
                    <LikeIcon width="20" height="20" />
                </section>
                <section>
                    <CartIcon width="20" height="20" />
                </section>
                <section >
                    { SignUp === false ? <UserIcon width="20" height="20"></UserIcon> : <></>}
                </section>
            </section>
        </section>
    </>
);
};
