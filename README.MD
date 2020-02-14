<p align="center">

<img src="https://user-images.githubusercontent.com/31359652/74533815-388ca080-4f11-11ea-95c4-40185f2580f9.jpg" width="300" /><br>

<img src="https://user-images.githubusercontent.com/31359652/74535485-b00fff00-4f14-11ea-9497-78b37a4eebcb.png" width="500" /><br>

<img src="https://user-images.githubusercontent.com/31359652/74535489-b0a89580-4f14-11ea-9e40-ae32b147fadb.png" width="500" /><br>

</p>

# WebWhatsAppSendMessage

**O WebWhatsAppSendMessage é um automatizador de envio de mensagem via WebWhatsApp. Basta ter uma lista de contatos em xlsx.**

## Vantagens

- [x] Usabilidade.
- [x] Velocidade.
- [x] Envio de mensagens para contatos não listados no celular.
- [x] Utilidade em marketing e no ramo empresarial de médio e pequeno porte (deixe seus clientes sempre atualizados).
- [x] Relatório de tentativa de envio com falha.

## Desvantagens

- [x] Não é possível executar outras tarefas ao mesmo tempo do envio.
- [x] Nem todas as plataformas possuem suporte.

## Requisitos

- [x] É necessário ter instalado o [CMAKE](https://cmake.org/download/)
- [x] Node v12.X ou acima.

## Como usar

### Linux

**Nas distribuições baseadas no Ubuntu, é aconselhável executar os seguintes comandos:**<br>

`sudo apt-get update && sudo apt-get install pkg-config build-essential`

### Para todas as plataformas.

**Clone o repositório.**<br>

`git clone https://github.com/adryansf/WebWhatsAppSendMessage.git`

<br>

**Entre na pasta do repositório gerada.**<br>
`cd WebWhatsAppSendMessage`

<br>

**Instale as dependências**<br>

`npm install` ou `yarn install`

<br>

**Realize o build.**<br>
`npm run build` ou `yarn build`

<br>

**Execute o script**<br>  
`npm start` ou `yarn start`

## Como utilizar os dados de uma tabela ?

**Exemplo de uma tabela válida.**  
<img src="https://user-images.githubusercontent.com/31359652/74536813-97551880-4f17-11ea-8071-63286b581151.png" width="200" /><br>

**Depois de criar uma tabela basta exportá-la no formato XLSX**<br>

**Após clique no botão _Importar contato_ e selecione a tabela.**<br>

## Como verificar os envios que falharam ?

**Basta entrar na pasta whatsapp e ir no arquivo fails.txt:**<br>

> src/whatsapp/fails.txt

## Como alterar o código do país ?

**Entre na pasta:**<br>

> src/whatsapp

<br>

**Edite o arquivo NumberOfCountry.json**<br>

```
{
  "code": "Código do País(Entre aspas)"
}
```

## É possível utilizar o código sem a interface ?

**Sim. Basta ter um pouco de conhecimento de JSON. Vá até a pasta**<br>

> src/whatsapp

<br>

**Edite os arquivos JSON como preferir, após execute o script sendWithoutInterface.js**<br>

## Plataformas que já foram testadas.

- [x] Linux (Ubuntu 18.04.4 LTS - 64 bits)
- [x] Windows 10 - 64 Bits

## Autores

| [<img src="https://avatars3.githubusercontent.com/u/31359652?s=460&v=4" width=115><br><sub>@adryansf</sub>](https://github.com/adryansf) |
| :--------------------------------------------------------------------------------------------------------------------------------------: |


## Algumas das bibliotecas usadas.

- [x] [NodeGUI](https://github.com/nodegui/react-nodegui)
- [x] [Puppeteer](https://github.com/puppeteer/puppeteer)
