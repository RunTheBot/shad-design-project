"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { Toggle } from "@/components/ui/toggle"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Outlets", desktop: 18 },
  { month: "HVAC", desktop: 51 },
  { month: "Computers", desktop: 21 },
  { month: "Other", desktop: 10 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card className="flex-1 m-1">
      <CardHeader className="items-center pb-4">
        <CardTitle>Light Control</CardTitle>
        <CardDescription>
          Control Your Smart Lights and Light Switches
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap">
        <Toggle value="a" className="mx-auto my-1">Living Room</Toggle>
        <Toggle value="b" className="mx-auto my-1">Kitchen</Toggle>
        <Toggle value="c" className="mx-auto my-1">Master Bedroom</Toggle>
        <Toggle value="d" className="mx-auto my-1">Upstairs Bedroom 1</Toggle>
        <Toggle value="e" className="mx-auto my-1">Upstairs Bedroom 2</Toggle>
        <Toggle value="f" className="mx-auto my-1">Upstairs Bedroom 3</Toggle>
        <Toggle value="g" className="mx-auto my-1">Bathroom</Toggle>
        <Toggle value="h" className="mx-auto my-1">Office</Toggle>
        <Toggle value="i" className="mx-auto my-1">Garage</Toggle>
        <Toggle value="j" className="mx-auto my-1">Backyard</Toggle>
        <Toggle value="k" className="mx-auto my-1">Front Yard</Toggle>
        <Toggle value="l" className="mx-auto my-1">Porch</Toggle>
      </CardContent>
    </Card>
  )
}
