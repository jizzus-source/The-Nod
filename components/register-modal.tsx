
import FormInput, { InputTypes } from "./form-input";

import styled from "styled-components";
import RegularButton from "./button";
import TextButton from "./text-button";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Icon from "./icon";
import { ethers, providers } from "ethers";
import {isMetaMaskInstalled, provider} from "./metamask";


interface Props {
    onClickLogin: ({username, email}:{username:string, email:string})=>void;
    onClose: ()=>void;
}

const LoginModalContainer = styled.div`
background-color:black;
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`;

const TitleContainer = styled.div `
    margin: 20px 0 20px 0;
`;

const Title = styled.span ` 
    font-family: quicksand;
    color:white;
    font-size: 50px;
    text-align: center;
`;
const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;
const LoginModalContent = styled.div`
`;

const IconContainer = styled.div`
`;
const MetaIcon = styled(Icon)`
cursor:pointer;
max-width:10vw;`

const LoginModal = (props: Props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    function handleRegister(){
        if(username!="" && email!=""){
            props.onClickLogin({username, email});
        }
    }
    
    console.log(provider())
    return(
        <LoginModalContainer>
            <LoginModalContent>
            <TitleContainer>
                <Title>JOIN NOW</Title>
            </TitleContainer>
            <Form>
                <FormInput value={username} onChange={(value: string)=>setUsername(value)} placeholder="Full Name" type={InputTypes.TEXT} />
                <FormInput value={email} onChange={(value: string)=>setEmail(value)} placeholder="Email" type={InputTypes.TEXT} />
                <RegularButton text="Submit" onClick={handleRegister} />
            </Form>
            </LoginModalContent>
            <IconContainer>
                <MetaIcon name="meta.png"/>
            </IconContainer>
        </LoginModalContainer>
    );
}

export default LoginModal;