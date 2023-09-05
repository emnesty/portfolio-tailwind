"use client"
import { Link } from "@radix-ui/react-navigation-menu"
import { Container, Flex, Text } from "@radix-ui/themes"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu"
import { SunIcon } from "@radix-ui/react-icons"
import { ThemeSwitcher } from "./ThemeSwitcher"

export default function Header() {
  return (
    <header className="border-b dark:border-slate-800 border-slate-200 pb-6">
      <Container mt="6">
        <Flex align="center" justify="between">
          <div>
            <Text weight="bold">LUCIANO SILVA</Text>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-5">
              <NavigationMenuItem className="text-violet11 dark:hover:bg-slate-800 hover:bg-slate-100 focus:shadow-slate-800 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                <Link href="/">Sobre</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-violet11 dark:hover:bg-slate-800 hover:bg-slate-100 focus:shadow-slate-800 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                <Link href="/">Cases</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-violet11 dark:hover:bg-slate-800 hover:bg-slate-100 focus:shadow-slate-800 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                <Link href="/">Contato</Link>
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
