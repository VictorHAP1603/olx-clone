import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 25%;

  a {
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
    height: 50px;
    margin-bottom: 10px;

    img {
      width: 45px;
      height: 45px;
      margin-right: 10px;
    }

    &:hover {
      color: #999;

      span {
        transition: 0.4s;
        color: #999;
      }
    }
  }
`;
