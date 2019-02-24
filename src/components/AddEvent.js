import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Categories from './Categories'
import Select from 'react-select'

const duration = () => {
  return Array(11).fill().map((_, i) => {
    const minutes = (i+1)*5;
    return ({ label: `${`${minutes}`.padStart(2, 0)} min`, value: minutes })
  })
}

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
      <div className='dates'>
        <DatePicker
          onChange={(date) => setEvent(prevState => ({...prevState, date: date ? date.toString() : null }))}
          selected={event.date ? new Date(event.date) : null}
          placeholderText="C'était quand ?"
          dateFormat="d MMM YYYY"
          withPortal
        />
        <DatePicker
          onChange={(startTime) => {
            if (startTime) {
              const date = new Date(event.date)
              const time = new Date(startTime)
              const newDate = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                time.getHours(),
                time.getMinutes()
              )
              setEvent(prevState => ({...prevState, date: newDate }))
            }
          }}
          selected={event.date ? new Date(event.date) : null}
          placeholderText="Heure de début"
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={5}
          dateFormat="HH:mm"
          timeFormat="HH:mm"
          timeCaption="Time"
          withPortal
        />
        <div className='duration'>
        <Select
          onChange={(duration) => setEvent(prevState => ({...prevState, duration }))}
          options={duration()}
          placeholder='Durée'
          isClearable
          styles={{
            input: styles => ({
              ...styles,
              // width: 200
            }),
            container: styles => ({
              ...styles,
              width: '100%'
            })
          }}
        />
        </div>
      </div>
      <Categories
        defaultValue={event.categories}
        onChange={categories => setEvent(prevState => ({...prevState, categories }))}
        usedCategories={usedCategories}
      />
      <button>
        Créer un évènement
      </button>
    </form>
  );
}

export default AddEvent
