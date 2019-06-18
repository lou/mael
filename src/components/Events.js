import React from 'react'
import { formatCategories } from './Categories'

const displayDuration = (duration) => {
  if (duration) {
    // We need this for backward compatibility
    // when duration was stored as an object { label: label, value: value }
    const totalMinutes = duration.value || duration

    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    let newDuration = ''
    if (hours) newDuration = `${hours}h`
    if (minutes) newDuration += `${minutes}min`

    return `${newDuration}`
  }
}

const events = ({ events, removeEvent }) => {

  let previousDate

  return (
    <div className='events'>
      {
        events.sort((e1, e2) => new Date(e1.date) - new Date(e2.date)).reverse().map((event, index) => {
          const date = new Date(event.date)
          const currentDate = `${date.getDate()}${date.getMonth()}${date.getYear()}`

          const day = (currentDate !== previousDate) ?
            `${`${date.getDate()}`.padStart(2, 0)}/${`${date.getMonth()+1}`.padStart(2, 0)}` :
            null

          previousDate = currentDate
          return (
            <div key={index}>
              {
                day &&
                <div className='day'>
                  {day}
                </div>
              }
              <div className='event'>
                <div style={{ marginRight: 15, flex: 'none', width: 60 }}>
                  <div className='date'>
                    {`${date.getHours()}`.padStart(2, 0)}h{`${date.getMinutes()}`.padStart(2, 0)}
                  </div>
                  <small style={{ color: '#999'}}>
                    {displayDuration(event.duration)}
                  </small>
                </div>
                <div className='categories'>
                  {formatCategories(event)}
                </div>
                <div className='delete'
                  onClick={
                    () => {
                      if (window.confirm("Supprimer l'événement ?")) {
                        removeEvent(index)
                      }
                    }
                  }
                >
                  ×
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default events
