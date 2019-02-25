import React, { useState } from 'react'
import Categories from './Categories'
import DateSelect from './DateSelect'
import DurationSelect from './DurationSelect'

const AddEvent = ({ saveEvent, usedCategories }) => {

  const [event, setEvent] = useState({
    date: new Date().toString(),
    categories: []
  })

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        saveEvent(event)
      }}
    >
      <label>Évènement</label>
      <Categories
        defaultValue={event.categories}
        onChange={categories => setEvent(prevState => ({...prevState, categories }))}
        usedCategories={usedCategories}
      />
      <label>Date</label>
      <DateSelect
        onChange={(date) => setEvent(prevState => ({...prevState, date: date ? date.toString() : null }))}
        selected={event.date ? new Date(event.date) : null}
      />
      <label>Durée</label>
      <div className='duration'>
        <DurationSelect
          onChange={(duration) => setEvent(prevState => ({...prevState, duration }))}
          selected={event.duration}
        />
      </div>
      <button>
        Créer un évènement
      </button>
    </form>
  );
}

export default AddEvent
