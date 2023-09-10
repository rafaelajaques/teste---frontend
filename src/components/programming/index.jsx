/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
// import Container from "./style";
import { Container } from "./style";
import Carousel from "react-elastic-carousel";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Programming(props) {
  const dataList = props.data;
  debugger;
  return (
    <Container>
      <Carousel>
        <div>
          <p>SEX, 08 DE SETEMBRO</p>
        </div>
        <div>
          <p>SÁB, 09 DE SETEMBRO</p>
        </div>
        <div>
          <p>DOM, 10 DE SETEMBRO</p>
        </div>
        {/* {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))} */}
      </Carousel>
      {dataList &&
        dataList.programme.entries.map((item, index) => (
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="program">
                <img
                  src={item.custom_info.Graficos.LogoURL}
                  alt="Logo do Jornal Hoje"
                />
                <p>13:25</p>
                <p>{item.title}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="content">
                <img src={item.custom_info.Graficos.ImagemURL} alt="" />
                <p>
                  Os destaques do dia no Brasil e no mundo, com apresentação de
                  César Tralli.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </Container>
  );
}

export default Programming;
