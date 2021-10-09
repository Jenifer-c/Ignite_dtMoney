import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

type NewTransactionModalPropsType = {
    isOpen: boolean,
    onRequestClose : () => void
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalPropsType) {
    return(
        <Modal
            isOpen           = { isOpen }
            onRequestClose   = { onRequestClose }
            overlayClassName = "react-modal-overlay"
            className        = "react-modal-content"
        >
            <button type      = "button"
                    onClick   = {onRequestClose}
                    className = "react-modal-close"
            >
                <img src = {closeImg} alt = "Fechar Modal" />
            </button>
            
            <Container>
                <h2>Casdastrar Transação</h2>

                <input 
                    placeholder = "Título"
                />
                
                <input 
                    type        = "number"
                    placeholder = "Valor"
                />

                    <TransactionTypeContainer>
                        <button
                            type = "button"
                        >
                            <img src = { incomeImg } alt = "Entrada" />
                            <span>Entrada</span>
                        </button>

                        <button
                            type = "button"
                        >
                            <img src = { outcomeImg } alt = "Saída" />
                            <span>Saída</span>
                        </button>
                    </TransactionTypeContainer>

                <input 
                    placeholder = "Categoria"
                />

                <button type = "submit">
                    Cadastrar
                </button>
            </Container>    
        </Modal>
    )
}