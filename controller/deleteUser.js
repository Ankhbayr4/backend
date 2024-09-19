const users = [
  { id: 1, firstanme: "John ", lastname: "Doe" },
  { id: 2, firstanme: "Jones ", lastname: "Bond" },
];
exports.deleteUser = (request, response) => {
  response.send(`${request.pramas.id}`);
};
