import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 100%;
  background: #f5f5f5 !important;
`;

export const HeaderStyle = styled.div`
display: "flex",
justifyContent: "space-around",
marginTop: "35px"
`;

export const BlackFontAmount = styled.span`
  font-family: 'Neue Haas Grotesk Text Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 34px;
  color: #000000;
`;
export const GreenFontAmount = styled.span`
  font-family: 'Neue Haas Grotesk Text Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 34px;
  color: #3d906a;
`;
export const BuyTokenButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 20px;
  // gap: 10px;
  text-align: center;
  // width: 200px;
  // height: 54px;
  // left: 753px;
  // top: 1px;
  background: linear-gradient(270deg, #1b4347 -1.39%, #3d906a 99.46%);
  border-radius: 12px;
  color: white;
  flex: none;
  order: 0;
  border: none;
  flex-grow: 0;
`;
export const SubText = styled.span`
  // width: 391px;
  height: 22px;
  left: 0px;
  top: 34px;
  color: #5c5c5c;
  font-family: 'Neue Haas Grotesk Text Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const FeatureBlueColor = styled.h3`
  padding-right: 20px;
  padding-left: 117px;
  font-family: 'Neue Haas Grotesk Text Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #3555f7;
`;
export const FeatureBlackColor = styled.h3`
  font-family: 'Neue Haas Grotesk Text Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.color ? '#ffffff' : '#000000')} !important; ;
`;
export const FeatureHeading = styled.div`
  padding-left: 117px;
  display: flex;
`;
