import { useRef, useEffect } from 'react'

const eventName = 'beforeunload'

export default function useUnload(handler) {
  const callback = useRef(handler)

  useEffect(() => {
    const onUnload = callback.current

    window.addEventListener(eventName, onUnload)

    return () => window.removeEventListener(eventName, onUnload)
  }, [callback])
}
