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
import FlexBoxTable from "./flexBoxTable";
import createTheme from "spectacle/lib/themes/default";
import styled from "styled-components";
require("./index.css");

const Logo = require("../assets/houseofapps.png");
const FolderStructure = require("../assets/folderStructure.png");
const BridgeReactNative = require("../assets/bridgeReactNative.jpg");
const ReactLogo = require("../assets/reactLogo.png");
const RnArchitecture = require("../assets/rnArchitecture.png");

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
          <br />
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            REACT NATIVE İLE UYGULAMA GELİŞTİRME
          </Heading>
          <br />
          <Text textColor="secondary">Türerkan İnce <br /> Yusuf Zeren </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading textColor="tertiary">
            House of Apps Kimdir ?
          </Heading>
          <Text margin="50px 0 0" textColor="white" bold>
            React Native konusunda Türkiye'nin en deneyimli yazılım firması olan House Of Apps;
            <List>
              <ListItem>mobil uygulama</ListItem>
              <ListItem>web projeleri</ListItem>
              <ListItem>ve ilgili backend geliştirmeleri </ListItem>
            </List>
            gerçekleştirmektedir.
          </Text>
        </Slide>

        <Slide>
          <Heading textColor="white">React Native Hakkında</Heading>
          <Image style={{ width: 500, height: 500 }} src={ReactLogo} />
        </Slide>

        <Slide transition={["fade"]} textColor="tertiary">
          <Heading textColor="white">React Native Nerden Çıktı ?</Heading>
          <List>
            <Appear fid="1">
              <ListItem>Bir Facebook projesi, açık kaynak kodlu</ListItem>
            </Appear>

            <Appear fid="2">
              <ListItem>React JS'in doğal bir aşaması</ListItem>
            </Appear>

            <Appear fid="3">
              <ListItem>React JS Browser DOM'undan bağımsız</ListItem>
            </Appear>
          </List>

          <List>
            <Appear fid="4">
              <Text textColor="secondary">
                Farklı render backend'leri yazılması an meselesiydi
              </Text>
            </Appear>
            <List>
              <Appear fid="5">
                <ListItem>
                  Server Side Rendering
                </ListItem>
              </Appear>

              <Appear fid="6">
                <ListItem>
                  React Native
                </ListItem>
              </Appear>

              <Appear fid="7">
                <ListItem>
                  Kim bilir neler ?
                </ListItem>
              </Appear>

            </List>
          </List>

        </Slide>

        <Slide transition={["fade"]} textColor="secondary">
          <Heading textColor="tertiary">React Native Neden Popüler</Heading>
          <List>
            <Appear fid="1">
              <ListItem margin="50px 0 0">
                Browser’lar sadece JS destekliyor. JS zoraki ortak dil.
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem margin="50px 0 0">
                React mevcut JS birikimini ve JSX şablonları ile mevcut HTML/CSS birikimini mobil alanda hızla değerlendirmeyi sağlıyor.
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem margin="50px 0 0">
                Pek fazla kod yazmadan hem iOS hem Android’i desteklemek mümkün.
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} textColor="secondary">
          <Heading textColor="tertiary">React Native Neden Popüler</Heading>
          <List>
            <Appear fid="1">
              <ListItem margin="50px 0 0">
                Fonksiyonel programlama ve Reaktif programlamadan alınan yaklaşımlar kodu planlamayı, anlamayı ve debug etmeyi çok kolaylaştırıyor.
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem margin="50px 0 0">
                Dünya çapında fonksiyonel programlamaya doğru bir yönelim var.
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem margin="50px 0 0">
                Benzer denemelerin aksine (örn: Cordova) performans gerçekten tatmin edici.
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} textColor="secondary">
          <Heading textColor="tertiary">React Native Neden Popüler</Heading>
          <List>
            <Appear fid="1">
              <ListItem margin="50px 0 0">
                React Native sadece görsel arayüzün nasıl çizileceğini belirliyor. Geri kalan alanda yazılımcıyı özgür bırakıyor. Kısıtlayıcı frameworkler gibi (bkz: Angular.js) değil.
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem margin="50px 0 0">
                Arkasında Facebook’un olması, Facebook’un React.js ve React Native’i kendi projelerinde kullanması güven veriyor.
              </ListItem>
            </Appear>
          </List>
        </Slide>

        {/***********************YUSUF**********************************/}
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
        <Slide
          className="contentstyle"
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
        >
          <Heading size={6}>
            {" "}
            React Native'de Bridge Yapısı
          </Heading>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image src={RnArchitecture} />
            <Image src={BridgeReactNative} />
          </div>
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

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="primary"
          className="contentstyle"
          align="center"
        >
          <Heading size={6} textColor="quarternary">
            {" "}
            Props Mantığı
          </Heading>
          <Layout>
            <Fill>
              <div
                data-snack-id="@yosooff/props-mantigi"
                data-snack-platform="ios"
                data-snack-preview="true"
                data-snack-theme="dark"
              >
                <CodeContainer
                  src="https://snack.expo.io/@yosooff/props-mantigi"
                  frameBorder="0"
                  data-snack-iframe="true"
                />
              </div>
            </Fill>
          </Layout>
          <script async src="https://snack.expo.io/embed.js" />
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
            State Mantığı
          </Heading>
          <Layout>
            <Fill>
              <div
                data-snack-id="@yosooff/state-mantigi"
                data-snack-platform="ios"
                data-snack-preview="true"
                data-snack-theme="dark"
              >
                <script async src="https://snack.expo.io/embed.js" />
                <CodeContainer
                  src="https://snack.expo.io/@yosooff/state-mantigi"
                  frameBorder="0"
                  data-snack-iframe="true"
                />
              </div>
            </Fill>
          </Layout>
          <script async src="https://snack.expo.io/embed.js" />
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
          <Layout>
            <Fill>
              <div
                data-snack-id="@yosooff/flexbox-style"
                data-snack-platform="ios"
                data-snack-preview="true"
                data-snack-theme="dark"
              >
                <CodeContainer
                  src="https://snack.expo.io/@yosooff/flexbox-style"
                  frameBorder="0"
                  data-snack-iframe="true"
                />
              </div>
            </Fill>
          </Layout>
          <script async src="https://snack.expo.io/embed.js" />
        </Slide>

        <Slide> <Heading>Demo Yapalım</Heading></Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="primary"
          className="contentstyle"
          align="center"
        >
          <Layout>
            <Fill>
              <div
                data-snack-id="@yosooff/demo-marvel-app"
                data-snack-platform="ios"
                data-snack-preview="true"
                data-snack-theme="dark"
              >
                <CodeContainer
                  src="https://snack.expo.io/@yosooff/demo-marvel-app"
                  frameBorder="0"
                  data-snack-iframe="true"
                />
              </div>
            </Fill>
          </Layout>
          <script async src="https://snack.expo.io/embed.js" />
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
