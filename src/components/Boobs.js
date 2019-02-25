import React, { useState, useEffect } from 'react'

const Boobs = ({ onChange, defaultValue }) => {
  const [boobs, setBoobs] = useState(defaultValue)

  useEffect(_ => {
    onChange(boobs)
  })

  return(
    <div>
      <label>
        <input
          type='checkbox'
          checked={boobs.includes('left')}
          onChange={e => {
            e.persist()
            setBoobs(prevState => e.target.checked ? [...prevState, 'left'] : prevState.filter(boob => boob !== 'left'))
          }}
        />
        Boob gauche
      </label>
      &nbsp;&nbsp;&nbsp;
      <label>
        <input
          type='checkbox'
          checked={boobs.includes('right')}
          onChange={(e) => {
            e.persist()
            setBoobs(prevState => e.target.checked ? [...prevState, 'right'] : prevState.filter(boob => boob !== 'right'))
          }}
        />
        Boob droit
      </label>
    </div>
  )
}

export default Boobs
