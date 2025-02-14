"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const ValentineNote = () => (
  <div className="relative w-[400px] h-[300px] bg-pink-100 rounded-lg shadow-lg p-6 text-center">
    <h2 className="text-2xl font-bold text-red-600 mb-4">My Dearest Valentine</h2>
    <p className="text-gray-800 mb-4">
      Sorry babe that I can't be there with you on valentines day. I hope you have a great day and know that I love you so much. I created this for you to give you some flowers.
    </p>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <Image
        src="/images/flowers.jpg"
        alt="Bouquet of flowers"
        width={100}
        height={100}
        className="rounded-full border-4 border-red-400"
      />
    </div>
  </div>
)

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    <Image
      key="slide1"
      src="/images/one.jpg"
      alt="Slide 1"
      width={400}
      height={300}
      className="rounded-lg shadow-lg"
    />,
    <Image
      key="slide2"
      src="/images/two.jpg"
      alt="Slide 2"
      width={400}
      height={300}
      className="rounded-lg shadow-lg"
    />,
    <Image
      key="slide3"
      src="/images/three.jpg"
      alt="Slide 3"
      width={400}
      height={300}
      className="rounded-lg shadow-lg"
    />,
    <Image
      key="slide4"
      src="/images/four.jpg"
      alt="Slide 4"
      width={400}
      height={300}
      className="rounded-lg shadow-lg"
    />,
    <Image
      key="slide5"
      src="/images/five.jpg"
      alt="Slide 5"
      width={400}
      height={300}
      className="rounded-lg shadow-lg"
    />,
    <ValentineNote key="valentine-note" />,
  ]

  useEffect(() => {
    const audio = new Audio("/song.mp3")
    audio.loop = true
    audio.play()

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide < slides.length - 1) {
          return prevSlide + 1
        }
        clearInterval(interval)
        return prevSlide
      })
    }, 3000)

    return () => {
      clearInterval(interval)
      audio.pause()
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-white">YESSSSSSSSS</h1>
        <div className="relative w-[400px] h-[300px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

