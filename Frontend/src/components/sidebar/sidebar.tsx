import Link from 'next/link';
import ArrowIcon from '../../../public/assets/arrow'
import { mapLocaleToMeaningfulFormat } from '../utils/i18n';

export const SideBar = ()=>{
    return (
        <section className='flex flex-col'>
            <Link href="/WomenFashion" className='text-base pb-4 flex gap-x-11'>{mapLocaleToMeaningfulFormat().womanFashion}<ArrowIcon className='mt-1'></ArrowIcon> </Link>
            <Link href="/MenFashion" className='text-base pb-4 flex gap-x-16'>{mapLocaleToMeaningfulFormat().menFashion}<ArrowIcon className='mt-1'></ArrowIcon></Link>
            <Link href="/Electronics" className='text-base pb-4'>{mapLocaleToMeaningfulFormat().electronics}</Link>
            <Link href="/Home&Lifestyle" className='text-base pb-4'>{mapLocaleToMeaningfulFormat().homeLifestyle}</Link>
            <Link href="/Medicine" className='text-base pb-4'>{mapLocaleToMeaningfulFormat().medicine}</Link>
            <Link href="/Groceries" className='text-base pb-4'>{mapLocaleToMeaningfulFormat().groceries}</Link>
        </section>
    )
} 