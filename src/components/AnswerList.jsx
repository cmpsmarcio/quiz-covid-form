import { UserList, Label } from "./styled-components/index.js";
import styled from "styled-components";
import { getFormData } from "./service/api.js";
import { booleanToTextPtBr, dateToString } from "./helper/helper";
import { useState, useEffect } from "react";

const H1 = styled.h1`
  text-align: center;
  color: #4a4c4d;
`;

export default function AnswerList() {
  const [formData, setFormData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function getData() {
    setFormData(await getFormData());
    setLoaded(true);
  }

  useEffect(() => {
    !loaded && getData();
  });

  return (
    <>
      <H1>Questionário - Lista (Resumo)</H1>
      {(formData || {}).map((data, index) => {
        return (
          <UserList key={index}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/shopping-elements-6/64/27-Account_and_Personal-128.png"
              alt="Foto principal"
            />
            <span>{`Data: ${dateToString(data.insertDate)}`}</span>
            <div>
              <Label>{data.name}</Label>
              <Label>{`Matrícula: ${data.register}`}</Label>
              <Label>{`Teve contato com alguém infectado recentemente: ${booleanToTextPtBr(
                data.covidData.contactWithInfectedRecently
              )}`}</Label>
              <Label>{`Já teve Covid 19: ${booleanToTextPtBr(
                data.covidData.alreadyInfected
              )}`}</Label>
              <Label>{`Já foi vacinado: ${booleanToTextPtBr(
                data.covidData.alreadyVaccinated
              )}`}</Label>
            </div>
          </UserList>
        );
      })}
    </>
  );
}
