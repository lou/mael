import React from 'react'
import Select from 'react-select/lib/Creatable'

export const defaultCategories = [
  { value: 'head', label: '🤱🏻Tétée' },
  { value: 'urine', label: '🧻 Pipi' },
  { value: 'stools', label: '💩Caca' },
  { value: 'bath', label: '🛁Bain' },
  { value: 'sleep', label: '😴Dodo' },
  { value: 'baby_bottle', label: '🍼Biberon' }
]

export const defaultCategoryValues = defaultCategories.map(category => category.value)

const Categories = ({ onChange, defaultValue, userCategories }) => (
  <Select
    isMulti
    isClearable={false}
    options={[...defaultCategories, ...userCategories]}
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
