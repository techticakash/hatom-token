import { Paper } from "@mui/material";
import styled from "styled-components";
import Image from "../../assets/resources/assets-per-section/section1/bg.svg";
import Image2 from "../../assets/resources/assets-per-section/section1/people.svg";
import Image3 from "../../assets/resources/assets-per-section/section1/bubbleanimation.gif";

const imgUrl = `url(${Image})`;
// const imgUrl1 = `url(${Image1})`;
const imgUrl2 = `url(${Image2})`;
const bubbleanimation = `url(${Image3})`;

export const ContainerImage = styled(Paper)`
  margin: auto;
  height: 100vh;
  width: auto;
  // max-width: 1512px;
  // max-height: 1127px;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom, center, center;
  background-size: contain, cover, cover;
  background-image: ${imgUrl2}, ${bubbleanimation}, ${imgUrl};
`;
export const Coin = styled.div`
  display: inline-block;
  position: relative;
  top: 200px;
  left: 43px;
  opacity: 0.9;
  transition: all 1s ease-in-out;
  &:hover {
    transform: rotate(180deg);
    ::after {
      transform: rotate(-180deg);
    }
  }
`;

export const AppBtn = styled.button`
  padding: 10px 26px 13px 27px;
  color: #ffffff;
  background: linear-gradient(
    93.58deg,
    rgba(0, 77, 0, 0.33) 7.62%,
    rgba(1, 48, 30, 0.33) 104.97%
  ) !important;
  border-radius: 4px;
  border: 2px solid transparent;
  border-image: linear-gradient(93.58deg, #2d3880 20.62%, #004d00 50.97%);
  border-image-slice: 1;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.09em;
`;

export const NavbarLink = styled.span`
  .linktext {
    color: #3555f7;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    border-bottom: 2px solid #102860;
    padding-bottom: 4px;
  }
  .css-ptiqhd-MuiSvgIcon-root {
    color: #00d395;
    border: 1.5px solid rgba(0, 211, 149, 0.43);
    background: rgba(0, 211, 149, 0.43);
    border-radius: 50%;
    position: relative;
    width: 5px;
    height: 5px;
    top: -8px;
    left: 4px;
  }
`;
export const Tagline = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #3d906a;
  margin-top: 7px;
`;
