import React, { useEffect, useState } from 'react'
import './Clock.css'

function Clock() {
  const [time, setTime] = useState<Date>(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className='Clock'>
      <h1>Clock</h1>
      <p>{ time.toLocaleTimeString() }</p>
    </div>
  )
}

export default Clock

