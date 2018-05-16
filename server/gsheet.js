    const GoogleSheet = require('google-sheets-wrapper');

    let sheet = new GoogleSheet({
        sheetId: "1LujgeJMdNQwFkt10uOUGDMdi-4B0nUIpAoy0RwDQDqk",
        range: "'Sheet 1'!A:C"
    });
     
    let data = await sheet.getRows();
    console.log(data);