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
    }

    .adInfo {
      flex: 1;
      padding: 10px;

      .adName {
        margin-bottom: 20px;
      }

      .adDescription {
        hr {
          margin: 10px 0;
        }

        span {
          font-weight: bold;
        }
      }
    }
  }

  .sideRight {
    .box + .box {
      margin-top: 20px;
    }
  }
`;
