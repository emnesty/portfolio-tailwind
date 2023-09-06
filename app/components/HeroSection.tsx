"use client"
import { Avatar, Badge, Box, Button, Card, IconButton, Inset, Link, Section } from "@radix-ui/themes"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Container, Flex, Heading, Text } from "@radix-ui/themes"

function HeroSection() {
  return (
    <Section>
      <Container style={{ marginLeft: 15, marginRight: 15 }}>
        <Flex justify="between">
          <Flex direction="column">
            <Heading as="h3" size="4" color="indigo">
              hi, I'm Luciano 👋
            </Heading>
            <Text size="9" weight="bold" mt="3">
              ux/ui designer having some fun with development and tech
            </Text>
            <Text mt="3" color="gray">
              Here you can find some of my projects and cases, feel free to contact me
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
