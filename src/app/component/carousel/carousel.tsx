'use client';

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import "./carousel.css";
import Link from 'next/link';
import { sanitize } from '@/app/component/util/sanitize';

type PropType = {
    slides: string[]
    options?: EmblaOptionsType
}

export const Carousel: React.FunctionComponent<PropType> = (props: PropType) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    return (
        <section className="carousel">
            <h1 className='title text-white bg-transparent capitalize text-center'>Cervejarias parceiras</h1>
            <div className="carousel-viewport" ref={emblaRef}>
                <div className="carousel-container">
                    {slides.map(sanitize).map((src, index) => (
                        <div className="carousel-slide" key={index}>
                            <Link href={`/breweries/${src}`}>
                                <div className="carousel-slide-picture">
                                    <img src={`/api/image?name=${src}&type=breweries&color=monochrome`} />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
