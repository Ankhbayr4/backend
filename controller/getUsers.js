const users = [
  { id: 1, firstanme: "John ", lastname: "Doe" },
  { id: 2, firstanme: "Jones ", lastname: "Bond" },
];
exports.getUsers = (request, response) => {
  response.status(200).json({
    users: users,
  });
};
