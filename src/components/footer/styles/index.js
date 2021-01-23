import styled from "styled-components";

export const Container = styled.div`
  min-width: 190px;
  width: 100%;
  padding-bottom: 20px;
  font-size: 1em;
  color: #757575;
  position: relative;
  margin-top: 0;
  /* display: flex;
  flex-direction: column;
  padding: 70px 56px;
  max-width: 1000px;
  margin: auto;
  border-bottom: 2px solid white;
  margin-top: 10px; */
  direction: ltr;
  @media only screen and (max-width: 740px) {
    background-color: #000;
    color: #fff;
  background: rgba(0, 0, 0, 0.75);
  }
  /* background: #f3f3f3; */
  @media only screen and (min-width: 740px) {
    background-color: #000;
    color: #fff;
  }
  /* @media (max-width: 1000px) {
    padding: 70px 38px;
    border-bottom: 2px solid #222;
  } */
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;

export const Link = styled.a`
  color: #757575;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: justify;
`;












