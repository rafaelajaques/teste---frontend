import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 350px;
  font-weight: 700;

  .rec.rec-arrow {
    background-color: transparent;
    color: #006497;
    border: none;
  }

  .rec.rec-arrow:disabled {
    border: none;
    color: #bebebf;
  }

  .rec.rec-dot {
    display: none;
  }

  .accordion {
    margin-top: 30px;
  }

  .program {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    img {
      width: 40px;
    }
  }

  .content {
    display: flex;
    gap: 20px;
    align-items: center;

    img {
      width: 300px;
    }
  }
  details: {
    align-items: "center";
    border: "1px solid rgba(0,0,0,0.1)";
    border-radius: 4px;
  }
`;
