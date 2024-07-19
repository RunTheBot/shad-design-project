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
          Control You Smart Lights and Light Switches
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap">
        <Toggle value="a" className="m-auto">Living Room</Toggle>
        <Toggle value="b" className="m-auto">Kitchen</Toggle>
        <Toggle value="c" className="m-auto">Master Bedroom</Toggle>
        <Toggle value="d" className="m-auto">Upstairs Bedroom 1</Toggle>
        <Toggle value="e" className="m-auto">Upstairs Bedroom 2</Toggle>
        <Toggle value="f" className="m-auto">Upstairs Bedroom 3</Toggle>
        <Toggle value="g" className="m-auto">Bathroom</Toggle>
        <Toggle value="h" className="m-auto">Office</Toggle>
        <Toggle value="i" className="m-auto">Garage</Toggle>
        <Toggle value="j" className="m-auto">Backyard</Toggle>
        <Toggle value="k" className="m-auto">Front Yard</Toggle>
        <Toggle value="l" className="m-auto">Porch</Toggle>
      </CardContent>
    </Card>
  )
}
