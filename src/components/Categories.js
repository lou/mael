import React from 'react'
import Select from 'react-select/lib/Creatable'

const Categories = ({ onChange, defaultValue, usedCategories }) => (
  <Select
    isMulti
    isClearable={false}
    options={usedCategories}
    defaultValue={defaultValue}
    onChange={value => onChange(value)}
  />
)

export default Categories
