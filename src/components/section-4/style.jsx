import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 150px 122px;
`;

export const InnerContainer = styled.div`
  //   height: 587px;
  //   border: 1px solid black;
`;

export const Heading = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  color: black;
  align-items: flex-start;
  display: flex;
  margin: 0px;
`;

export const CompanyContainer = styled.div`
  display: flex;
  margin-top: 96px;
  justify-content: space-between;
  .first-company {
    margin-right: 51px;
  }
`;

export const CompanyBox = styled.div`
  background: #eff3f9;
  padding: 32px;
  .company-logo {
    // width: 269px !important;
    // height: 88px !important;
    display: flex
  }
  .card-btn {
    text-align: left;
    color: blue;
  }
`;

export const CompanyName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  display: flex;
`;

export const CompanyDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
`;

export const FeedbackContainer = styled.div`
  margin-top: 80px;
  background: linear-gradient(89.89deg, #EFF3F9 -0.12%, rgba(239, 243, 249, 0) 95.76%);
  margin-right: 249px;
  padding: 52px 64px;
`;

export const Linier = styled.div`
border: 2.91px solid;
height: 208px;
border-image-source: linear-gradient(101.07deg, rgba(4, 61, 74, 0) 18.13%, #03482B 35.62%, #052784 52.47%, rgba(5, 39, 132, 0) 76.83%);
`;

export const Text = styled.p`
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 38px;
text-align: left;
`;

export const FeddbackBy = styled.p`
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 38px;
text-align: left;
color: #173068;
`;