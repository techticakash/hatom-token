import { Typography } from '@mui/material';
import {
  BlackFontAmount,
  BuyTokenButton,
  FeatureContent,
  FeatureHeading,
  GreenFont,
  SectionContainer,
  FeatureSubHeading,
  FeatureText
} from './style';
import FeatureLines from '../../assets/resources/assets-per-section/section2/linearrow.svg';

export const Features = () => {
  return (
    <SectionContainer>
      <div className="sub-container">
        <div>
          <BlackFontAmount>$9,449,627.26</BlackFontAmount>
          <GreenFont>Dividends</GreenFont>
          <Typography variant="body2" gutterBottom>
            Paid out to Hatom Token Holders over 3 years
          </Typography>
        </div>
        <BuyTokenButton>Buy Hatom Tokens</BuyTokenButton>
      </div>
      <FeatureHeading>
        Features <span>of Hatom Protocol</span>
      </FeatureHeading>
      <FeatureContent>
        <div>
          <div className="feature-sub-style">
            <FeatureSubHeading>Earn</FeatureSubHeading>
            <FeatureText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              <br />
              tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.{' '}
            </FeatureText>
          </div>
          <div className="feature-sub-style-borrow">
            <FeatureSubHeading>Borrow</FeatureSubHeading>
            <FeatureText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </FeatureText>
          </div>
        </div>
        <img src={FeatureLines} alt="FeatureLines" className="feature-img" />
        <div className="dividends">
          <FeatureSubHeading>Dividends</FeatureSubHeading>
          <FeatureText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet.
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort, dignissim sit
                ametent.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim sit
                amet.ectetur adip from one ex-diivident date othe next
              </li>
            </ul>
          </FeatureText>
        </div>
      </FeatureContent>
    </SectionContainer>
  );
};
