# Redux as CLI to run on a backend

Proof of concept to allow Redux to run as a CLI interface on a backend service so they can also leverage the features of Redux.

## Notes:

- ESM for ES6 syntax support
- Commander for CLI capabilities
- Main Redux package

## Install:

```
npm install
chmod +x ./index.js
```

## To Run As CLI:

```
./index.js --help
```

### Example commands:

```
./index.js action -t updateTimestamps -i 100,500
./index.js action -t appropriate -i true
```
