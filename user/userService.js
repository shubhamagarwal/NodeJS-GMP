let users = [
  {
    id: "1",
    login: "Shubham",
    password: "Password321",
    age: 30,
    isDeleted: false,
  },
  {
    id: "2",
    login: "rootUser",
    password: "password123",
    age: 30,
    isDeleted: false,
  },
];

export const findByUserId = (findUserId) => {
  const user = users.find(({ id }) => id === findUserId);
  if (user) {
    return user;
  }
};

export const createUser = (user) => {
  users = [...users, user];
  return users;
};

export const deleteUserById = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index].isDeleted = true;
    return users[index];
  }
};

export const updateUserProfile = (id, updatedUserInfo) => {
  const newUsers = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...updatedUserInfo,
      };
    }
    return user;
  });
  return newUsers;
};

export const autoSuggestUsers = (loginSubstring, limit) => {
  const filteredUsers = users
    .filter((user) =>
      user.login.toUpperCase().includes(loginSubstring.toUpperCase())
    )
    .sort((a, b) => (a.login > b.login ? 1 : -1))
    .slice(0, limit);

    return filteredUsers
};
