import "@radix-ui/themes/styles.css"
import { Theme } from "@/node_modules/@radix-ui/themes/dist/cjs/theme"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import { LanguageProvider } from "./components/LanguageProvider"

export default function Home() {
  return (
    <main>
      <Theme>
        <LanguageProvider>
          <Header />
          <HeroSection />
          <AboutSection />
        </LanguageProvider>
      </Theme>
    </main>
  )
}
