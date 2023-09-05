import Header from "./components/Header"
import "@radix-ui/themes/styles.css"
import { Theme } from "@/node_modules/@radix-ui/themes/dist/cjs/theme"
import HeroSection from "./components/HeroSection"

export default function Home() {
  return (
    <main>
      <Theme>
        <Header />
      </Theme>
    </main>
  )
}
