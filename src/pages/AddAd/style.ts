import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 27px;
    margin: 20px 0;
  }
`;

export const PageArea = styled.div`
  .field_error {
    margin: 10px 0;
  }

  form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0 0 3px #999;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
      margin: 0 auto;
      width: 30%;
    }
  }

  label {
    display: block;
    width: 100%;

    span {
      display: block;
      font-weight: bold;
    }

    input {
      width: 100%;
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
  }

  label + label {
    margin-top: 20px;
  }

  label.check {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    input {
      margin-left: 10px;
      height: 15px;
      width: 20px;
    }
  }

  label.textarea_label {
    height: 170px;

    display: flex;
    flex-direction: column;

    textarea {
      flex: 1;
    }
  }

  button {
    width: 100%;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #0089ff;
    border: 0;
    outline: 0;
    border-radius: 4px;
    font-size: 15px;
    color: #fff;

    transition: 0.4s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
