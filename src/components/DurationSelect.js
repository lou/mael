import React, { useState, useEffect } from 'react'

const DurationSelect = ({ selected, onChange }) => {

  const [duration, setDuration] = useState({
    hours: selected ? Math.floor(selected / 60) : 0,
    minutes: selected ? selected % 60 : 0
  })

  useEffect(() => {
    const newDuration = duration.hours * 60 + duration.minutes

    if (selected !== newDuration) {
      onChange(newDuration)
    }
  })

  const hourOptions = Array(24).fill().map((_, hour) => {
    return(
      <option value={hour} key={hour}>
        {`${hour}`.padStart(2, 0)}
      </option>
    )
  })

  const minuteOptions = Array(12).fill().map((_, i) => {
    const minute = (i)*5

    return(
      <option value={minute} key={minute}>
        {`${minute}`.padStart(2, 0)}
      </option>
    )
  })

  return (
    <div className='dates' style={{ marginBottom: 15}}>
      <select
        value={duration.hours || ''}
        onChange={(e) => {
          e.persist()
          setDuration(prevState => ({ ...prevState, hours: parseInt(e.target.value) }))
        }}
      >
        {hourOptions}
      </select>
      <div className='separator'>h</div>
      <select
        value={duration.minutes || ''}
        onChange={(e) => {
          e.persist()
          setDuration(prevState => ({ ...prevState, minutes: parseInt(e.target.value) }))
        }}
      >
        {minuteOptions}
      </select>
      <div className='separator'>min</div>
    </div>
  )
}

export default DurationSelect
