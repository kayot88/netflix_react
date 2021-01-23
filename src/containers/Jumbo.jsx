import React from "react";
import { Jumbotron } from "../components";

import jumboData from "../fixtures/jumb";

function Jumbo({ direction = "row", ...restProps }) {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        console.log(item.direction);
        return (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              {/* <Jumbotron.AnimationCard> */}
                <Jumbotron.Image
                  src={item.image}
                  alt={item.alt}
                ><div></div></Jumbotron.Image>
              {/* </Jumbotron.AnimationCard> */}
            </Jumbotron.Pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
}

export default Jumbo;
