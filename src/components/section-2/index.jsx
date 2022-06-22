import { Button, Grid, Item, Typography } from "@mui/material";
import {
  BlackFont,
  BlackFontAmount,
  BuyTokenButton,
  BuyTokenButtonFont,
  FeatureBlackColor,
  FeatureBlueColor,
  FeatureHeading,
  GreenFont,
  SectionContainer,
} from "./style";
const Section2 = () => {
  return (
    <>
      <SectionContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "35px"
          }}
        >
          <div>
            <BlackFontAmount>$9,449,627.26</BlackFontAmount>
            <GreenFont>Dividends</GreenFont>
            <Typography variant="body2" gutterBottom>
              Paid out to Hatom Token Holders over 3 years
            </Typography>
          </div>
          <FeatureHeading>
            <BuyTokenButton>Buy Hatom Tokens</BuyTokenButton>
          </FeatureHeading>
        </div>
        <FeatureHeading>
          <FeatureBlueColor>Features</FeatureBlueColor>
          <FeatureBlackColor color={false}>
            of Hatom Protocol{" "}
          </FeatureBlackColor>
        </FeatureHeading>
      </SectionContainer>
    </>
  );
};
export default Section2;
