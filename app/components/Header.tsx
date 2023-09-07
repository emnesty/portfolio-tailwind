"use client"
import { Link } from "@radix-ui/react-navigation-menu"
import { Container, Flex, Text } from "@radix-ui/themes"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { ThemeSwitcher } from "./ThemeSwitcher"
import TranslationSwitcher from "./TranslationSwitcher"
import { useContext, createContext } from "react"
import { LanguageContext } from "./LanguageContext"

// interface LanguageContextProps {
//   Header_pt: {
//     HeaderMenu1: string
//     HeaderMenu2: string
//     HeaderMenu3: string
//   }
//   Header_en: {
//     HeaderMenu1: string
//     HeaderMenu2: string
//     HeaderMenu3: string
//   }
//   Header_es: {
//     HeaderMenu1: string
//     HeaderMenu2: string
//     HeaderMenu3: string
//   }
// }

// Provide a default value when creating the context
// export const MyLanguageContext = createContext<LanguageContextProps>({
//   Header_pt: {
//     HeaderMenu1: "Sobre",
//     HeaderMenu2: "Trabalhos",
//     HeaderMenu3: "Contato",
//   },
//   Header_en: {
//     HeaderMenu1: "Acerca",
//     HeaderMenu2: "Trabajos",
//     HeaderMenu3: "Contacto",
//   },
//   Header_es: {
//     HeaderMenu1: "About",
//     HeaderMenu2: "Cases",
//     HeaderMenu3: "Contact",
//   },
// })

const defaultContext = {
  selectedText: {
    Titulo: "Default Title",
    SubTitulo: "Default Subtitle",
    HeaderMenu1: "Default Subtitle",
    HeaderMenu2: "Default Subtitle",
    HeaderMenu3: "Default Subtitle",
  },
}

export default function Header() {
  const { selectedText } = useContext(LanguageContext) || defaultContext
  return (
    <header className="border-b dark:border-slate-800 border-slate-200 pb-6">
      <Container style={{ marginLeft: 15, marginRight: 15 }} mt="6">
        <Flex align="center" justify="between">
          <div>
            <Text weight="bold">LUCIANO SILVA</Text>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-5">
              <NavigationMenuItem className="text-violet11 dark:hover:bg-slate-800 hover:bg-slate-100 focus:shadow-slate-800 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                <Link href="/">{selectedText.HeaderMenu1}</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-violet11 dark:hover:bg-slate-800 hover:bg-slate-100 focus:shadow-slate-800 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                <Link href="/">{selectedText.HeaderMenu2}</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-violet11 dark:hover:bg-slate-800 hover:bg-slate-100 focus:shadow-slate-800 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                <Link href="/">{selectedText.HeaderMenu3}</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-violet11 dark:hover:bg-slate-800 hover:bg-slate-100 focus:shadow-slate-800 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                <TranslationSwitcher />
              </NavigationMenuItem>
              <NavigationMenuItem className="text-violet11 dark:hover:bg-slate-800 hover:bg-slate-100 focus:shadow-slate-800 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                <ThemeSwitcher />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Flex>
      </Container>
    </header>
  )
}
