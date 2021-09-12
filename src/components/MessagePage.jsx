import { Button } from './styled-components/index'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
  width: 21rem;
  margin: 0 auto;
  align-items: center;

  h1, h2, h3 {
    text-align: center;
  }

  button {
    margin: 0 auto;
    width: 50%;
  }
`

export default function MessagePage() {
  const history = useHistory();
  return (
    <Div>
      <h1>Cadastrado com sucesso</h1>
      <h2>Obrigado !</h2>
      <h3>{`${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`}</h3>
      <Button onClick={() => history.push("/")}>Voltar</Button>
    </Div>
  )

}