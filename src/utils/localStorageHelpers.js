export const getUsers = () => {
  const users = localStorage.getItem('users');

  if (!users) {
    return [];
  }

  try {
    return JSON.parse(users);
  } catch (e) {
    console.warn('Error: localStorage[users] is invalid', users);
    return [];
  }
};

export const setUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const findUser = (email) => {
  return getUsers().find((user) => user.email === email);
};

export const setUser = (user) => {
  const users = getUsers();
  const index = users.findIndex((u) => u.email === user.email);

  if (index >= 0) {
    users.splice(index, 1);
  }

  users.push(user);
  setUsers(users);
};
