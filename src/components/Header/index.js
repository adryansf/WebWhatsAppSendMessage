import { Text, View, Button, useEventHandler } from "@nodegui/react-nodegui";
import React from "react";
import open from "open";

export default function Header() {
  const btnHandler = useEventHandler(
    {
      clicked: () => open("https://github.com/adryansf").catch(console.log)
    },
    []
  );
  return (
    <View style={containerStyle}>
      <Text style={headerTitle}>WebWhatsAppSendMessage</Text>
      <Button
        style={headerButton}
        text={"Desenvolvido por Adryan Freitas"}
        on={btnHandler}
      />
    </View>
  );
}

const containerStyle = `
  display:flex;
  flex-direction: row;
  max-height: 100px;
  background: #7159c1;
  padding:10px;
  flex:1;
`;

const headerTitle = `
display:flex;
  color:#fff;
  font-size: 30px;
  font-weight: bold;
  flex:1;
`;

const headerButton = `
  border:1px solid #fff;
  border-radius: 4px;
  padding: 5px;
  color: #191919;
  font-weight: bold;
`;
