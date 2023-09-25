# randids

This package generates unique and cryptographically secure IDS according to your desired length!

# Features

1. All characters are base64url characters.
2. IDS are url friendly.
3. Cryptographically secure and unique!
4. Generate ids according to any length you wish!

# Instalation: 

```bash
npm i randids
```

# Example Usage

```javascript
const randomid = require("randids");

const length = 15 //default 11

randomid.genId(length)
```

# Collision rate

Randids has a very low collision rate and the ids are cryptographically secure. They have been tested against benchmarks, see [here](https://notehubapp.tech/notes/5ffc2052-9af4-4b4e-b4b8-2a6f1ea1f0f4)
