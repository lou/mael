import React from 'react'
import Select from 'react-select/lib/Creatable'

const Categories = ({ onChange, defaultValue, usedCategories }) => (
  <Select
    isMulti
    isClearable={false}
    options={usedCategories}
    defaultValue={defaultValue}
    onChange={value => onChange(value)}
    theme={(theme) => ({
      ...theme,
      borderRadius: 4,
      colors: {
      ...theme.colors,
        neutral20: '#cfeeff',
        neutral30: '#cfeeff',
        primary: '#cfeeff',
      },
    })}
  />
)

export default Categories
