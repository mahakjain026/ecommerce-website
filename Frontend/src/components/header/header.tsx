import SearchBox from "./SearchBox/index"
import { mapLocaleToMeaningfulFormat } from "../utils/i18n"
import Link from "next/link"
import LikeIcon from "../../../public/assets/like";
import CartIcon from "../../../public/assets/cart";
import UserIcon from "../../../public/assets/user";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export const Header = () => {
    const pathname = usePathname()
    const [SignUp, SetSignUp] = useState(true);
    return (
        <section className="h-6 flex items-center mt-12 gap-x-40">
            <section className="flex items-center justify-center gap-x-48">
                <section className=""><p className="text-2xl font-bold">Exclusive</p></section>
                <section className="flex space-x-4  h-6 ">
                    <Link href="/Home" className="text-base  h-6">{mapLocaleToMeaningfulFormat().home}</Link>
                    <Link href='' className="text-base  h-6">{mapLocaleToMeaningfulFormat().contact}</Link>
                    <Link href='' className="text-base  h-6">{mapLocaleToMeaningfulFormat().about}</Link>
                    <Link href="/SignUp" className="text-base  h-6">{mapLocaleToMeaningfulFormat().signup}</Link>
                </section>
            </section>
            <section className="flex gap-x-6 ">
                <section className=""><SearchBox /></section>
                <section className="flex gap-x-6 mt-2">
                    <section>
                        <LikeIcon width="20" height="20" />
                    </section>
                    <section>
                        <CartIcon width="20" height="22" />
                    </section>
                    <section >
                        {SignUp === false ? <UserIcon width="20" height="20"></UserIcon> : <></>}
                    </section>
                </section>
            </section>
        </section>
    )
}