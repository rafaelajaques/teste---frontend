import { Container, Logo, Links } from "./style";

function Footer() {
  return (
    <Container>
      <Logo>
        <a href="https://redeglobo.globo.com/">
          
        </a>

        <p>globo</p>
      </Logo>
      <Links>
        <p>© Copyright 2000-2023 Globo Comunicação e Participações S.A.</p>
        <ul>
          <li>
            <a href="">princípios editoriais</a>
          </li>
          <li>
            <a href="">política de privacidade</a>
          </li>
          <li>
            <a href="">minha conta</a>
          </li>
          <li>
            <a href="">anuncie conosco</a>
          </li>
        </ul>
      </Links>
    </Container>
  );
}

export default Footer;
