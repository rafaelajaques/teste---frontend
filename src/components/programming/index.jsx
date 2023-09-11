import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Carousel from "react-elastic-carousel";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { format, addDays } from "date-fns";

const url = "http://localhost:3000/programmes/1337?";

function AoVivo(startTime, endTime) {
  const timestampAtual = Math.floor(Date.now() / 1000);

  if (timestampAtual >= startTime && timestampAtual <= endTime) {
    return "Ao Vivo";
  } else {
    return "";
  }
}

async function Atualizar(dataFormatada) {
  try {
    axios.defaults.baseURL = "http://localhost:3000";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

    const newUrl = `${url}&date=${dataFormatada}`;

    const response = await axios.get(newUrl);

    console.log(response);

    return response;
  } catch (error) {
    console.error("Erro na atualização:", error);
    throw error; // Lança o erro para que possa ser tratado no chamador da função
  }
}

function Programming(props) {
  const [programs, setPrograms] = useState([]);
  const [dados, setDados] = useState(null);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    const dataFormatada = dias[currentPage - 1].dtString;

    Atualizar(dataFormatada)
      .then((response) => {
        setDados(response.data);
        setPrograms(response.data);
        // dados = response.data;
      })
      .catch((error) => {
        // Lide com erros aqui
      });
  }, [currentPage]);

  const dias = [];
  const numDias = 3;

  for (let i = 0; i < numDias; i++) {
    const date = addDays(new Date(), i - 1);
    const formattedDate = format(date, "yyyy-MM-dd"); // Formate a data como "ano-mês-dia"

    dias.push({ id: i + 1, dtString: formattedDate });
  }

  return (
    <div>
      <Container>
        <Carousel
          initialActiveIndex={currentPage - 1}
          onChange={(currentItem, pageIndex) => setCurrentPage(pageIndex + 1)}
        >
          {dias.map((item, index) => (
            <div key={item.id} initialActiveIndex={1}>
              <p>{item.dtString}</p>
            </div>
          ))}
        </Carousel>
        {dados &&
          dados.programme.entries.map((item, index) => (
            <Accordion className="accordion" key={index}>
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
                  <p>
                    {item.human_start_time.substring(0, 8)}{" "}
                    {AoVivo(item.start_time, item.end_time)}
                  </p>
                  <p>{item.title}</p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="content">
                  <img src={item.custom_info.Graficos.ImagemURL} alt="" />
                  <p>
                    Os destaques do dia no Brasil e no mundo, com apresentação
                    de César Tralli.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Container>
    </div>
  );
}

export default Programming;
