import React, { useState } from 'react'
import { Bunner, Button, Form, Input, Select, Label, InputNumber, InputDate } from './styled-components/index.js'

import { useHistory } from 'react-router-dom'
import { postFormData } from './service/api.js'

export default function QuestionForm () {
  const [form, setForm] = useState({})
  const history = useHistory();

  function validateMaxLength(event, maxLength) {
    if (event.target.value.length >= maxLength) {
      event.preventDefault()
    }
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name] : event.target.value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (await postFormData(form)) {
      history.push("/message")
    }
  }

  return (
     <Form onSubmit={e => handleSubmit(e)}>
      <Bunner />
      <Label htmlFor="register">Matrícula</Label>
      <InputNumber id="register" name="register" type="text" placeholder="Digite sua matrícula" onBeforeInput={(e) => validateMaxLength(e, 6)} onChange={e => handleChange(e)} required></InputNumber>
      <Label htmlFor="document">CPF</Label>
      <InputNumber id="document" name="document" placeholder="Digite seu CPF" onBeforeInput={(e) => validateMaxLength(e, 11)}  onChange={e => handleChange(e)} required></InputNumber>
      <Label htmlFor="name">Nome completo</Label>
      <Input id="name" name="name" type="text" placeholder="Digite seu nome completo" maxLength="130"  onChange={e => handleChange(e)} required></Input>
      <Label htmlFor="birth">Data de nascimento</Label>
      <InputDate id="birth" name="birthday" onChange={e => handleChange(e)} required></InputDate>    
      <Label htmlFor="alreadyInfected">Já teve Covid-19?</Label>
      <Select id="alreadyInfected" name="alreadyInfected" defaultValue="" onChange={e => handleChange(e)} required>
        <option value="" />
        <option value="false" >Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="symptomsSeverity">Como foram os sintomas?</Label>
      <Select id="symptomsSeverity" name="symptomsSeverity" defaultValue="" onChange={e => handleChange(e)} required>
        <option value=""></option>
        <option value="ASYMPTOMATIC">Não se aplica</option>
        <option value="LIGHT">Leves</option>
        <option value="SERIOUS">Graves</option>
      </Select>
      <Label htmlFor="symptoms">Quais foram sintomas: (Separados por vírgula)</Label>
      <Input id="symptoms" name="symptoms" placeholder="febre, dor de cabeça..." onChange={e => handleChange(e)} ></Input>
      <Label htmlFor="symptomsRemainedAfterRecovery">Os sintomas permaneceram após a recuperação?</Label>
      <Select id="symptomsRemainedAfterRecovery" name="symptomsRemainedAfterRecovery" defaultValue="" onChange={e => handleChange(e)} required>
        <option value="" />
        <option value="false">Não se aplica</option>
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="contactWithInfected">Teve contato com alguém infectado recentemente?</Label>
      <Select id="contactWithInfected" name="contactWithInfectedRecently" defaultValue="" onChange={e => handleChange(e)} required>
        <option value="" />
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="aleadyVacinated">Já foi vacinado?</Label>
      <Select id="aleadyVacinated" name="alreadyVaccinated" defaultValue="" onChange={e => handleChange(e)} required>
        <option value="" />
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="vaccinatedDate">Data da 1ª dose</Label>
      <InputDate id="firstVaccinatedDate" name="firstVaccinatedDate" onChange={e => handleChange(e)} ></InputDate>
      <Label htmlFor="vaccinatedDate">Data da 2ª dose</Label>
      <InputDate id="secondVaccinatedDate" name="secondVaccinatedDate" onChange={e => handleChange(e)}></InputDate>
      <Button type="submit">Enviar</Button>
    </Form>
  )
}