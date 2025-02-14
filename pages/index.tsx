"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [noCount, setNoCount] = useState(0)
  const router = useRouter()

  const handleYes = () => {
    router.push("/slideshow")
  }

  const handleNo = () => {
    if (noCount < 4) {
      setNoCount(noCount + 1)
    } else {
      router.refresh()
    }
  }

  const images = [
    "/images/love.gif",
    "/images/one.jpg",
    "/images/two.jpg",
    "/images/three.jpg",
    "/images/four.jpg",
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-white">Will you be my Valentine?</h1>
        <div className="mb-8">
          <Image
            src={images[noCount] || "/placeholder.svg"}
            alt="Valentine's Day GIF"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-x-4">
          <Button
            onClick={handleYes}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Yes
          </Button>
          <Button onClick={handleNo} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            No
          </Button>
        </div>
      </div>
    </main>
  )
}

