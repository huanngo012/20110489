const mygroup = require("../models/mygroup");

const getMessageByID = (req, res) => {
  const id = req.params.id;
  const member = mygroup.find((item) => item.id === id);
  if (member) {
    res.send(`<html><body><ul><li>${member.name}</li></ul></body></html>`);
  } else {
    res.status(404).send("Not valid");
  }
};

const getAllMessage = (req, res) => {
  const memberNames = mygroup.map((item) => `<li>${item.name}</li>`).join("");
  res.send(`<html><body><ul>${memberNames}</ul></body></html>`);
};

module.exports = {
  getMessageByID,
  getAllMessage,
};
