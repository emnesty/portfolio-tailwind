"use client"
import { Avatar, Badge, Box, Button, Card, IconButton, Inset, Link, Section } from "@radix-ui/themes"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Container, Flex, Heading, Text } from "@radix-ui/themes"
import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

const defaultContext = {
  selectedText: {
    Titulo: "Default Title",
    SubTitulo: "Default Subtitle",
    HeaderMenu1: "Default Subtitle",
    HeaderMenu2: "Default Subtitle",
    HeaderMenu3: "Default Subtitle",
  },
}

function HeroSection() {
  const { selectedText } = useContext(LanguageContext) || defaultContext
  return (
    <Section>
      <Container style={{ marginLeft: 15, marginRight: 15 }}>
        <Flex justify="between">
          <Flex direction="column">
            <Heading as="h3" size="4" color="indigo">
              {selectedText.Hello}
            </Heading>
            <Text size="9" weight="bold" mt="3">
              {selectedText.Heading}
            </Text>
            <Text mt="3" color="gray">
              {selectedText.HeadingSubTitle}
            </Text>
            <Flex gap="5" mt="4">
              <Link href="https://www.linkedin.com/in/lucianoclecio/" target="_blank">
                <Flex gap="2" align="center">
                  <Button size="3" variant="soft" color="indigo">
                    <LinkedInLogoIcon />
                    LinkedIn
                  </Button>
                </Flex>
              </Link>
              <Link href="https://github.com/emnesty" target="_blank">
                <Flex gap="2" align="center">
                  <Button size="3" variant="soft" color="indigo">
                    <GitHubLogoIcon />
                    GitHub
                  </Button>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}

export default HeroSection
