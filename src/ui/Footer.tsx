import { useMemo } from "react";
import { useSlide, useSlides } from "../slideStore";
import { cn } from "../shared/cn";


export default function Footer() {

    
    const slides = useSlides()
    const currentSlide = useSlide()
    const totalSlides = useMemo(() =>  slides.flat().length, [slides]);
    const currentSlideNumber = slides.flat().findIndex(slide => slide === currentSlide) + 1;

    return <footer className={cn('flex justify-between')}>{currentSlideNumber}/{totalSlides}
        <img src="logo-soprasteria.svg" alt="Sopra Steria" className="h-auto w-32" /></footer>
}        