import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;

  .container {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;

    span {
      font-size: 27px;
      font-weight: bold;
    }

    .logo-1 {
      color: #ff0000;
    }

    .logo-2 {
      color: #00ff00;
    }

    .logo-3 {
      color: #0000ff;
    }
  }

  nav {
    ul {
      display: flex;
      align-items: center;

      height: 100%;
    }

    li:not(.button) {
      height: 100%;

      a {
        min-width: 50px;
        margin: 0 20px;
        display: inline-block;

        height: 100%;
        padding: 10px 0;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #000;
        font-size: 14px;

        position: relative;

        &:after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background-color: #000;

          transition: 0.5s;
        }

        &:hover:after {
          width: 100%;
        }
      }
    }

    li.button {
      height: 100%;
      display: flex;
      align-items: center;
      a {
        background-color: #ff8100;
        border-radius: 4px;
        color: #fff;
        padding: 5px 10px;
        margin: auto 0;

        transition: all 0.4s;
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
