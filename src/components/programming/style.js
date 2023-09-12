import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 350px;
  font-weight: 700;

  .carousel {
    margin-bottom: 30px;
  }

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
    /* margin-top: 30px; */
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

  .content {
    display: flex;
    justify-content: flex-start;
  }

  .ao-vivo {
    padding: 2px;
    background: #ff0000;
    font-size: 12px;
    color: #fff;
    border-radius: 3px;
    font-weight: bold;
  }

  .description {
    display: flex;
    flex-direction: column;
  }

  .video {
    background: #7d7d7d;
    width: 26px;
    font-size: 12px;
    text-align: center;
    border-radius: 3px;
    color: #fff;
  }

  .horaBras {
    font-size: 12px;
    color: #7d7d7d;
  }

  @media (max-width: 768px) {
    .content,
    .description {
      flex-direction: column;
      justify-content: flex-start;
      font-size: 14px;
    }

    .program {
      font-size: 14px;
    }
  }
`;
