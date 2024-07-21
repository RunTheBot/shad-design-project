/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DhqOYRZHkcH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { JSX, SetStateAction, SVGProps, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Button } from "./ui/button"

export default function Component() {
  const [temperature, setTemperature] = useState(21)
  const [ecoMode, setEcoMode] = useState(false)
  const [mode, setMode] = useState("heat")
  const handleTemperatureChange = (value: number[]) => {
    setTemperature(value[0])
  }
  const handleEcoModeToggle = () => {
    setEcoMode((prevState) => !prevState)
  }
  const handleModeChange = (newMode: SetStateAction<string>) => {
    setMode(newMode)
  }
  return (
    <Card className="w-1/4 m-1">
      <CardHeader>
        <CardTitle>Smart Thermostat</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">{temperature}°</div>
          <div className="flex items-center gap-2">
            <ThermometerIcon className="w-6 h-6 text-muted-foreground" />
            <Slider
              value={[temperature]}
              onValueChange={handleTemperatureChange}
              min={14}
              max={30}
              step={1}
              className="w-32"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LeafIcon className="w-6 h-6 text-muted-foreground" />
            <span className="text-muted-foreground">Eco Mode</span>
          </div>
          <Switch id="eco-mode" checked={ecoMode} onCheckedChange={handleEcoModeToggle} aria-label="Eco Mode" />
        </div>
        {ecoMode ? (
          <div className="text-sm text-muted-foreground">
            Eco mode is enabled. The temperature will be automatically adjusted to be more energy-efficient.
          </div>
        ) :
        <div className="text-sm text-muted-foreground">
          Eco mode is disable. Enable it to automatically adjust temperature to be more energy-efficient.
        </div>
      }
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ThermometerIcon className="w-6 h-6 text-muted-foreground" />
            <span className="text-muted-foreground">Mode</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={mode === "heat" ? "default" : "outline"}
              onClick={() => handleModeChange("heat")}
              className="px-3 py-1 text-sm"
            >
              Heat
            </Button>
            <Button
              variant={mode === "cool" ? "default" : "outline"}
              onClick={() => handleModeChange("cool")}
              className="px-3 py-1 text-sm"
            >
              Cool
            </Button>
            <Button
              variant={mode === "away" ? "default" : "outline"}
              onClick={() => handleModeChange("away")}
              className="px-3 py-1 text-sm"
            >
              Away
            </Button>
          </div>
        </div>
      </div>
      </CardContent>
    </Card>
  )
}

function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function ThermometerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
