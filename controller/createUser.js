const users = [
  { id: 1, firstanme: "John ", lastname: "Doe" },
  { id: 2, firstanme: "Jones ", lastname: "Bond" },
];
exports.createUser = (request, response) => {
  users.push({ ...request.body });
  response.status(200).json({ message: "Successfully created User", users });
};
