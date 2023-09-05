"use client"
import { Button } from "@radix-ui/themes"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { Container, Flex, Heading, Text } from "@radix-ui/themes"

function HeroSection() {
  return (
    <main>
      <Container size="1">
        <Flex direction="column">
          <Heading>Coding Issue Tracker</Heading>
          <Text color="gray">Here you can find the issues relevantes your certain projects.</Text>
        </Flex>
      </Container>
    </main>

    // <section className="container mx-auto mt-12">
    //   <div className="min-h-screen hero bg-base-200">
    //     <div className="flex items-center justify-between">
    //       <div className="w-full max-w-[600px]">
    //         <h3 className="mb-4">Hello, I'm Luciano Silva</h3>
    //         <h1 className="text-6xl font-bold">UX/UI Designer, Front-end developer.</h1>
    //         <p className="mt-4">
    //           With years of experience in large tech companies, I am currently working as UX/UI Designer and I
    //           am always looking for new knowledge and experiences. Lets talk.
    //         </p>
    //         <ul className="flex gap-3 mt-10">
    //           <li>
    //             <a href="#">
    //               <Button variant="outline" color="cyan">
    //                 <GitHubLogoIcon width="16" height="16" /> Github
    //               </Button>
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#">
    //               <Button variant="outline" color="cyan">
    //                 <LinkedInLogoIcon width="16" height="16" /> Github
    //               </Button>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <Image className="rounded-lg" src="/IMG_2180-EDIT.jpg" alt="My Selfie" width={460} height={460} />
    //     </div>
    //   </div>
    // </section>
  )
}

export default HeroSection
