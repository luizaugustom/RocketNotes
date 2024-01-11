import { Container ,Form , Background } from "./styles";
import { Input } from '../../components/input/index';
import { Button } from '../../components/button/index';

import { FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1> Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis </p>
                <h2>Faça seu login</h2>

                <Input placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                 <Input placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />
                 
                <Button title="Entrar" /> 

                <Link to="/register"> Criar Conta </Link>
            </Form>

            <Background/>

        </Container>
    )
}