import { useState } from 'react'
import { Container, Form } from './styles'
import { Header } from '../components/header'


export function Home() {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    function handle(){
       if(!email || !password){
       return alert("Preencha todos os campos");
       }
    }

    return(
        
        <Container>
            <Header/>

        <Form>
            <h1>Autenticação</h1>

            <span>Email</span>
            <input
            type="text"
            onChange={e => setEmail(e.target.value)}
            />

            <span>Senha</span>
            <input 
            type="password"
            onChange={e => setpassword(e.target.value)}
             />

            <button onClick={handle}>Entrar</button>
        </Form>
    
        </Container>
         
       
      
    )
}