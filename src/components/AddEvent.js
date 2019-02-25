import React, { useState } from 'react'
import Categories from './Categories'
import DateSelect from './DateSelect'
import DurationSelect from './DurationSelect'

const AddEvent = ({ saveEvent, usedCategories }) => {

  const [event, setEvent] = useState({
    date: new Date().toString(),
    categories: []
  })

  const [dateOpen, setDateOpen] = useState(false)
  let now = event.date ? new Date(event.date) : new Date()

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        saveEvent(event)
      }}
    >
      <label><strong>Évènement</strong></label>
      <Categories
        defaultValue={event.categories}
        onChange={categories => setEvent(prevState => ({...prevState, categories }))}
        usedCategories={usedCategories}
      />
      <label><strong>Durée</strong></label>
      <div className='duration'>
        <DurationSelect
          onChange={(duration) => setEvent(prevState => ({...prevState, duration }))}
          selected={event.duration}
        />
      </div>
      <label>
        <strong>Date</strong>
        &nbsp;
        {
          `${`${now.getDate()}`.padStart(2, 0)}/${`${now.getMonth()+1}`.padStart(2, 0)}/${now.getFullYear()}
          ${`${now.getHours()}`.padStart(2, 0)}h${`${now.getMinutes()}`.padStart(2, 0)}`
        }
        &nbsp;
        <small>
          <a href='#' onClick={(e) => {
            e.preventDefault()
            setDateOpen(!dateOpen)
          }}>
            Changer
          </a>
        </small>
      </label>
      {
        dateOpen &&
        <DateSelect
          onChange={(date) => setEvent(prevState => ({...prevState, date: date ? date.toString() : null }))}
          selected={event.date ? new Date(event.date) : null}
        />
      }
      <button style={{ marginTop: 20 }}>
        Créer un évènement
      </button>
    </form>
  );
}

export default AddEvent
