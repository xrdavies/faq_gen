# FAQ Generator

Generate FAQ from Google sheets.


## Build

Before you build, you need find the correct configuration and create `.env` in the root directory as following format:

```
GOOGLE_SHEET_DOC_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
```

Then run following commands:

```bash
yarn
node index.js
```
