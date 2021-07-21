import styled from "styled-components";

export const Container = styled.div``;

export const SearchArea = styled.div`
  background-color: #ddd;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;

  .searchBox {
    background-color: #9bbb3c;
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);

    display: flex;

    form {
      flex: 1;
      display: flex;

      input,
      select {
        border: 0;
        border-radius: 5px;
        outline: 0;
        font-size: 15px;
        color: #000;
        margin-right: 20px;
      }

      .input_label {
        flex: 1;
        padding: 0 10px;
      }

      .select_label {
        width: 100px;
        margin-right: 20px;
      }

      button {
        background-color: #49aeef;
        color: #fff;
      }
    }
  }

  .categoryList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
  }
`;

export const PageArea = styled.div`
  h2 {
    font-size: 20px;
    margin: 15px 0;
  }

  .list-ads {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      width: 23%;
      height: auto;

      margin-bottom: 15px;
      border-radius: 5px;
      border: 1px solid #ccc;

      transition: all 0.4s;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 12px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }

  .seAllLink {
    background-color: #9bbb3c;
    padding: 10px 15px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin: 10px 0;
    border-radius: 5px;
    transition: all 0.4s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
