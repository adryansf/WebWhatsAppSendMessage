import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import React from "react";
import { QIcon } from "@nodegui/nodegui";
import Header from "./components/Header";
import Content from "./components/Content";
import icon from "../assets/icon.jpg";

const minSize = { width: 1000, height: 500 };
const winIcon = new QIcon(icon);
class App extends React.Component {
  render() {
    return (
      <Window
        windowIcon={winIcon}
        windowTitle="WebWhatsAppSendMessage"
        minSize={minSize}
        styleSheet={styleSheet}
      >
        <View styleSheet={styleSheetView}>
          <Header />
          <Content />
        </View>
      </Window>
    );
  }
}

const styleSheetView = `
  display: flex;
  flex-direction: column;
  
`;

const styleSheet = `
  background: #ccc;
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }
`;

export default hot(App);
