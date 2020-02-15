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
  let contacts = [];
  const [isSendWithSuccess, setSuccess] = useState(null);
  let message = "";
  const msg = useRef();

  const fileDialog = new QFileDialog();
  fileDialog.setFileMode(FileMode.AnyFile);
  fileDialog.setNameFilter("Files (*.xlsx)");

  useEffect(() => {
    message = messageSave;
    msg.current.native.setPlainText(message);
  }, []);

  const fileRead = file => {
    const sheets = xlsx.parse(file);
    const prepareContacts = sheets[0].data.map(value => {
      if (value[1]) {
        return {
          name: value[0] ? value[0].toString() : null,
          phone: value[1].toString()
        };
      }

      return;
    });

    const preparedContacts = prepareContacts.filter(
      value => value !== undefined
    );

    fs.writeFile(
      resolve(__dirname, "..", "..", "whatsapp", "ListOfContacts.json"),
      JSON.stringify(preparedContacts),
      err => {}
    );

    contacts = preparedContacts;
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
        try {
          const selectedFiles = fileDialog.selectedFiles();
          if (selectedFiles) {
            selectedFiles.map(fileRead);
          }
        } catch (e) {}
      }
    },
    []
  );

  const btnHandleSubmit = useEventHandler(
    {
      clicked: async () => {
        fs.writeFile(
          resolve(__dirname, "..", "..", "whatsapp", "Message.json"),
          JSON.stringify({ message }),
          err => {}
        );

        setSuccess(await SendMessage(contacts, message));
      }
    },
    []
  );

  return (
    <View styleSheet={contentStyle}>
      <View styleSheet={area1Style}>
        <Text>
          Os contatos não ficam armazenados em cache! Aguarde novas versões
        </Text>
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
  min-width:150px;
`;

const area1Style = `
  flex-direction: column;
  flex:1;
  min-width: 150px;
`;

const area2Style = `
  flex:2;
  flex-direction: column;
  min-width: 350px;
`;
