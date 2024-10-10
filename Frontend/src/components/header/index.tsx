'use client';
import React from 'react';
import { DesktopHeader } from './desktopHeader';
import { MobileHeader } from './mobileHeader';
import useMediaQuery from '@/hooks/useMediaQuery';
import { desktop } from '../utils/screenSize';

export const Header = () => {
    const [isDesktopSize] = useMediaQuery(desktop);
    return (
        <>
            {isDesktopSize ? (
                <DesktopHeader />
            ) : (
                <section className='md:mx-32 mx-0'>
                    <MobileHeader />
                </section>
            )

            }
        </>
    )
}
