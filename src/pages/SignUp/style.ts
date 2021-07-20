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

  label + label {
    margin-top: 20px;
  }

  label.check {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;
    cursor: pointer;

    input {
      flex: 0.1;
      margin-left: 10px;
    }
  }

  button {
    width: 100%;
    margin-top: 20px;
    background-color: #0089ff;

    font-size: 15px;
    color: #fff;
  }
`;
