"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Countdown from "./countdown"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation parameters
    const lines: Line[] = []
    const lineCount = 100

    // Create lines
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 1 + 3,
        width: Math.random() * 1 + 2,
        speed: Math.random() * 0.2 + 0.1,
        angle: Math.random() * Math.PI * 2,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw lines
      for (const line of lines) {
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        const endX = line.x + Math.cos(line.angle) * line.length
        const endY = line.y + Math.sin(line.angle) * line.length
        ctx.lineTo(endX, endY)

        ctx.strokeStyle = `rgba(255, 0, 0, ${Math.random() * 0.3 + 0.2})`
        ctx.lineWidth = line.width
        ctx.stroke()

        // Move line
        line.x += Math.cos(line.angle) * line.speed
        line.y += Math.sin(line.angle) * line.speed

        // Bounce off edges
        if (line.x < 0 || line.x > canvas.width) {
          line.angle = Math.PI - line.angle
        }
        if (line.y < 0 || line.y > canvas.height) {
          line.angle = -line.angle
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background canvas for animations */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24">
        <header className="mb-16 "><h1 className="text-2xl md:text-6xl font-bold mb-6 text-red-500 ">
        The Clock is Loud Today
        </h1>
          <div className="w-full h-0.5 bg-red-500 mx-auto mb-auto"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <article className="prose prose-invert prose-red max-w-none">
              {/* <p className="text-xl font-semibold mb-6">I wasn't supposed to build this.</p> */}

              <p className="mb-4 leading-relaxed">
              The clock is loud today,
                <br />
                Each second — a scream I can't quiet.
                <br />
                I blink,
                <br/>
                And another day slips through fingers I never closed.
                </p>

              <p className="mb-4 leading-relaxed">
              I thought I had time.
                <br />I thought tomorrow would wait.
                <br /> But tomorrow sprinted past me
                <br />While I stood, still learning how to walk.
              </p>
              <p className="mb-4 leading-relaxed">
              My hands are bare.
                <br />My mind, a silent fog.
                <br /> My heart ?
                <br />It's crying louder than my eyes
              </p>

              {/*

*/}
             
             <p className="mb-4 leading-relaxed">
             I keep saying "I’ll start" —
                <br />Like a mirage
                <br />On a road I’m scared to walk alone. 
              </p>

              <p className="mb-4 leading-relaxed">  
              "No one sees this war."
              <br /> No one hears these whispers.
              <br /> But they’re louder than any lecture I’ve ever ignored.
              </p>

              <p className="mb-4 leading-relaxed">
              Three months left.
              <br /> But it already feels like the end.
              <br /> And I,
              <br /> Still searching for where I begin.
              </p>
            </article>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-8">
              <div
                id="countdown-container"
                className="border border-red-500 p-6 bg-black bg-opacity-70 backdrop-blur-sm rounded-xl  "
              >
                <div className="text-center">
                  <div className="text-4xl font-mono text-red-500 mb-2" id="countdown">
                    --:--:--:--
                  </div>
                  
                  {/* <div id="completion-message" className="hidden mt-4">
                    <p className="text-xl font-bold text-red-600 animate-pulse">Those were hard days but I did it!!</p>
                    <p className="text-sm text-gray-400 mt-2">The journey is complete. The transformation is done.</p>
                    <p className="text-sm text-gray-400 mt-2">There is no roll back</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 py-6 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="https://x.com/Shivam_01Kumar" className="text-sm text-gray-500 hover:text-red-400 transition-colors">
           x
          </a>
          <a href="https://www.linkedin.com/in/shivam-yeshu/" className="text-sm text-gray-500 hover:text-red-400 transition-colors">
            linkedin
          </a>
          {/* <a href="#" className="text-sm text-gray-500 hover:text-red-400 transition-colors">
            telegram
          </a> */}
        </div>
      </div>
        </footer>
      </div>

      {/* Countdown component */}
      <Countdown />
    </main>
  )
}

// Type for animation particles
interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}
