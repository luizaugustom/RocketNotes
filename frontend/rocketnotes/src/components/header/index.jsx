import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri';




export function Header() {

    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/rodrigorgtic.png"
                alt="Foto do usuário"/>

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Rodrigo Gonçalves</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );

}