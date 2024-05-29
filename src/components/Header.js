import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Stack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const header = headerRef.current;

      if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        header.style.transform = "translateY(0)";
      } else {
        // Scrolling down
        header.style.transform = "translateY(-200px)";
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Box
      position="fixed"
      zIndex={1}
      top={0}
      left={0}
      right={0}
      translateY={0}
      ref={headerRef}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <Stack
          px={{ lg: 16, base: 4 }}
          direction={{ md: "row", base: "column" }}
          py={4}
          gap={{ lg: 0, base: 5 }}
          justifyContent="space-between"
          alignItems="center"
          wrap="wrap"
        >
          <nav>
            <HStack spacing={8}>
              {/* Add social media links based on the `socials` data */}
              {socials.map((item, index) => (
                <a href={item.url} key={index}>
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#contactme" onClick={handleClick("contactme")}>
                contact me
              </a>
              <a href="#projects" onClick={handleClick("projects")}>
                projects
              </a>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </Stack>
      </Box>
    </Box>
  );
};
export default Header;
