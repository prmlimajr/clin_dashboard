import Api from '../../app/services/api';

export async function getPatients({ search, page, perPage }) {
  const call = await Api.get(
    `/dashboard/lazy?search=${search}&page=${page}&perPage=${perPage}`
  );

  return call.data;
}

export async function newPatient({ name, birthday, genderId, cpf }) {
  try {
    await Api.post('/patient', { name, birthday, genderId, cpf });
    alert('Paciente cadastrado.');
  } catch (err) {
    alert('Falha no cadastro. Verifique os dados.');
  }
}

export async function deletePatient(id) {
  try {
    await Api.delete(`/patient/${id}`);
    alert('Paciente deletado do sistema.');
  } catch (err) {
    alert('Falha no processo. Tente novamente.');
  }
}

export async function getPatient(id) {
  const res = await Api.get(`/patient/${id}`);

  return res.data;
}

export async function updatePatient(id, { name, birthday, genderId, cpf }) {
  try {
    await Api.put(`/patient/${id}`, { name, birthday, genderId, cpf });
    alert('Dados atualizados');
  } catch (err) {
    alert('Falha na requisição');
  }
}

export async function createCondition(patientId, { description, relative }) {
  try {
    await Api.post(`/health-condition?patientId=${patientId}`, {
      description,
      relative,
    });
  } catch (err) {
    alert('Falha no cadastro. Tente novamente.');
  }
}

export async function deleteCondition(id) {
  try {
    await Api.delete(`health-condition/${id}`);
  } catch (err) {
    alert('Falha na requisição.');
  }
}

export async function getFullPatients() {
  try {
    const call = await Api.get('/patient');
    return call.data;
  } catch (err) {
    alert('Falha na comunicação com o servidor.');
  }
}
