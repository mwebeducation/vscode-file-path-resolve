import {Model} from "@models/Model.js"

const controller = (req, res, next) => {
  const data = Model.find(obj => return obj);
  rerurn res.json(data);
};

export default controller;