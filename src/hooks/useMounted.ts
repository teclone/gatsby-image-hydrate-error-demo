import { useState, useEffect } from "react"

export const useMounted = () => {
  const [mounted, setmounted] = useState(false)

  useEffect(() => {
    setmounted(true)
  }, [])

  return mounted
}
