import logoImg from '../../assets/logo.svg'
import {Container, Content} from './styles';

type HeaderPropsType = {
    onOpenNewTransactionModal: () => void
}


export function Header({onOpenNewTransactionModal} : HeaderPropsType) {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal} >
                    Nova transação
                </button>
            </Content>    
        </Container>
    )
}