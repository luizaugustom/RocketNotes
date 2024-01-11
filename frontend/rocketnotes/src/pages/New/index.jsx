import { Container, Form } from "./styles";

import { Header} from "../../components/header/index";
import { Input} from "../../components/input/index";
import { Textarea } from "../../components/textarea/input";
import { NoteItem } from "../../components/noteitem/index";
import { Section } from "../../components/section/index";
import { Button } from "../../components/button/index";

import { Link } from "react-router-dom";

export function New(){
    return(
        <Container>
            <Header/>
        <main>
            <Form>
                <header>
                   <h1>Criar Nota</h1>
                   <Link to="/">Voltar</Link>
                </header>


                <Input placeholder="Título"/>

                <Textarea placeholder="Observações"/>


                <Section  title="Links úteis">
                    <NoteItem value="https://rocketseat.com.br"/>
                    <NoteItem isNew placeholder="Novo link" />
                </Section>
                <Section title="Marcadores">
                    <div className="tags">
                        
                    <NoteItem value="react"/>
                    <NoteItem isNew placeholder="Nova Tag" />
                    </div>
                </Section>

                <Button title="Salvar" />
            </Form>
        </main>

        </Container>


    )
}