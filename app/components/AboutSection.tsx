import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes"
import Image from "next/image"
import React from "react"

const AboutSection = () => {
  return (
    <Section>
      <Container style={{ marginLeft: 15, marginRight: 15 }}>
        <Flex justify="between">
          <Flex direction="column">
            <Heading mb="2">About me</Heading>
            <Text style={{ maxWidth: 550 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </Text>
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
