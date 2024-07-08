/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px={{ base: "30px", md: "50px" }}
      pb='30px'>
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        {" "}
        Copyright &copy; {1900 + new Date().getYear()}
        <Text as='span' fontWeight='500' ms='4px'>
        | Government College University Faisalabad
        </Text>
      </Text>
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            color={textColor}
            href='https://gcuf.edu.pk/'>
            Main Site
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            color={textColor}
            href='https://gcuf.edu.pk/'>
            License
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            color={textColor}
            href='https://gcuf.edu.pk/'>
            Terms of Use
          </Link>
        </ListItem>
        <ListItem>
          <Link
            fontWeight='500'
            color={textColor}
            href='https://gcuf.edu.pk/'>
            Blog
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
