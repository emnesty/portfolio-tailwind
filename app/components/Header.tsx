"use client"
import { Link } from "@radix-ui/react-navigation-menu"
import { Container, Flex, Text } from "@radix-ui/themes"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { ThemeSwitcher } from "./ThemeSwitcher"
import TranslationSwitcher from "./TranslationSwitcher"
import TranslationText from "./TranslationText"
import { useContext, createContext } from "react"
import { LanguageContext } from "./LanguageContext"

interface LanguageContextProps {
  selectedText: {
    HeaderMenu1: string
    HeaderMenu2: string
    HeaderMenu3: string
  }
}

// Provide a default value when creating the context
export const MyLanguageContext = createContext<LanguageContextProps>({
  selectedText: {
    HeaderMenu1: "About",
    HeaderMenu2: "Cases",
    HeaderMenu3: "Contact",
  },
})

export default function Header() {
  const { selectedText } = useContext(MyLanguageContext)
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
                <TranslationSwitcher text={TranslationText} />
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
