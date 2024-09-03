import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
export const Banner = () => {
    return (
        <section className="flex h-12 justify-center flex-wrap content-center bg-black">
            <section className="flex h-6 text-white ">
                <p className="text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a href="#" className="pl-2 text-sm font-semibold underline">ShopNow</a>
            </section>
            <section className="ml-52">
                <Accordion type="single" collapsible className="w-[78px] h-6 p-0">
                    <AccordionItem value="item-1" className="p-0">
                        <AccordionTrigger className="p-0 text-white text-sm ">English</AccordionTrigger>
                        <AccordionContent className="pt-1 text-white text-sm">
                            Hindi
                        </AccordionContent>
                        <AccordionContent className="text-white text-sm" >
                            Spanish
                        </AccordionContent>
                        <AccordionContent className="pt-1 text-white text-sm">
                            Chinese
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

        </section>
    );
}