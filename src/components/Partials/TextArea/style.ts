import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    display: block;
    font-weight: bold;
  }

  textarea {
    flex: 1;

    display: block;
    width: 100%;
    font-size: 14px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    outline: none;

    background: #fff;
    transition: 0.4s;

    resize: none;

    &:focus {
      border-color: #333;
      color: #333;
    }
  }
`;
