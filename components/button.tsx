
import styled from "styled-components";
import Icon from "./icon";

interface Props {
    text: string;
    onClick: ()=>void;
    preIcon?: string;
    disabled?: boolean;
    additionalProps?: {
        width?: string;
    };
}

const ButtonContainer = styled.div.attrs((props: {disabled: boolean, width?: string})=>props)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props=>props.width?props.width:"100%"};
    max-width: 400px;
    font-family: quicksand;
    background-color: ${props=>props.disabled?"grey":"purple"};
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    user-select: none;
    padding: 10px 20px;  
    gap: 10px;
    white-space: nowrap;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const RegularButton = (props: Props) => {

    function handleClick(){
        if(props.disabled){
            return;
        }
        props.onClick();
    }

    return(
        <ButtonContainer width={props.additionalProps?.width} disabled={props.disabled} onClick={handleClick}>
            {props.preIcon?<Icon name={props.preIcon} width={"15px"} />:<></>}
            {props.text}
        </ButtonContainer>
    );
}

export default RegularButton;