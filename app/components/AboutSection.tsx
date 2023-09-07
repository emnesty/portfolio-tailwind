"use client"
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes"
import Image from "next/image"
import React, { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

function AboutSection() {
  const { selectedText } = useContext(LanguageContext)

  return (
    <Section>
      <Container style={{ marginLeft: 15, marginRight: 15 }}>
        <Flex justify="between">
          <Flex direction="column">
            <Heading mb="2">{selectedText.Titulo}</Heading>
            <Text style={{ maxWidth: 550 }}>{selectedText.SubTitulo}</Text>
          </Flex>
          <div className="rounded-lg overflow-hidden">
            <Image src={"/IMG_2180-EDIT.jpg"} alt="Picture of the author" width={500} height={500} />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}

export default AboutSection
