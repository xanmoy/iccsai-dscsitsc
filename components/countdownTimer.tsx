"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface CountdownTimerProps {
    targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                })
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    return (
        <div className="grid grid-cols-4 gap-4 text-center max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    )
}

interface TimeUnitProps {
    value: number
    label: string
}

function TimeUnit({ value, label }: TimeUnitProps) {
    return (
        <Card className="bg-blue-500 dark:bg-blue-600 backdrop-blur-sm" >
            <CardContent className="p-4" >
                <div className="text-xl md:text-4xl lg:text-3xl font-bold text-white" > {value} </div>
                < div className="text-xs text-gray-100" > {label} </div>
            </CardContent>
        </Card>
        
    )
}

