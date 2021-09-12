export default class FormtDTO {
  transformData(formData) {
    return {
      register: formData.register,
      document: formData.document,
      name: formData.name,
      birthday: formData.birthday,
      covidData: {
        alreadyInfected: formData.alreadyInfected,
        contactWithInfectedRecently: formData.contactWithInfectedRecently,
        alreadyVaccinated: formData.alreadyVaccinated,
        vaccinatedDates: [
          formData.firstVaccinatedDate,
          formData.secondVaccinatedDate
        ],
        symptomsData: [{
          symptoms: (formData.symptoms || "").split(',').map(item => item.trim()),
          symptomsSeverity: formData.symptomsSeverity,
          symptomsRemainedAfterRecovery: formData.symptomsRemainedAfterRecovery,
        }]
      }
    }
  }
}