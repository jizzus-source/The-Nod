import styled from 'styled-components';
import { useEffect, useRef } from "react";

export interface InputSelectOption {
    id: number | string;
    data: string;
}

export enum InputTypes {
    SELECT = "select",
    NUMBER = "number",
    TEXT = "text",
    PASSWORD = "password"
}

interface Props {
    placeholder: string;
    type: InputTypes;
    value: string;
    onChange?: (value: string, id?: number | string) => void;
    options?: InputSelectOption[];
    readOnly?: boolean;
    additionalProps?: {
        width?: string;
        minWidth?: string;
        position?: string;
        top?: string;
        left?: string;
    }
    idWidthData?: boolean;
    onPressEnter?: (value: string) => void;
    inputLimit?: number;
    hideLabel?: boolean
}

const Input = styled.input`
    outline: none;
    border: none;
    width: 90%;
    background: transparent;
    color:white;
`;

const Label = styled.label`
    position: absolute;
    font-size: 20px;
    top: -20px;
    background: transparent;
`;

const InputContainer = styled.div.attrs((props: { width: string, minWidth: string }) => props)`
    background: transparent;
    height: 35px;
    width: ${props => props.width ? props.width : "100%"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0px;
    box-sizing: border-box;
    position: relative;
    min-width: ${props => props.minWidth ? props.minWidth : "200px"};
    &:focus-within {
        border-bottom: 1px solid #73e637;
        ${Label}{
            color: #73e637;
        }
    }
`;

const Select = styled.select`
    width: 100%;
    border: none;
    outline: none;
    margin-right: 10px;
    background: transparent;
`;

const Option = styled.option``;

const FormInput = (props: Props) => {

    const val = useRef<string>(props.value);

    useEffect(() => {
        if (props.onPressEnter) {
            const keyDownHandler = (event: any) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    props.onPressEnter?.(val.current);
                }
            };
            document.addEventListener('keydown', keyDownHandler);
            return () => {
                document.removeEventListener('keydown', keyDownHandler);
            };
        }
    }, []);

    function handleChangeSelect(value: string, id: string | number) {
        props.onChange?.(value, id);
    }

    function handleChangeInput(value: string) {
        val.current = value;
        props.onChange?.(value);
    }

    return (
        <InputContainer
            width={props.additionalProps?.width}
            minWidth={props.additionalProps?.minWidth}
        >
            {props.hideLabel?<></>:<Label>{props.placeholder}</Label>}
            {props.type === "select" ?
                <Select defaultValue={props.value} disabled={props.readOnly} onChange={(e: any) => handleChangeSelect(e.target.options[e.target.selectedIndex].text, e.target.value)}>
                    {props.options?.map(item => {
                        return <Option key={props.idWidthData ? `${item.id} ${item.data}` : item.id} value={item.id}>{props.idWidthData ? `${item.id} ${item.data}` : item.data}</Option>
                    })}
                </Select>
                :
                <Input maxLength={props.inputLimit??99999999} readOnly={props.readOnly} value={props.value} onChange={(e: any) => handleChangeInput(e.target.value)} placeholder={props.placeholder} type={props.type} />
            }
        </InputContainer>
    );
}

export default FormInput;