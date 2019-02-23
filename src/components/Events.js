import React from 'react'

const events = ({ events }) => {

  let previousDate

  return (
    <div className='events'>
      {
        events.map((event, index) => {
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
                <div>
                  {`${date.getHours()}`.padStart(2, 0)}h{`${date.getMinutes()}`.padStart(2, 0)}
                </div>
                <div>
                  {event.categories.map(category => category.label).join(', ')}
                </div>
                <div>
                  {event.duration && event.duration.label}
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
