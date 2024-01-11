import { Container ,Form , Background } from "./styles";
import { Input } from '../../components/input/index'
import { Button } from '../../components/button/index'

import { FiUser,FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export function SignUp(){
    return(
        <Container>
                <Background/>
            <Form>
                <h1> Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis </p>
                <h2>Crie sua Conta</h2>

                <Input placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                 <Input placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />
                 
                <Button title="Cadastrar" /> 

                <Link to="/signin"> Voltar para o login </Link>
            </Form>


        </Container>
    )
}