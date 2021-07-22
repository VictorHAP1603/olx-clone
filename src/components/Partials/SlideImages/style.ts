import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;

  .img-item {
    flex-shrink: 0;
    width: 100%;
    max-height: 500px;

    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
