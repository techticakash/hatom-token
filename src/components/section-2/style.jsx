import styled from 'styled-components';

export const SectionContainer = styled.div`
  background: #f5f5f5 !important;
  padding: 40px 126px 177px 117px;
  .sub-container {
    display: flex;
    justify-content: space-around;
  }
`;
export const BlackFontAmount = styled.span`
  font-size: 34px;
  line-height: 34px;
  color: #000000;
`;
export const GreenFont = styled.span`
  margin-left: 2px;
  font-weight: 500;
  font-size: 34px;
  line-height: 34px;
  color: #3d906a;
`;
export const BuyTokenButton = styled.button`
  padding: 16px 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  background: linear-gradient(270deg, #1b4347 -1.39%, #3d906a 99.46%);
  border-radius: 12px;
  color: white;
  border: none;
`;
export const SubText = styled.span`
  width: 391px;
  height: 22px;
  left: 0px;
  top: 34px;
  color: #5c5c5c;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const FeatureContent = styled.div`
  margin-top: 48px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  .feature-sub-style {
    max-width: 295;
    margin-bottom: 100;
  }
  .feature-sub-style-borrow {
    max-width: 295;
  }
  .feature-img {
    position: relative;
    left: -4px;
    top: -28px;
  }
  .dividends {
    max-width: 295;
  }
`;
export const FeatureHeading = styled.div`
  margin-top: 100px;
  text-align: left;
  font-size: 40px;
  line-height: 50px;
  color: #3555f7;
  span {
    font-weight: 500;
    color: #000000;
  }
`;
export const FeatureSubHeading = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #000000;
  text-align: left;
  margin-bottom: 24px;
`;

export const FeatureText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  li {
    margin-bottom: 24px;
    ::marker {
      color: #179c64;
    }
  }
`;
