import styled from "styled-components";

interface IFakeProps {
  height: number;
}

export const Fake = styled.div<IFakeProps>`
  background-color: #ddd;
  height: ${(props) => props.height || 20}px;
`;

export const Container = styled.section`
  margin-top: 20px;

  .ad_container {
    display: grid;
    grid-template-columns: 1fr 250px;
    gap: 10px;
  }

  .box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    /* margin-bottom: 10px; */
  }

  .sideLeft {
    .adImage {
    }

    .adInfo {
      padding: 10px;

      .adName {
        margin-bottom: 20px;
      }

      .adDescription {
      }
    }
  }

  .rightSide {
  }
`;
