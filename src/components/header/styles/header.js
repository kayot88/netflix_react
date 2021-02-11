import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${(props) =>
      props.src
        ? `../images/misc/${props.src}.jpg`
        : '../images/misc/home-bg.jpg'})
    top left / cover no-repeat;
  @media (max-width: 600px) {
    background: none;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${(props) => (props.active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
export const Group = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Picture = styled.img`
  background: ${({ src }) => src};
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;
  display: none;

  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    &:first-of-type > ${Picture} {
      margin-right: 10px;
    }
    ${Link}, ${Picture} {
      cursor: default;
    }
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  /* @media (min-width: 700px) {
    display: none;
  } */
`;
export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  background: cover;
  border: 0;
  outline: 0;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
  &:hover {
    border: none;
  }
`;
export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${(props) => (props.active ? '10px' : '0')};
  width: ${(props) => (props.active ? '200px' : '0')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  padding: ${(props) => (props.active ? '0 10px' : '0')};
`;

export const Container = styled.div`
  display: flex;
  margin: 0 3.5rem;
  height: 4rem;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  position: relative;
  direction: column;
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 300px) {
   display: none;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
