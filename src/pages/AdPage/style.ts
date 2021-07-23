import styled from "styled-components";

interface IFakeProps {
  height: number;
}

export const Fake = styled.div<IFakeProps>`
  background-color: #ddd;

  height: ${(props) => props.height || 20}px;
`;

export const Container = styled.section`
  .ad_container {
    margin-top: 20px;

    display: grid;
    grid-template-columns: 80% 20%;
    gap: 10px;
  }

  .box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    /* margin-bottom: 10px; */
  }

  .box--padding {
    padding: 10px;
  }

  .sideLeft {
    .box {
      display: flex;
    }

    .adImage {
      border-radius: 5px 0 0 5px;

      width: 320px;
      height: 320px;
      overflow: hidden;

      border-right: 1px solid #ccc;
    }

    .adInfo {
      flex: 1;
      padding: 10px;

      display: flex;
      flex-direction: column;

      .adName {
        margin-bottom: 20px;
      }

      .adDescription {
        flex: 1;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > p {
          flex: 1;
        }

        hr {
          margin: 10px 0;
        }

        span {
          font-weight: bold;
        }

        > div {
          width: 100%;
          justify-self: flex-end;
        }
      }
    }
  }

  .sideRight {
    .box + .box {
      margin-top: 20px;
    }

    .price {
      span {
        color: #0000ff;
        display: block;
        font-size: 27px;
        font-weight: bold;
      }
    }

    .contact_link {
      background-color: #0000ff;
      color: #fff;
      height: 30px;
      border-radius: 5px;
      box-shadow: 0px 0px 4px #999;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;

      transition: 0.4s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    .created-by {
      strong {
        display: block;
        width: 100%;
      }

      small {
        display: block;
        color: #999;
        margin-top: 10px;
      }
    }
  }
`;
