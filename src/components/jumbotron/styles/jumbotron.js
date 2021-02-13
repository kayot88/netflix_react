import styled from 'styled-components/macro';
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
export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  @media (max-width: 1000px) {
    ${Item} :last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const AnimationCard1 = styled.div`
  width: 100%;
  height: 100%;
  max-width: 73%;
  max-height: 54%;
  position: absolute;
  top: 46%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  
`;
export const AnimationCard2 = styled.div`
  width: 100%;
  height: 100%;
  max-width: 63%;
  max-height: 47%;
  position: absolute;
  top: 34%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
export const Pane = styled.div`
  width: 50%;
  &:nth-child(2n) {
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;
`;

export const Image1 = styled.img`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  height: auto;
  border: 0;
  z-index: 2;

  /* height: 398px; */
`;
