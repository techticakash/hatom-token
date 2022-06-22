import {
  CompanyBox,
  CompanyContainer,
  CompanyDescription,
  CompanyName,
  FeddbackBy,
  FeedbackContainer,
  Heading,
  InnerContainer,
  Linier,
  SectionContainer,
  Text,
} from "./style";
import img3 from "./../../assets/resources/assets-per-section/section4/img3.svg";
import img1 from "./../../assets/resources/assets-per-section/section4/img1.svg";

export const Partners = () => {
  return (
    <SectionContainer>
      <InnerContainer>
        <Heading>Partners</Heading>
        <CompanyContainer>
          <CompanyBox className="first-company">
            <img src={img3} className="company-logo" />
            <CompanyName>Maiar</CompanyName>
            <CompanyDescription>
              Maiar is powered by the amazing technology of the Elrond
              blockchain, and is going to radically change the way we interact
              with money.
            </CompanyDescription>
            <p className="card-btn">Learn More </p>
          </CompanyBox>
          <CompanyBox>
            <img src={img1} className="company-logo" />
            <CompanyName>Elrond</CompanyName>
            <CompanyDescription>
              Elrond Network is a highly scalable, fast and secure blockchain
              platform for distributed apps, enterprise use cases and the new
              internet economy.
            </CompanyDescription>
            <p className="card-btn">Learn More </p>
          </CompanyBox>
        </CompanyContainer>
        <FeedbackContainer>
          <Text>
            “holoride is leading a new innovation front that has the potential
            to be transformational for the automotive industry and bring Elrond
            technology into the hyperconnected cars of the future.”
          </Text>
          <FeddbackBy>Beniamin Mincu, CEO & co-founder Elrond</FeddbackBy>
        </FeedbackContainer>
      </InnerContainer>
    </SectionContainer>
  );
};
