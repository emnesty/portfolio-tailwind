import { useContext } from "react"
import { LanguageContext, Language } from "./LanguageContext"
import "/node_modules/flag-icons/css/flag-icons.min.css"

interface LanguageContextProps {
  setSelectedLanguage: (language: Language) => void
  // other properties...
}

const defaultContext: LanguageContextProps = {
  setSelectedLanguage: () => {},
  // other default properties...
}

//Working Code Below
const TranslationSwitcher: React.FC = () => {
  const { setSelectedLanguage } = useContext(LanguageContext)

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value as Language)
  }

  return (
    <select onChange={handleLanguageChange}>
      <option value="pt">Portuguese</option>
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  )
}
export default TranslationSwitcher

//Radix Component
// const TranslationSwitcher: React.FC = () => {
//   const { setSelectedLanguage } = useContext(LanguageContext) || defaultContext

//   const handleLanguageChange = (value: Language) => {
//     setSelectedLanguage(value)
//   }
//   return (
//     <Select.Root onValueChange={handleLanguageChange}>
//       <Select.Content>
//         <Select.Label>Languages</Select.Label>
//         <Select.Item value="pt">Português</Select.Item>
//         <Select.Item value="en">English</Select.Item>
//         <Select.Item value="es">Spanish</Select.Item>
//       </Select.Content>
//     </Select.Root>
//   )
// }
