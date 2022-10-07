
import FormInput, { InputTypes } from "./form-input";

import styled from "styled-components";
import RegularButton from "./button";
import TextButton from "./text-button";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Icon from "./icon";
import { ethers, providers } from "ethers";
import {ethAccount, isMetaMaskInstalled, provider} from "./metamask";


interface Props {
    onClickLogin: ({username, email}:{username:string, email:string})=>void;
    onClose: ()=>void;
}

const LoginModalContainer = styled.div`
background-color:transparent;
display: flex;
flex-direction: row;
align-items: center;

`;

const TitleContainer = styled.div `
    margin: 20px 0 40px 0;
    min-width:20vw;
    
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
display: flex;
flex-direction: column;
align-items: center;
margin-left:20px;
`;

const IconContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:10px;
`;
const MetaIcon = styled(Icon)`
cursor:pointer;
max-width:15vw;`;

const RegisterIcon = styled(Icon)`
width:100%;
`;
const RegisterIconContainer = styled.div`
width:15vw;
`;
const FormContainer = styled.div`
display: flex;
flex-direction: row;

`
const LoginModal = (props: Props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [wallet, setWallet]= useState("");

    async function handleWalletRegister(){
        provider();
    }

    function handleRegister(){
        if(username!="" && email!=""){
            props.onClickLogin({username, email});
        }
    }
    
    return(
        <LoginModalContainer>
            <RegisterIconContainer>
                <RegisterIcon  name="register-picture.png" />
            </RegisterIconContainer>
            <LoginModalContent>
            <TitleContainer>
                <Title>JOIN NOW</Title>
            </TitleContainer>
            <Form>
                <FormInput value={username} onChange={(value: string)=>setUsername(value)} placeholder="Full Name" type={InputTypes.TEXT} />
                <FormInput value={email} onChange={(value: string)=>setEmail(value)} placeholder="Email" type={InputTypes.TEXT} />
                <FormContainer>
                <FormInput value={country} onChange={(value: string)=>setCountry(value)} placeholder="Country" type={InputTypes.TEXT} />
                <FormInput value={phone} onChange={(value: string)=>setPhone(value)} placeholder="Phone" type={InputTypes.TEXT} />
                </FormContainer>
                <IconContainer>
                <MetaIcon name="meta.png" onClick={handleWalletRegister} />
                <RegularButton text="Submit" onClick={handleRegister} />
                </IconContainer>
            </Form>
            </LoginModalContent>
        </LoginModalContainer>
    );
}

export default LoginModal;