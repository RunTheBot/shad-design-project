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
      <CardContent className="flex">
        <Toggle value="a" className="ml-auto mr-2">Living Room</Toggle>
        <Toggle value="b" className="mx-2">Kitchen</Toggle>
        <Toggle value="c" className="mr-auto ml-2">Master Bedroom</Toggle>
      </CardContent>
    </Card>
  )
}
