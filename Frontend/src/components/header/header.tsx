import SearchBox from "./SearchBox/index"
import { mapLocaleToMeaningfulFormat } from "../utils/i18n"

export const Header = () => {
    return (
        <section className="h-6 flex items-center mt-12 gap-x-40 mx-32">
            <section className="flex items-center justify-center gap-x-48">
                <section className=""><p className="text-2xl font-bold">Exclusive</p></section>
                <section className="flex space-x-4  h-6 ">
                    <p className="text-base  h-6">{mapLocaleToMeaningfulFormat().home}</p>
                    <p className="text-base  h-6">{mapLocaleToMeaningfulFormat().contact}</p>
                    <p className="text-base  h-6">{mapLocaleToMeaningfulFormat().about}</p>
                    <p className="text-base  h-6">{mapLocaleToMeaningfulFormat().signup}</p>
                </section>
            </section>
            <section className="w-full"><SearchBox /></section>
        </section>
    )
}