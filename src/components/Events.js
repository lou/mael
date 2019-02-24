import React from 'react'

const events = ({ events, removeEvent }) => {

  let previousDate

  return (
    <div className='events'>
      {
        events.sort((e1, e2) => new Date(e1.date) - new Date(e2.date)).reverse().map((event, index) => {
          const date = new Date(event.date)
          const time = new Date(event.startTime)
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
                <div style={{ marginRight: 15 }}>
                  {`${time.getHours()}`.padStart(2, 0)}h{`${time.getMinutes()}`.padStart(2, 0)}
                </div>
                <div style={{ width: '70%' }}>
                  {event.categories.map(category => category.label).join(', ')}
                </div>
                <div>
                  {event.duration && event.duration.label}
                </div>
                <div className='delete'
                  onClick={
                    () => {
                      if (window.confirm("Supprimer l'évènement ?")) {
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
