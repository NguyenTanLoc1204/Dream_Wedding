import { useState, useEffect } from 'react'
import { getTimeUntil } from '../utils/dateUtils'

export const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntil(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntil(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}