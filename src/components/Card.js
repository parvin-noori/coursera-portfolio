import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack background="white" borderRadius="lg">
      <Image src={imageSrc} alt={title} borderRadius="lg" />
      <VStack
        background="white"
        borderRadius="lg"
        color="black"
        p={5}
        align="stretch"
      >
        <Heading size="md">{title}</Heading>
        <Text color="gray.500">{description}</Text>
        <HStack spacing={2}>
          <a href="#">see more</a>
          <FontAwesomeIcon icon={faArrowRight} size="xs" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
