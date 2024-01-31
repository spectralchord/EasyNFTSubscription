import Header from './Header';
import HeroHome from './HeroHome';
import FeaturesHome from './Features';
import FeaturesBlocks from './FeaturesBlocks';
import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import AOS from 'aos';
import {useTheme} from "@/providers/ThemeProvider";
import 'aos/dist/aos.css';
import '@/pages/Landing/css/style.css';

const Landing = () => {
    const {setTheme} = useTheme()
    const {pathname} = useLocation()

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
    });

    useEffect(() => {
        setTheme('light')
        if (document?.querySelector('html')?.style !== null) {
            document!.querySelector('html')!.classList.remove('dark')
            document!.querySelector('html')!.classList.add('light')
            document!.querySelector('html')!.style.scrollBehavior = 'auto'
            window.scroll({top: 0})
            document!.querySelector('html')!.style.scrollBehavior = ''
        }
    }, [pathname]);

    return <div className="flex flex-col min-h-screen overflow-hidden">
        <Header/>
        <main className="flex-grow">
            <HeroHome/>
            <FeaturesBlocks/>
            <FeaturesHome/>
        </main>
        <footer>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
                </div>
            </div>
        </footer>
    </div>
}

export default Landing