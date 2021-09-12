import styled from 'styled-components'

const Div = styled.div`
  background-image: url("https://t4.ftcdn.net/jpg/03/39/57/11/240_F_339571141_SZpo2yXuUqaTbLJ3DHbsVlzBqdn6iDt0.jpg");
  display: flow-root;
  float: none;
  margin: -20px -20px 40px -20px;
  padding: -10px;
`
const Label = styled.label`
  color: white; 
  align-content: center;
  font-size: 30px;
  padding: 25px 20px;
  display: inline-flex;
` 
export default function Bunner () {
  return (
    <Div>
      <Label>Questionário de segurança da COVID-19</Label>
    </Div>
  )
}