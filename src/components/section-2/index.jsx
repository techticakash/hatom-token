import { Typography } from '@mui/material';
import {
  BlackFontAmount,
  BuyTokenButton,
  FeatureBlackColor,
  FeatureBlueColor,
  FeatureHeading,
  GreenFontAmount,
  HeaderStyle,
  SectionContainer
} from './style';
const Section2 = () => {
  return (
    <>
      <SectionContainer>
        <HeaderStyle>
          <div>
            <BlackFontAmount>$9,449,627.26</BlackFontAmount>
            <GreenFontAmount>Dividends</GreenFontAmount>
            <Typography variant="body2" gutterBottom>
              Paid out to Hatom Token Holders over 3 years
            </Typography>
          </div>
          <FeatureHeading>
            <BuyTokenButton>Buy Hatom Tokens</BuyTokenButton>
          </FeatureHeading>
        </HeaderStyle>
        <FeatureHeading>
          <FeatureBlueColor>Features</FeatureBlueColor>
          <FeatureBlackColor color={false}>of Hatom Protocol </FeatureBlackColor>
        </FeatureHeading>
      </SectionContainer>
    </>
  );
};
export default Section2;
