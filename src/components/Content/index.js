import {
  View,
  Button,
  useEventHandler,
  PlainTextEdit,
  Text
} from "@nodegui/react-nodegui";
const { QFileDialog, FileMode } = require("@nodegui/nodegui");
import React, { useState, useEffect, useRef } from "react";
import fs from "fs";
import xlsx from "node-xlsx";
import { resolve } from "path";
import ListOfContacts from "../../whatsapp/ListOfContacts.json";
import { message as messageSave } from "../../whatsapp/Message.json";
import SendMessage from "../../whatsapp/send";

export default function Content() {
  const [contacts, setContacts] = useState([]);
  const [contactsText, setText] = useState("");
  const [isSendWithSuccess, setSuccess] = useState(null);
  let message = "";
  const msg = useRef();

  const fileDialog = new QFileDialog();
  fileDialog.setFileMode(FileMode.AnyFile);
  fileDialog.setNameFilter("Files (*.xlsx)");

  useEffect(() => {
    message = messageSave;
    msg.current.native.setPlainText(message);
    setContacts(ListOfContacts);
  }, []);

  useEffect(() => {
    let newContactsText = "";
    contacts.map(contact => {
      newContactsText += `${contact?.name + ":"} ${contact.phone}
`;
    });
    setText(newContactsText);
  }, [contacts]);

  const fileRead = file => {
    const sheets = xlsx.parse(file);
    const prepareContacts = sheets[0].data.map(value => {
      if (value[0].toUpperCase() === "NOME") {
        return;
      }

      return {
        name: value[0],
        phone: value[1].toString()
      };
    });

    const preparedContacts = prepareContacts.filter(
      value => value !== undefined
    );

    fs.writeFile(
      resolve(__dirname, "..", "..", "whatsapp", "ListOfContacts.json"),
      JSON.stringify(preparedContacts),
      err => {}
    );

    setContacts(preparedContacts);
  };

  const textChanged = useEventHandler(
    {
      textChanged: () => {
        message = msg.current.native.toPlainText();
      }
    },
    []
  );

  const btnHandleContacts = useEventHandler(
    {
      clicked: () => {
        fileDialog.exec();
        const selectedFiles = fileDialog.selectedFiles();
        selectedFiles.map(fileRead);
      }
    },
    []
  );

  const btnHandleSubmit = useEventHandler(
    {
      clicked: async () => {
        await fs.writeFile(
          resolve(__dirname, "..", "..", "whatsapp", "Message.json"),
          JSON.stringify({ message }),
          err => {}
        );

        setSuccess(await SendMessage());
      }
    },
    []
  );

  return (
    <View styleSheet={contentStyle}>
      <View styleSheet={area1Style}>
        <PlainTextEdit
          text={contactsText}
          enabled={false}
          minSize={{ height: 250, width: 100 }}
        />
        <Button
          text="Importar Contatos"
          on={btnHandleContacts}
          style={btnStyle}
        />
      </View>
      <View styleSheet={area2Style}>
        <PlainTextEdit ref={msg} on={textChanged} />
        <Button text="Enviar Mensagem" on={btnHandleSubmit} style={btnStyle} />
        {isSendWithSuccess !== null && (
          <Text
            styleSheet={isSendWithSuccess ? `color: #005221` : `color: #8b0000`}
          >
            {isSendWithSuccess
              ? "Enviado com Sucesso"
              : "Não foi possível realizar o envio."}
          </Text>
        )}
      </View>
    </View>
  );
}

const contentStyle = `
  flex:1;
  flex-direction: row;
  padding: 10px;
`;

const btnStyle = `
  font-size: 20px;
  font-weight: bold;
  color:0;
  border:0;
  padding:10px;
  color: #fff;
  background: #7159c1;
`;

const area1Style = `
  flex-direction: column;
  flex:1;
`;

const area2Style = `
  flex:1;
  flex-direction: column;
`;
