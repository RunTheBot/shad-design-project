'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0fA1WZ11cdF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { JSX, SVGProps, useState } from "react"

export default function Component() {
  const [powerSaved, setPowerSaved] = useState(18)
  const handlePowerSaved = (value: number[]) => {
    setPowerSaved(value[0])
  }

  return (
    <Card className="h-auto m-1">
      <CardHeader>
        <CardTitle>AI Power Saving Mode</CardTitle>
        <CardDescription>
          Reduce your energy consumption and carbon footprint with our AI powered smart power saving mode.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Power Saving Mode</p>
            <p className="text-xs text-muted-foreground">Automatically optimize energy usage</p>
          </div>
          <Switch id="power-saving-mode" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Target</p>
            <p className="text-xs text-muted-foreground">Adjust the target energy savings</p>
          </div>
          <Slider defaultValue={[18]} max={50} step={1} aria-label="Target Energy Saved" onValueChange={handlePowerSaved} />
        </div>
        <div className="bg-muted rounded-md p-4">
          <p className="text-sm font-medium">Estimated Savings</p>
          <div className="flex items-center gap-2 mt-2">
            <PowerIcon className="w-6 h-6 text-primary" />
            <div>
              <p className="text-2xl font-bold">{powerSaved}%</p>
              <p className="text-xs text-muted-foreground">Energy Savings</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <LeafIcon className="w-6 h-6 text-primary" />
            <div>
              <p className="text-2xl font-bold">1.2 tons</p>
              <p className="text-xs text-muted-foreground">CO2 Reduction</p>
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


function PowerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
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
