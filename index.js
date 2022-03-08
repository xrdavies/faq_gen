import { GoogleSpreadsheet } from 'google-spreadsheet';
import * as fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_DOC_ID);

  // doc.useApiKey('AIzaSyD5Wwul0LVg1xdt_jdYtgWxN7-D55ytyCI')

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY
  });


  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  console.log("sheet number", doc.sheetCount);



  const faq_cn = fs.openSync('./faq_cn.md', 'w');
  const faq_en = fs.openSync('./faq_en.md', 'w');

  for (let index = 0; index < doc.sheetCount; index++) {
    const sheet = doc.sheetsByIndex[index];
    await sheet.loadHeaderRow();
    await sheet.loadCells();

    console.log(sheet.title);
    console.log(sheet.headerValues);

    fs.writeSync(faq_cn, `# ${sheet.title}\n`);
    fs.writeSync(faq_en, `# ${sheet.title}\n`);

    for (let rowIdx = 1; rowIdx < sheet.rowCount; rowIdx++) {
      const qnum = sheet.getCell(rowIdx, 0);
      const qcn = sheet.getCell(rowIdx, 1);
      const acn = sheet.getCell(rowIdx, 2);
      const qen = sheet.getCell(rowIdx, 3);
      const aen = sheet.getCell(rowIdx, 4);

      if (!qnum.value || qnum.value.length == 0) {
        continue;
      }

      fs.writeSync(faq_cn, `## Q${qnum.value} ${qcn.value}\n\n ${acn.value}\n\n`);
      fs.writeSync(faq_en, `## Q${qnum.value} ${qen.value}\n\n ${aen.value}\n\n`);
    }
  }

  fs.closeSync(faq_cn);
  fs.closeSync(faq_en);
}

(async function () {
  await main();
}());


