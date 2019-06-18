import React from "react"
import Select from "react-select/lib/Creatable"

const defaultCategories = [
  { value: "head", label: "🤱🏻 Tétée" },
  { value: "urine", label: "🧻 Pipi" },
  { value: "stools", label: "💩 Caca" },
  { value: "bath", label: "🛁 Bain" },
  { value: "sleep", label: "😴 Dodo" },
  { value: "baby_bottle", label: "🍼 Biberon" }
]

const boobs = {
  left: 'Boob gauche',
  right: 'Boob droit',
}

export const defaultCategoryValues = defaultCategories.map(
  category => category.value
)

export const formatCategories = event =>
  event.categories
    .map(category => {
      let ret = category

      if (defaultCategories.map(dc => dc.value).includes(category)) {
        ret = defaultCategories.filter(dc => dc.value === category)[0].label
      }
      if (category === "head" && event.boobs && event.boobs.length > 0) {
        ret += ` (${
          event.boobs.length === 1 ? boobs[event.boobs[0]] : "2 boobs"
        })`
      }
      return ret
    })
    .join(", ")

const Categories = ({ onChange, defaultValue, userCategories }) => (
  <Select
    isMulti
    isClearable={false}
    options={[...defaultCategories, ...userCategories]}
    defaultValue={defaultValue}
    onChange={value => onChange(value)}
    theme={theme => ({
      ...theme,
      borderRadius: 4,
      colors: {
        ...theme.colors,
        neutral20: "#cfeeff",
        neutral30: "#cfeeff",
        primary: "#cfeeff"
      }
    })}
  />
)

export default Categories
