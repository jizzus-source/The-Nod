import { ReactNode } from "react";
import styled from "styled-components";

import Icon from "./icon";
import RegularButton from "./button";
import TextButton from "./text-button";

type Props = {
    show: boolean;
    type: AlertType;
    onClose: ()=>void;
    showSecondaryButton?: boolean;
    title?: string;
    message?: string;
    content?: any;
    hideCloseButton?: boolean;
    customMainButton?: {
        text?: string;
        component?: ReactNode [] ;
        action?: () => void;
    }
    width?: string;
    customSecondaryButton?: {
        text?: string;
        component?: Element;
        action?: () => void;
    }
};

export enum AlertType {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE",
    CUSTOM = "CUSTOM",
    NONE = "NONE"
};

const MainScreenContainer = styled.div.attrs((props: {show: boolean})=>props)`
    flex: 1;
    backdrop-filter: blur(2px);
    display: ${props=>props.show?"flex":"none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #00000094;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 90;
`;
const ModalContainer = styled.div.attrs((props: {width: string})=>props) `
    width: ${props=>props.width?props.width:"30%"};
    height: fit-content;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: white;
    align-items: center;
    text-align: left;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px 20px;
    gap: 20px;
`;
const ModalRegisterContainer = styled.div.attrs((props: {width: string})=>props) `
width: ${props=>props.width?props.width:"50vw"};
height: fit-content;
display: flex;
flex-direction: column;
border-radius: 5px;
background-color:#333333;
align-items: center;
text-align: left;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 10px 10px;
`;
const IconContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;
const TitleContainer = styled.div `
    margin: 20px 0 20px 0;
`;

const Title = styled.span ` 
    font-family: quicksand;
    color:black;
    font-size: 50px;
    text-align: center;
`;

const MessageContainer = styled.div`
    color: black;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;



const AlertModal = (props: Props) => {
    function renderModalByType(){
        switch(props.type){
            case AlertType.SUCCESS: {
                return (
                    <ModalContainer>
                        {props.hideCloseButton?
                        <></>
                        :
                        <IconContainer>
                                <Icon  onClick={props.onClose} width={"10px"} name={"close.svg"} /*className={"close.svg"}*/ />
                        </IconContainer>
                        }
                        <Icon name={"check"} width={"40px"} />
                        {props.title?
                        <TitleContainer>
                            <Title>{props.title}</Title>
                        </TitleContainer>
                        :
                        <></>
                        }
                        {props.message?
                        <MessageContainer>
                            {props.message}
                        </MessageContainer>
                        :
                        <></>
                        }
                        {props.customMainButton?.component?
                        <div onClick={props.customMainButton.action}>{props.customMainButton.component}</div>
                        :
                        <RegularButton text="Listo" onClick={()=>{props.onClose(); props.customMainButton?.action?.();}}/>
                        }
                        
                    </ModalContainer>
                );
            }
            case AlertType.FAILURE: {
                return (
                    <ModalContainer>
                        {props.hideCloseButton?
                        <></>
                        :
                        <IconContainer>
                                <Icon  onClick={props.onClose} width={"10px"} name={"close.svg"} className={"close.svg"} />
                        </IconContainer>
                        }
                        <Icon name={"error"} width={"40px"} />
                        {props.title?
                        <TitleContainer>
                            <Title>{props.title}</Title>
                        </TitleContainer>
                        :
                        <></>
                        }
                        {props.message?
                        <MessageContainer>
                            {props.message}
                        </MessageContainer>
                        :
                        <></>
                        }
                        {props.customMainButton?.component?
                        <div onClick={props.customMainButton.action}>{props.customMainButton.component}</div>
                        :
                        <RegularButton text={props.customMainButton?.text??"Listo"} onClick={()=>{props.onClose(); props.customMainButton?.action?.();}}/>
                        }
                        {props.showSecondaryButton?
                            <TextButton text={props.customSecondaryButton?.text??""} onClick={()=>props.customSecondaryButton?.action?.()} />
                            :
                            <></>
                        }
                    </ModalContainer>
                );
            }
            case AlertType.CUSTOM: {
                return (
                    <ModalRegisterContainer width={props.width}>
                        {props.hideCloseButton?
                        <></>
                        :
                        <IconContainer>
                                <Icon onClick={props.onClose} width={"10px"} name={"close.svg"} className={"close.svg"} />
                        </IconContainer>
                        }
                        {props.content?
                        <>
                        {props.content}
                        </>
                        :
                        <></>
                        }
                    </ModalRegisterContainer>
                );
            }
            case AlertType.NONE: {
                return(<></>);
            }
            default: {
                return(<></>);
            }
        }
    }

    return (
        <MainScreenContainer show={props.show}>
            {renderModalByType()}
        </MainScreenContainer>
    );
}

export default AlertModal;