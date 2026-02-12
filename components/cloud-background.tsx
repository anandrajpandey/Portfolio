'use client'

import { useEffect, useRef } from 'react'

export function CloudBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Particle class
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height * 0.8
        this.vx = Math.random() * 0.3 - 0.15
        this.vy = Math.random() * 0.2 - 0.1
        this.radius = Math.random() * 80 + 40
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x - this.radius > canvas.width) {
          this.x = -this.radius
        } else if (this.x + this.radius < 0) {
          this.x = canvas.width + this.radius
        }

        if (this.y - this.radius > canvas.height) {
          this.y = -this.radius
        } else if (this.y + this.radius < 0) {
          this.y = canvas.height + this.radius
        }
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        const wobble = Math.sin(time * 0.0005 + this.x * 0.001) * 2

        ctx.save()
        ctx.globalAlpha = this.opacity + Math.sin(time * 0.0003) * 0.1
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(this.x + wobble, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Initialize particles
    const particleCount = 12
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle())

    // Animation loop
    const animate = () => {
      timeRef.current += 1

      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#0c1929')
      gradient.addColorStop(0.5, '#1a2942')
      gradient.addColorStop(1, '#2a3f5f')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update()
        particle.draw(ctx, timeRef.current)
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ display: 'block' }}
    />
  )
}
