function booleanToTextPtBr(value) {
  if (value) return "Sim"
  if (!value) return "Não"

  return ""
}

function dateToString(date) {
  if (!date || date === '') {
    return new Date().toLocaleDateString("pt-BR")
  }

  let infoDate = date.split('-')
  return `${infoDate[2]}/${infoDate[1]}/${infoDate[0]}`
}

export {
  booleanToTextPtBr,
  dateToString
}