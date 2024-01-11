import { Container, Links, Content } from "./styles";

import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Section } from '../../components/section';
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/buttontext";


export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>

      <ButtonText title="Excluir Nota"/>

      <h1>
        Introdução ao React
      </h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores et voluptatibus consectetur ducimus explicabo ut eum ipsa modi corrupti, quasi iste necessitatibus dicta! Illo excepturi totam, nihil nisi facilis nulla!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate saepe hic doloribus eum cumque voluptatibus necessitatibus, quis molestias mollitia nobis ducimus modi minus, aut repudiandae? Sunt ipsa minima aliquam velit?</p>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>

      <Button title="Voltar" />
      </Content>
      </main>
    </Container>
  )
}