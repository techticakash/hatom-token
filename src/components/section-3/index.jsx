import {
  ArticleContainer,
  Heading,
  InnerContainer,
  SectionContainer,
} from "./style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import img1 from "./../../assets/resources/anim1.gif";
import img2 from "./../../assets/resources/anim2.gif";
import img3 from "./../../assets/resources/anim3.gif";
export const Articles = () => {
  const articalCount = [1, 2, 3];

  const scriptElement = document.createElement("script");
  scriptElement.src =
    "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";

  document.body.appendChild(scriptElement);
  // const image1= url()
  return (
    <>
      <SectionContainer>
        <InnerContainer>
          <Heading>Understanding Hatom</Heading>
          <ArticleContainer>
            {articalCount.map((c) => (
              <Card
                className="card-container"
                style={{
                  marginRight: `${c === 3 ? "0px" : "36px"}`,
                }}
              >
                <CardMedia
                  component="img"
                  height="315"
                  image={c===1 ? img1 : c===2 ? img2 : img3}
                  alt="green iguana"
                />
                <CardContent className="card-content">
                  <p className="card-heading">
                    {c === 1
                      ? "Get Hatom"
                      : c === 2
                      ? "Benefits of Hatom token"
                      : "White Paper"}
                  </p>
                  <p className="card-discription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    tort dignissim sit .
                  </p>

                  {/* <CardActions style={{color:'blue'}}> */}
                  <p className="card-btn">Learn More </p>
                  {/* </CardActions> */}
                </CardContent>
              </Card>
            ))}
          </ArticleContainer>
        </InnerContainer>
      </SectionContainer>
    </>
  );
};
