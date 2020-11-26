import Api from '../../app/services/api';
import { login, logout } from '../../app/services/auth';

export async function userSignUp({ name, email, password, confirmPassword }) {
  try {
    await Api.post('/users', { name, email, password, confirmPassword });
    alert(
      'Cadastro realizado com sucesso. Faça o login para acessar o sistema.'
    );
  } catch (err) {
    alert('Falha no cadastro. Verifique seus dados.');
  }
}

export async function userSignIn({ email, password }) {
  try {
    const res = await Api.post('/session', { email, password });

    const { token, user } = res.data;
    login(token, user);
  } catch (err) {
    alert('Falha na autenticação. Verifique seus dados.');
  }
}

export function userSignOut() {
  logout();
}

export async function getUsers({ search, page, perPage }) {
  const call = await Api.get(
    `/users/lazy?search=${search}&page=${page}&perPage=${perPage}`
  );

  return call.data;
}

export async function getFullUsers() {
  const call = await Api.get('/users');

  return call.data;
}

export async function getUser(id) {
  try {
    const res = await Api.get(`/users/${id}`);

    return res.data;
  } catch (err) {
    alert('Falha no processo. Tente novamente.');
  }
}

export async function updateUser(
  id,
  { name, email, password, newPassword, confirmPassword }
) {
  try {
    await Api.put(`/users/${id}`, {
      name,
      email,
      password,
      newPassword,
      confirmPassword,
    });

    alert('Dados atualizados.');
  } catch (err) {
    alert('Você não tem autorização para isso.');
  }
}

export async function deleteUser(id) {
  try {
    await Api.delete(`/users/${id}`);

    alert('Usuário removido do sistema.');
  } catch (err) {
    alert('Você não tem autorização para isso.');
  }
}

export async function adminUser(id) {
  try {
    await Api.put(`/users/${id}/admin`);
    alert('Permissão de controle atualizada.');
  } catch (err) {
    alert(
      'Você não tem permissão para tornar outro usuário administrador do sistema.'
    );
  }
}
