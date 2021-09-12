import styled from 'styled-components'

const InputNumber = styled.input.attrs({
  type:"number"
})`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  };
  font-size: 13px;
  width: 100%;
  padding: 12px 10px;
  margin: 8px 0 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border-left: 3px solid #ED145B;
`

export default InputNumber