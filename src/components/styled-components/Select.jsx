import styled from 'styled-components'

const Select = styled.select`
  color: gray;
  background: white;
  margin: 8px 0 20px;
  width: 15%;
  height: 35px;
  display: block;
  padding: 8px 10px;
  min-width: 90px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  border-left: 3px solid #ED145B;
  
  option {
    color: gray;
    background: white;
    display: flex;
    min-height: 20px;
    padding: 2px 2px;
  }
`
export default Select