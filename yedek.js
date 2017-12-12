// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  Fill,
  Fit,
  Layout
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import styled from "styled-components";
require("./index.css");

import FlexBoxTable from "./flexBoxTable";

const Logo = require("../assets/houseofapps.png");
const FolderStructure = require("../assets/folderStructure.png");
const BridgeReactNative = require("../assets/bridgeReactNative.jpg");

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
          <Heading size={6} textColor="secondary" caps>
            {" "}React Native'de geliştirme yapmak için gerekli araçlar
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem>nodejs ve npm ( yarn ) </ListItem>
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
        <Slide>
          <Heading>
            npm'de sık kullanılan komutlar
          </Heading>
          <List>
            <ListItem>npm install --save 'paket_ismi'</ListItem>
            <ListItem>npm install --save -dev 'paket_ismi'</ListItem>
            <ListItem>npm install -g 'paket_ismi'</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            {" "}React Native ile Projeye Nasıl Başlıyoruz ?
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem style={{ marginBottom: "40px" }}>
                <Code>npm install -g react-native-cli</Code>
                <Text>
                  komutu ile react-native-cli kütüphanesini global olarak bilgisayarımıza kuruyoruz
                </Text>
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem style={{ marginBottom: "40px" }}>
                <Code>react-native init helloWorld</Code>
                <Text>
                  komutu ile projemizi oluşturuyoruz
                </Text>
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem style={{ marginBottom: "40px" }}>
                <Code>react-native run-ios</Code>
                {" "}
                V
                {" "}
                <Code>react-native run-android</Code>
                <Text>
                  komutu ile projemizi çalıştırıyoruz
                </Text>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6}>
            {" "}
            React Native Folder Yapısı
          </Heading>
          <Image src={FolderStructure} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6}>
            {" "}
            React Native'de Bridge Yapısı
          </Heading>
          <Image src={BridgeReactNative} />
        </Slide>

        <Slide transition={["fade"]} bgColor="black" textColor="tertiary">
          <Heading size={6} textColor="quarternary">
            {" "}
            React ile Uygulama Geliştirilirken En Temel Bilinmesi Gerekenler
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem>
                <Code style={{ fontSize: "32px", color: "gray" }}>
                  class MyButton extends React.Component
                </Code>
                <Text style={{ color: "white" }}>
                  kodu ile oluşturduğumuz componentin belli başlı özellikleri oluyor
                </Text>
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>
                LifeCycle Methodlar
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>
                props mantığı (this.props)
              </ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>
                state mantığı (this.state)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="primary"
          className="contentstyle"
          align="center"
        >
          <Heading size={6} textColor="quarternary">
            {" "}
            LifeCycle Methodlar
          </Heading>
          <Layout>
            <Fill>
              <div
                data-snack-id="@yosooff/lifecyclemethodlar"
                data-snack-platform="ios"
                data-snack-preview="true"
                data-snack-theme="dark"
              >
                <CodeContainer
                  src="https://snack.expo.io/@yosooff/lifecyclemethodlar"
                  frameBorder="0"
                  data-snack-iframe="true"
                />
              </div>
            </Fill>
          </Layout>
          <script async src="https://snack.expo.io/embed.js" />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="quarternary">
            {" "}
            Props Mantığı
          </Heading>
          <Text>
            <Link
              target="_blank"
              href="https://snack.expo.io/@yosooff/props-mantigi"
            >
              https://snack.expo.io/@yosooff/props-mantigi
            </Link>
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} textColor="quarternary">
            {" "}
            State Mantığı
          </Heading>
          <Text>
            <Link
              target="_blank"
              href="https://snack.expo.io/@yosooff/state-mantigi"
            >
              https://snack.expo.io/@yosooff/state-mantigi
            </Link>
          </Text>
        </Slide>

        <Slide>
          <Heading>FlexBox</Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="white"
          textColor="black"
          className="contentstyle"
          align="center"
        >
          <Heading size={5}>FlexBox</Heading>
          <FlexBoxTable />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="primary"
          className="contentstyle"
          align="center"
        >
          <Heading size={6} textColor="quarternary">
            {" "}
            FlexBox
          </Heading>
          <Text>
            <Link
              target="_blank"
              href="https://snack.expo.io/@yosooff/flexbox-style"
            >
              https://snack.expo.io/@yosooff/flexbox-style
            </Link>
          </Text>
        </Slide>

        <Slide>
          {" "}<Heading>
            <Link
              target="_blank"
              href="https://snack.expo.io/@yosooff/demo-marvel-app"
            >
              Demo Yapalım
            </Link>{" "}
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={Logo} />
          <Text textColor="secondary">olarak</Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Teşekkür Ederiz
          </Text>
        </Slide>

      </Deck>
    );
  }
}

const CodeContainer = styled.iframe`
   background:#212733;
   border:1px solid rgba(0,0,0,.16);
   border-radius:4px;
   flex:1;
   width:100%;
   height:100%;
   min-height:900px;
`;

const Link = styled.a`
  
`;
