"use client"

import { useEffect, useState } from "react"

export default function Countdown() {
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    // Set the date we're counting down to (90 days from now)
    const countDownDate = new Date()
    countDownDate.setDate(countDownDate.getDate() + 90)
    
    // Update the count down every 1 second
    const updateCountdown = () => {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = countDownDate.getTime() - now

      // Check if the countdown has ended
      if (distance < 0) {
        setIsCompleted(true)

        const countdownElement = document.getElementById("countdown")
        const countdownContainer = document.getElementById("countdown-container")
        const completionMessage = document.getElementById("completion-message")

        if (countdownElement && countdownContainer && completionMessage) {
          countdownElement.style.display = "none"
          completionMessage.style.display = "block"
        }

        clearInterval(interval)
        return
      }

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // Display the result in the element with id="countdown"
      const countdownElement = document.getElementById("countdown")
      if (countdownElement) {
        countdownElement.innerHTML =
          days.toString().padStart(2, "0") +
          ":" +
          hours.toString().padStart(2, "0") +
          ":" +
          minutes.toString().padStart(2, "0") +
          ":" +
          seconds.toString().padStart(2, "0")
      }
    }

    // Initial update
    updateCountdown()

    // Set interval for updates
    const interval = setInterval(updateCountdown, 1000)

    // Clear interval on cleanup
    return () => clearInterval(interval)
  }, [])

  return null
}
