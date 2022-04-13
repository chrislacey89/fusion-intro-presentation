import React from "react";
import ReactDOM from "react-dom";
import family from "./images/family.jpg";
import reactIMG from "./images/react.png";
import remixIMG from "./images/remix.jpg";
import nodeIMG from "./images/node2.png";
import solidityIMG from "./images/solidity.png";

import {
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Grid,
  Box,
  Image,
  Text,
  Link
} from "spectacle";
import { node } from "prop-types";


const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}>
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const App = () => (
  <Deck theme={theme} template={template}>
    {/* Slide 1 */}
    <Slide>
      <FlexBox height="100%">
        <Heading margin="0px" fontSize="150px">
          <i>Hello</i> 👋🏻
        </Heading>
      </FlexBox>
    </Slide>
    {/* Slide 2 */}
    <Slide>
      <Grid gridTemplateColumns="50% 50%" height="100%">
        <FlexBox alignSelf={"start"}>
          <UnorderedList>
            <Heading>About Me</Heading>
            <Appear>
              <ListItem>🏡 Orlando, FL ➡️ Bloomington, IN</ListItem>
            </Appear>
            <Appear>
              <ListItem>👨🏻‍💻 👩🏻‍🏫 👶🏼 🐕</ListItem>
            </Appear>
            <Appear>
              <ListItem>🏢 Periodic ➡️ Exclaimer</ListItem>
            </Appear>
            <Appear>
              <ListItem>🇮🇹 Parlo italiano</ListItem>
            </Appear>
            <Appear>
              <ListItem>⚽ Soccer, Hiking, Playing Games</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>

        <FlexBox alignItems="center" justifyContent="center">
          <Image src={family} width="100%" />
        </FlexBox>
      </Grid>
    </Slide>
    {/* Slide 3 */}
    <Slide>
      <Grid
        flex={1}
        gridTemplateColumns="50% 50%"
        gridTemplateRows="50% 50%"
        height="100%">
        <FlexBox alignItems="center" justifyContent="center">
          <Appear>
            <Image style={{ maxHeight: "300px" }} src={reactIMG} width="100%" />
          </Appear>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Appear>
            <Image style={{ maxHeight: "300px" }} src={remixIMG} width="100%" />
          </Appear>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Appear>
            <Image style={{ maxHeight: "380px" }} src={nodeIMG} width="100%" />
          </Appear>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Appear>
            <Image
              style={{
                background: "white",
                borderRadius: "50%",
                maxHeight: "300px",
              }}
              src={solidityIMG}
              width="100%"
            />
          </Appear>
        </FlexBox>
      </Grid>
    </Slide>
    {/* Slide 4 */}
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          ✨<i>Spectacle</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A React Presentation Library
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading>
        <Text><Link href="https://github.com/chrislacey89/fusion-intro-presentation">https://github.com/chrislacey89/fusion-intro-presentation</Link></Text>
      </FlexBox>
    </Slide>
  </Deck>
);

export default App;
