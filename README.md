# Tezo Liquidity Pool Trading Bot

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
