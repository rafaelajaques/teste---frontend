import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  /* height: 100px; */
  padding: 15px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #fff;
  background: #006497;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Links = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 15px;

    a {
      position: relative;
      color: #fff;

      &::after {
        content: "";
        position: absolute;
        height: 10px;
        width: 1px;
        background: #dcdcdc;
        margin: 0 7px;
        margin-top: 3px;
      }
    }
  }
`;
