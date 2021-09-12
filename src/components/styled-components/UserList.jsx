import styled from 'styled-components'

const UserList = styled.div`
  margin: 0 auto;
  margin-bottom: 0.8rem;
  padding: 5px;
  border-radius: 10px;
  background-color: #E2E2E2;
  display: block;
  width: 60%;
  height: 5.5rem;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.705rem;
  color: #3f3c3c;

  img {
    width: 3.5rem;
    height: 3.5rem;
    margin-right: 10px;
    float: left;
  }

  span {
    float:  right;
    font-size: 0.685rem;
    font-weight: bold;
    color: #646464;
  }

  div {
    display: inline-block;
  }

  Label:nth-child(1) {
    font-size: 1rem;
    font-weight: 800;
    color: #ED145B;
  }

  Label {
    padding: 2px;
  }
`

export default UserList