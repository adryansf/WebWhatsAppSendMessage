const pup = require("puppeteer");

const errors = require("./errors");
const { code } = require("./NumberOfCountry.json");
const contacts = require("./ListOfContacts.json");
const { message } = require("./Message.json");

const SendMessage = async () => {
  const browser = await pup.launch({
    headless: false,
    defaultViewport: null
  });
  const page = await browser.newPage();
  await page.goto(`https://web.whatsapp.com/`);
  try {
    await page.waitForNavigation();
  } catch (e) {
    await page.evaluate(() => {
      window.alert(`Não foi possível realizar a conexão.`);
    });

    await browser.close();

    return false;
  }

  const errorsContacts = [];

  const numberOfNumbers = contacts.length;
  for (var i = 0; i < numberOfNumbers; i++) {
    await page.goto(
      `https://web.whatsapp.com/send?phone=${code}${contacts[i].phone}`
    );
    try {
      await page.waitForNavigation();
    } catch (e) {
      await page.evaluate(() => {
        window.alert(
          `Não foi possível realizar a conexão. Contato em espera: ${contacts[i].phone}`
        );
      });

      await browser.close();

      return false;
    }
    await page.waitForFunction(`window.alert = function(){}`);
    try {
      await page.waitForSelector(`div._3u328`, {
        timeout: 5000
      });
    } catch (e) {
      errorsContacts.push({
        name: contacts[i].name || "Não Informado",
        phone: contacts[i].phone
      });
      continue;
    }

    await page.type("div._3u328", message);
    await page.waitForSelector(`span[data-icon='send']`);
    await page.click("span[data-icon='send']");
    await page.on("dialog", async dialog => {
      try {
        await dialog.accept();
      } catch (e) {}
    });
  }

  await errors(errorsContacts);
  await page.waitFor(1000);
  await browser.close();

  return true;
};

SendMessage();
