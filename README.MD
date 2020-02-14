<p align="center">

<img src="https://user-images.githubusercontent.com/31359652/74533815-388ca080-4f11-11ea-95c4-40185f2580f9.jpg" width="300" />

<img src="https://user-images.githubusercontent.com/31359652/74535485-b00fff00-4f14-11ea-9497-78b37a4eebcb.png" width="500" />

<img src="https://user-images.githubusercontent.com/31359652/74535489-b0a89580-4f14-11ea-9e40-ae32b147fadb.png" width="500" />

</p>

# WebWhatsAppSendMessage

O WebWhatsAppSendMessage é um automatizador de envio de mensagem via WebWhatsApp. Basta ter uma lista de contatos em xlsx.

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

Nas distribuições baseadas no Ubuntu, é aconselhável executar os seguintes comandos:

`sudo apt-get update && sudo apt-get install pkg-config build-essential`

### Para todas as plataformas.

Clone o repositório.

`git clone https://github.com/adryansf/WebWhatsAppSendMessage.git`

Entre na pasta do repositório gerada.  
`cd WebWhatsAppSendMessage`

Instale as dependências

`npm install` ou `yarn install`

Realize o build.  
`npm run build` ou `yarn build`

Execute o script  
`npm start` ou `yarn start`

## Plataformas que já foram testadas.

- [x] Linux (Ubuntu 18.04.4 LTS - 64 bits)
- [x] Windows 10 - 64 Bits

## Autores

| [<img src="https://avatars3.githubusercontent.com/u/31359652?s=460&v=4" width=115><br><sub>@adryansf</sub>](https://github.com/adryansf) |
| :--------------------------------------------------------------------------------------------------------------------------------------: |


## Algumas das bibliotecas usadas.

- [x] [NodeGUI](https://github.com/nodegui/react-nodegui)
- [x] [Puppeteer](https://github.com/puppeteer/puppeteer)
