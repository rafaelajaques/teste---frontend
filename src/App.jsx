import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/footer";
import Header from "./components/header";
import Programming from "./components/programming";

const url = "http://localhost:3000/programmes/1337?date=2023-09-10";

function App() {
  const [programs, setPrograms] = useState([]);
  const [dados, setDados] = useState(null); // Initialize dados state

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.baseURL = "http://localhost:3000";
        axios.defaults.headers.post["Content-Type"] =
          "application/json;charset=utf-8";
        axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

        const response = await axios.get(url);

        // Update the dados state with the response data
        setDados(response.data);
        // setPrograms(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {/* Pass the dados state as a prop */}
      <Programming data={dados} />
      <Footer />
    </>
  );
}

export default App;
