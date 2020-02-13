const fs = require("fs");
const { resolve } = require("path");

module.exports = async errors => {
  let textErrors = "";
  errors.map(
    contact =>
      (textErrors += `O contato ${contact.name} de número ${contact.phone} não possui WhatsApp. Favor realizar contato pelo telefone.
`)
  );

  fs.writeFile(resolve(__dirname, "fails.txt"), textErrors, err => {
    if (err) return;
  });
};
