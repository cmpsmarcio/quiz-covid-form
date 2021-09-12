import FormtDTO from '../helper/FormDTO'

const baseUrl = process.env.REACT_APP_API_HOST

async function getFormData() {
  try {
    return await fetch(`${baseUrl}/v1/person`, {
        method: 'GET',
      })
      .then(res => res.json())
      .then(data => {
        return data
      })
  } catch {
    alert('Erro buscar os registros')
    return {}
  }
}

async function getFormDataByRegister(register) {
  try {
    return await fetch(`${baseUrl}/v1/person/${register}`, {
        method: 'GET',
      })
      .then(res => {
        if (res.status !== 200) {
          return {}
        }
        return res.json()
      })
      .then(data => {
        return data
      })
  } catch {
    console.log('Erro buscar os registros')
    return {}
  }
}

async function postData(data, verb) {
  try {
    await fetch(`${baseUrl}/v1/person`, {
      method: verb,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then()
    return true
  } catch {
    alert('Erro ao inserir os registro')
    return false
  }
}

async function postFormData(formData) {
  let data = new FormtDTO().transformData(formData)
  let userData = await getFormDataByRegister(formData.register)

  if (Object.keys(userData).length > 0) {
    return await postData(data, 'PUT')
  }

  return await postData(data, 'POST')
}

export {
  postFormData,
  getFormData,
}