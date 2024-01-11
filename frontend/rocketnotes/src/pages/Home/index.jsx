import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { FiPlus , FiSearch } from 'react-icons/fi';


import { Header} from '../../components/header';
import { ButtonText } from '../../components/buttontext';
import { Input } from '../../components/input';
import { Section } from '../../components/section';
import { Note } from '../../components/note';

import { Link } from 'react-router-dom';

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            <Menu>
            <li><ButtonText title="Todos" $isactive/></li>
            <li><ButtonText title="React"/></li>
            <li><ButtonText title="NodeJs"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo Titulo" icon={FiSearch} />
            </Search>

            <Content>
                <Section title={"Minhas Notas"}>
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name:'rocketseat'}
                        ]
                        }}/>
                </Section>
            </Content>


            <NewNote to="/new">
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>

    )
}