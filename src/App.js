import React, { useState, useEffect } from 'react';
import './App.css';
import AddEvent from './components/AddEvent'
import Events from './components/Events'
import logo from './logo.png'
import { defaultCategoryValues } from './components/Categories'

const uniq = (array) => {
  const result = []
  const map = new Map()
  for (const item of array) {
      if(!map.has(item.value)) {
          map.set(item.value, true)
          result.push({
              value: item.value,
              label: item.label
          })
      }
  }
  return result
}

const remove = (arr, index) => {
  return arr.slice(0,index).concat(arr.slice(index+1))
}

const App = () => {
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || [])
  const addEvent = event => setEvents([...events, event])
  const removeEvent = index => setEvents(remove(events, index))
  const userCategories = uniq(
    events.map(event => event.categories).flat()
  ).filter(category => !defaultCategoryValues.includes(category.value))

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  })

  return (
    <div className="container">
      <div className='header'>
        <h1>
          <img src={logo} width='28' height='28' alt='logo' />
          Maël
        </h1>
      </div>
      <AddEvent saveEvent={addEvent} userCategories={userCategories} />
      <Events events={events} removeEvent={removeEvent} />
    </div>
  )
}

export default App;
