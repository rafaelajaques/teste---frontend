import { Container, Navigation, Menu } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Logo from "../../assets/logo-novo-barra.png";

function Header() {
  return (
    <Container>
      <Navigation>
        <ul>
          <li>
            <a
              href="https://www.globo.com/"
              target="_blank"
              id="globo-com"
              rel="noreferrer"
            >
              globo.com
            </a>
          </li>
          <li>
            <a
              href="https://g1.globo.com/"
              target="_blank"
              id="g1"
              rel="noreferrer"
            >
              g1
            </a>
          </li>
          <li>
            <a
              href="https://ge.globo.com/"
              target="_blank"
              id="ge"
              rel="noreferrer"
            >
              ge
            </a>
          </li>
          <li>
            <a
              href="https://gshow.globo.com/"
              target="_blank"
              id="gshow"
              rel="noreferrer"
            >
              gshow
            </a>
          </li>
          <li>
            <a
              href="https://globoplay.globo.com/"
              target="_blank"
              id="globoplay"
              rel="noreferrer"
            >
              globoplay
            </a>
          </li>
          <li>
            <a href="https://redeglobo.globo.com/">
              <img className="logo-globo" src={Logo} alt="logo-globo" />
            </a>
          </li>
        </ul>
        <div>
          <a href="#">Assine Já</a>
          <button className="login">Entrar</button>
        </div>
      </Navigation>
      <Menu>
        <div className="menu">
          <AiOutlineMenu />
          <h2>MENU</h2>
        </div>
        <div className="rpc">
          <a href="https://redeglobo.globo.com/rpc/">RPC</a>
          <a href="https://redeglobo.globo.com/rpc/" className="rpc-image">
            <img src="/rpc.webp" />
          </a>
        </div>
        <div className="search">
          <BiSearch />
          <input type="text" placeholder="BUSCAR" />
        </div>
      </Menu>
    </Container>
  );
}

export default Header;
