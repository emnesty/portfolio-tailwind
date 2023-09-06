import "@radix-ui/themes/styles.css"
import { Theme } from "@/node_modules/@radix-ui/themes/dist/cjs/theme"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"

export default function Home() {
  return (
    <main>
      <Theme>
        <Header />
        <HeroSection />
        <AboutSection />
      </Theme>
    </main>
  )
}
