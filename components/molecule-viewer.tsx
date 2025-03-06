"use client"

import { useEffect, useRef } from "react"

interface MoleculeViewerProps {
  molecule: string
  is3D: boolean
}

export function MoleculeViewer({ molecule, is3D }: MoleculeViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw molecule (simplified example)
    if (molecule === "Benzene") {
      drawBenzene(ctx, canvas.width / 2, canvas.height / 2, is3D)
    } else {
      // Default placeholder
      drawPlaceholder(ctx, canvas.width / 2, canvas.height / 2)
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [molecule, is3D])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

function drawBenzene(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, is3D: boolean) {
  const radius = 100
  const sides = 6
  const angle = (2 * Math.PI) / sides
  const points: [number, number][] = []

  // Calculate hexagon points
  for (let i = 0; i < sides; i++) {
    const x = centerX + radius * Math.cos(i * angle - Math.PI / 2)
    const y = centerY + radius * Math.sin(i * angle - Math.PI / 2)
    points.push([x, y])
  }

  // Draw the benzene ring
  ctx.strokeStyle = "#34D399"
  ctx.lineWidth = 2

  // Draw the hexagon
  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  for (let i = 1; i < sides; i++) {
    ctx.lineTo(points[i][0], points[i][1])
  }
  ctx.closePath()
  ctx.stroke()

  // Draw the inner circle (representing delocalized electrons)
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius * 0.7, 0, 2 * Math.PI)
  ctx.strokeStyle = "rgba(52, 211, 153, 0.4)"
  ctx.stroke()

  // Draw carbon atoms
  for (let i = 0; i < sides; i++) {
    ctx.beginPath()
    ctx.arc(points[i][0], points[i][1], 10, 0, 2 * Math.PI)
    ctx.fillStyle = "#1F2937"
    ctx.fill()
    ctx.strokeStyle = "#34D399"
    ctx.stroke()
  }

  // Draw hydrogen atoms if in 3D mode
  if (is3D) {
    for (let i = 0; i < sides; i++) {
      const hx = points[i][0] + (points[i][0] - centerX) * 0.4
      const hy = points[i][1] + (points[i][1] - centerY) * 0.4

      ctx.beginPath()
      ctx.arc(hx, hy, 6, 0, 2 * Math.PI)
      ctx.fillStyle = "#9CA3AF"
      ctx.fill()
      ctx.strokeStyle = "#D1D5DB"
      ctx.stroke()

      // Draw bond between C and H
      ctx.beginPath()
      ctx.moveTo(points[i][0], points[i][1])
      ctx.lineTo(hx, hy)
      ctx.strokeStyle = "#9CA3AF"
      ctx.stroke()
    }
  }
}

function drawPlaceholder(ctx: CanvasRenderingContext2D, centerX: number, centerY: number) {
  // Draw a placeholder molecule
  ctx.font = "16px sans-serif"
  ctx.fillStyle = "#34D399"
  ctx.textAlign = "center"
  ctx.fillText("Molecule visualization will appear here", centerX, centerY - 20)

  // Draw a simple atom
  ctx.beginPath()
  ctx.arc(centerX, centerY + 30, 30, 0, 2 * Math.PI)
  ctx.fillStyle = "#1F2937"
  ctx.fill()
  ctx.strokeStyle = "#34D399"
  ctx.lineWidth = 2
  ctx.stroke()
}

