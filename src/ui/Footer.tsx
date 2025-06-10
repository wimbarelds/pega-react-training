import { useMemo } from "react";
import { useSlide, useSlides } from "../slideStore";


export default function Footer() {

    
    const slides = useSlides()
    const currentSlide = useSlide()
    const totalSlides = useMemo(() =>  slides.flat().length, [slides]);
    const currentSlideNumber = slides.flat().findIndex(slide => slide === currentSlide) + 1;

    return <div>{currentSlideNumber}/{totalSlides}</div>
}        