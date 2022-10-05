import { createContext, useState } from "react";
import AlertModal, { AlertType } from "../components/alertModal";

const AlertContext = createContext({});
const { Provider } = AlertContext;

export type AlertData = {
    type: AlertType;
    confirmButton: boolean;
    title?: string;
    message?: string;
    content?: string;
    additionalProps?: any;
}

const AlertProvider = ({ children }: { children: any }) => {

    const closedModal = (
        <AlertModal 
        show={false}
        type={AlertType.NONE}
        onClose={()=>{}}
        showSecondaryButton={false}
        />
    );

    const [modal, setModal] = useState(closedModal);

    function createAlert(alertData: AlertData){
        const newModal = (
            <AlertModal
            show={true}
            type={alertData.type}
            onClose={closeAlert}
            title={alertData.title}
            message={alertData.message}
            content={alertData.content}
            {...alertData.additionalProps}
            />
        );
        setModal(newModal);
    }

    function closeAlert(){
        setModal(closedModal);
    }

    return (
        <Provider
            value={{
                createAlert,
                closeAlert
            }}
        >
            {modal}
            {children}
        </Provider>
    );
};

export { AlertContext, AlertProvider };