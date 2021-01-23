import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  border-top: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
  position: relative;
  &::nth-last-child() {
    border-bottom: 8px solid #222;
    position: relative;
  }
`;

export const AnimationCard = styled.div`
  width: 100%;
  height: 100%;
  max-width: 63%;
  max-height: 47%;
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item} :last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;
  &:nth-child(2n) {
    display: flex;
    justify-content: center;
    /* position: relative; */
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    :nth-child(2n) {
      display: flex;
      justify-content: center;
    }
    :nth-child(2n-1) {
      text-align: center;
    }
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 1000px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border: 0;
  z-index: 2;
  &:nth-last-child() {
    position: relative;
  }

  @media (max-width: 1000px) {
  }
`;
