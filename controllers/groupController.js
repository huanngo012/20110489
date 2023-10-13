const mygroup = require("../models/mygroup");
const group = [{ id: "20110077", name: "Tran Quang Hai Dang" }];

const getAllItem = (req, res) => {
  res.json(mygroup);
};

const addItem = (req, res) => {
  const { id, name } = req.body;

  if (
    mygroup.some((item) => item.id === id) ||
    !group.some((item) => item.id === id)
  ) {
    res.status(400).json({ error: "Not valid" });
  } else {
    mygroup.push({ id, name });
    res.json({ id, name });
  }
};

const getItemById = (req, res) => {
  const id = req.params.id;
  const member = mygroup.find((item) => item.id === id);
  if (member) {
    res.json(member);
  } else {
    res.status(404).json({ error: "Not valid" });
  }
};

module.exports = {
  getAllItem,
  addItem,
  getItemById,
};
