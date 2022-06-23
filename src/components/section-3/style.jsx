import styled from 'styled-components';

export const SectionContainer = styled.div`
  //   width: 100%;
  background: linear-gradient(
    100.1deg,
    #132878 -3.95%,
    #03192f 21.83%,
    #021326 98.76%,
    #00460f 103.65%
  );
  padding: 96px 120px;
`;

export const InnerContainer = styled.div`
  height: 587px;
`;

export const Heading = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  color: white;
  align-items: flex-start;
  display: flex;
  margin-top: 0px;
  // margin: 0;
`;

export const ArticleContainer = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  .card-container {
    background: transparent;
    box-shadow: unset;
    color: white;
    .card-content {
      padding: unset;
      .card-heading {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        display: flex;
        padding-top: 24px !important;
      }
      .card-discription {
        margin-top: 26px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        align-content: left;
        text-align: left;
      }
      .card-btn {
        margin-top: 8px;
        text-align: left;
        color: blue;
      }
    }
  }
`;
