import React from "react";
import { Jumbotron } from "./components/jumbo";

import jumboData from "./fixtures/jumb";

function App({ direction = "row", ...restProps }) {
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
              <Jumbotron.Image
                src={item.image}
                alt={item.alt}
              ></Jumbotron.Image>
            </Jumbotron.Pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
}

export default App;
