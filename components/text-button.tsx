import styled from "styled-components";

interface Props {
    onClick: ()=>void;
    text: string;
}

const  TextButtonContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SmallText = styled.span `
    font-family: quicksand;
    font-size: 20px;
    color: purple;
    user-select: none;
    cursor:pointer;
`;

const TextButton = (props: Props) => {
    return (
        <TextButtonContainer>
            <SmallText onClick={props.onClick}>
                {props.text}
            </SmallText>
        </TextButtonContainer> 
    );
}

export default TextButton;