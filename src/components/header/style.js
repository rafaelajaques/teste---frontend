import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 120px;
  position: sticky;
`;

export const Navigation = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f3f3f3;

  ul {
    list-style: none;
    font-size: 16px;
    display: flex;
    gap: 10px;
    padding: 0;

    a {
      position: relative;
      text-decoration: none;
      font-weight: 700;
      padding-top: 9px;
      /* margin-right: 5px; */

      img {
        width: 40px;
      }
    }

    #globo-com {
      color: #5aa2eb;
      &::after {
        content: "";
        position: absolute;
        height: 10px;
        width: 1px;
        background: #dcdcdc;
        margin: 0 5px;
        margin-top: 5px;
      }

      &:hover {
        border-top: 3px solid #5aa2eb;
      }
    }

    #g1 {
      color: #a80000;

      &::after {
        content: "";
        position: absolute;
        height: 10px;
        width: 1px;
        background: #dcdcdc;
        margin: 0 5px;
        margin-top: 5px;
      }

      &:hover {
        border-top: 3px solid #a80000;
      }
    }

    #ge {
      color: #3e831e;
      &:hover {
        border-top: 3px solid #3e831e;
      }

      &::after {
        content: "";
        position: absolute;
        height: 10px;
        width: 1px;
        background: #dcdcdc;
        margin: 0 5px;
        margin-top: 5px;
      }
    }

    #gshow {
      color: #ff7f00;
      &::after {
        content: "";
        position: absolute;
        height: 10px;
        width: 1px;
        background: #dcdcdc;
        margin: 0 5px;
        margin-top: 5px;
      }
      &:hover {
        border-top: 3px solid #ff7f00;
      }
    }

    #globoplay {
      color: #ee2033;
      &:hover {
        border-top: 3px solid #ee2033;
      }
    }
  }

  div {
    width: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;

    a {
      color: #989a91;
      &:hover {
        color: #006497;
      }
    }

    button {
      text-transform: uppercase;
      padding: 5px;
      font-size: 14px;
      color: #696969;
      border: 1px solid #989a91;
      border-radius: 5px;
      &:hover {
        color: #006497;
        background: #fff;
      }
    }
  }
`;

export const Menu = styled.div`
  height: 70px;
  background: #006497;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  .menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    cursor: pointer;

    h2 {
      font-size: 16px;
    }
  }

  .rpc {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    font-size: 30px;

    a {
      color: #fff;
    }
  }

  .search {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    border: 1px solid #005580;
    border-radius: 5px;
    background: #005580;
    font-size: 24px;
    padding: 5px;

    input {
      height: 25px;
      width: 150px;
      background: transparent;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      border: none;

      &::placeholder {
        color: #fff;
      }
    }
  }
`;
