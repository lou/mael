import React, { useState, useEffect } from 'react'

const DateSelect = ({ selected, onChange }) => {

  const defaultSelected = selected ? {
    year: selected.getFullYear(),
    month: selected.getMonth(),
    day: selected.getDate(),
    hours: selected.getHours(),
    minutes: selected.getMinutes()
  } : {}

  const [date, setDate] = useState(defaultSelected)

  useEffect(() => {
    if (JSON.stringify(defaultSelected) !== JSON.stringify(date)) {
      onChange(new Date(date.year, date.month, date.day, date.hours, date.minutes))
    }
  })

  const currentYear = new Date().getFullYear()
  const yearOptions = Array(3).fill().map((_, i) => {
    const year = currentYear - 2 + i

    return (
      <option value={year} key={year}>
        {year}
      </option>
    )
  })
  const monthOptions = Array(12).fill().map((_, i) => {
    const month = i+1

    return(
      <option value={month} key={month}>
        {`${month}`.padStart(2, 0)}
      </option>
    )
  })
  const dayOptions = Array(31).fill().map((_, i) => {
    const day = i+1

    return(
      <option value={day} key={day}>
        {`${i+1}`.padStart(2, 0)}
      </option>
    )
  })

  const hourOptions = Array(24).fill().map((_, hour) => {
    return(
      <option value={hour} key={hour}>
        {`${hour}`.padStart(2, 0)}
      </option>
    )
  })

  const minuteOptions = Array(59).fill().map((_, i) => {
    const minute = i+1

    return(
      <option value={minute} key={minute}>
        {`${minute}`.padStart(2, 0)}
      </option>
    )
  })

  return (
    <React.Fragment>
      <select
        value={date.day || ''}
        onChange={(e) => {
          e.persist()
          setDate(prevState => ({ ...prevState, day: parseInt(e.target.value) }))
        }}
      >
        {dayOptions}
      </select>
      /
      <select
        value={date.month ? date.month + 1 : ''}
        onChange={(e) => {
          e.persist()
          setDate(prevState => ({ ...prevState, month: parseInt(e.target.value) }))
        }}
      >
        {monthOptions}
      </select>
      /
      <select
        value={date.year || ''}
        onChange={(e) => {
          e.persist()
          setDate(prevState => ({ ...prevState, year: parseInt(e.target.value) }))
        }}
      >
        {yearOptions}
      </select>
      <select
        value={date.hours || ''}
        onChange={(e) => {
          e.persist()
          setDate(prevState => ({ ...prevState, hours: parseInt(e.target.value) }))
        }}
      >
        {hourOptions}
      </select>
      h
      <select
        value={date.minutes || ''}
        onChange={(e) => {
          e.persist()
          setDate(prevState => ({ ...prevState, minutes: parseInt(e.target.value) }))
        }}
      >
        {minuteOptions}
      </select>
      min
    </React.Fragment>
  )
}

export default DateSelect
