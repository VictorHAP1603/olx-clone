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
    grid-template-columns: auto 250px;
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
    .adImage {
      width: 100%;
      overflow-x: hidden;
    }

    .adInfo {
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
