import styled from "styled-components";

export const Container = styled.label`
  display: block;
  width: 100%;

  span {
    display: block;
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 100%;
    font-size: 14px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    outline: none;

    background: #fff;
    transition: 0.4s;

    &:focus {
      border-color: #333;
      color: #333;
    }
  }
`;
