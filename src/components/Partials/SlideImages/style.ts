import styled from "styled-components";

interface IContainerProps {
  transformSlide: number;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  position: relative;

  .controls-buttons {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

    > div {
      transition: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      cursor: pointer;

      > svg {
        fill: #ccc;
        width: 25px;
        height: 30px;
        padding: 3px;
        border-radius: 5px;
      }

      &:hover {
        opacity: 1;
      }
    }

    .left {
      position: absolute;

      left: 0;
      width: 15%;
      height: 100%;

      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 1)
      );

      box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.6);
    }

    .right {
      position: absolute;

      right: 0;
      width: 15%;
      height: 100%;

      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 1)
      );

      box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.6);
    }
  }

  .controls-list {
    position: absolute;
    bottom: 8%;
    width: 100%;
    height: 20px;

    display: flex;
    justify-content: center;
    z-index: 1000;

    ul {
      width: 60%;
      height: 100%;

      display: flex;
      justify-content: center;

      li {
        margin: 0 5px;
        border-radius: 25%;
        width: 20px;
        height: 10px;
        border: 1px solid #ccc;
        background-color: #000;
        cursor: pointer;
        opacity: 0.5;

        transition: 0.4s;

        &:hover,
        &.active {
          background-color: #ccc;
          transform: scale(1.2);
          opacity: 1;
        }
      }
    }
  }

  .slide-area {
    display: flex;

    transition: 0.4s;
    transform: translateX(${(props) => -(props.transformSlide * 100)}%);
  }

  .img-item {
    flex-shrink: 0;
    width: 100%;
    max-height: 500px;
    /* z-index: 1000; */

    img {
      max-width: 100%;
      /* object-fit: cover; */
      background-size: cover;
    }
  }
`;
