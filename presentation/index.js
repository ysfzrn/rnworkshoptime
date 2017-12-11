// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
const Logo = require("../assets/houseofapps.png");

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "black",
    secondary: "white",
    tertiary: "#429ba7",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={Logo} />
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            React Native Workshop
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Hoşgeldiniz
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear fid="1">
            <BlockQuote>
              <Quote>Bir kere öğren, her yerde yaz</Quote>
            </BlockQuote>
          </Appear>
          <Appear fid="2">
            <Text margin="50px 0 0" textColor="white" bold>
              Ne demek ?
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps> React Native için Gerekli araçlar</Heading>
          <List>
            <Appear fid="1">
              <ListItem>nodejs ve npm</ListItem>
            </Appear>
          </List>

          <Appear fid="2">
            <List>
              <ListItem>Android Studio</ListItem>
              <ListItem>Genymotion (Opsiyonel)</ListItem>
            </List>
          </Appear>

          <Appear fid="3">
            <List>
              <ListItem>XCode</ListItem>
            </List>
          </Appear>

        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps> Bir Projeye Nasıl Başlıyoruz ?</Heading>
        </Slide>
      </Deck>
    );
  }
}
