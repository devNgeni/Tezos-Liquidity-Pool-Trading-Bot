# Tezo Liquidity Pool Trading Bot

To build/create a trading bot that will monitor the  transactions of 11 pair pools on quipuswap DEX for Tezos Blockchain and based on a series of trade conditions, bot will buy or sell from a tezos wallet relevant tokens in below corresponding pools. 
Further to this , simulation tests around market parity for a particular token in a pool by continuous trading from one's own wallet in the same direction.

### Tech Stack & Technology used
- Node Js 
- TypeScript(builds on JavaScript)
- Tezos SDK
- Quipu SDK
- Blockchain data to be provided by GigaNode (paid)
- JSON RPC
- Blockchain explorer (BackDev)
- Telegram API (for notifications)
- Coingecko API

Monitors transactions on tezo blockchain, buys/sells on Quipuswap DEX and sends telegram notifications of activities happening

# Project setup

1. Install project dependencies

- Node V8.0+ is required. Link to [install Node](https://nodejs.dev/download/)
- Then change directory to the project's root folder i.e TezoRetradeBot
- Install the rest of project dependencies by running
- `npm install`
- Once that is done proceed to part 2

2. Config setup

- Rename `example.env` to `.env`
- Open it and assign `PRIVATE_KEY`, `PUBLIC_KEY`, `SLIPPAGE_TOLERANCE` as desired
- Leave `BOT_TOKEN` and `DB_URL` as is
- Once done proceed to last step 3

3. Run the project

- Run the project by running
- `npm start`
- Stop the bot by running
- ``npm stop`
- Restart the bot by running
- ``npm restart`
- Check the bot status by running
- ``npm run status`


DISCLAIMER: This is a demo codebase from our private repositories for the above project. Contact us for more information if you find this dApp of interest.

Relevant Blockchains: [Tezos]

dApp Completion date: [October 21, 2021]
