import { body } from "express-validator";
import { validationHelper } from "../src/helpers/validateHelper.js";

//TO DO: Revisar si funciona bien
const validateLoginGoogle = [
  body("credential").exists().notEmpty(),
  body("client_id").exists().notEmpty(),
  (req, res, next) => {
    validationHelper(req, res, next);
  },
];

export { validateLoginGoogle };