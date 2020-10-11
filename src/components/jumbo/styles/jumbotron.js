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
  border-bottom: 2px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
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
  :nth-child(2n) {
    display: flex;
    justify-content: center;
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

  @media (max-width: 1000px) {
  }
`;
