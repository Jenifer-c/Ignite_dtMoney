import Modal from "react-modal";

type NewTransactionModalPropsType = {
    isOpen: boolean,
    onRequestClose : () => void
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalPropsType) {
    return(
        <Modal
            isOpen         = { isOpen }
            onRequestClose = { onRequestClose }
        >
            <h2>Casdastrar Transação</h2>
        </Modal>
    )
}