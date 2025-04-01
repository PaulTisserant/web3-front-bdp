Web3 Project - BDP Token
========================

Description
-----------

This project allows interaction with the **BDP Token** on the **Amoy** network. The application provides a user interface to connect a MetaMask wallet, display POL and BDP balances, view the wallet's latest transactions, mint tokens, perform transfers, and visualize a graph of token exchanges.

An online version is available here: <https://bdpeu.netlify.app/>

Prerequisites
-------------

To use this project, you need:

-   A **MetaMask wallet** (or two to test transfers).

-   The **Amoy** network configured in your MetaMask with the following details:

    -   **Network Name**: Amoy

    -   **RPC URL**: `rpc.ankr.com/polygon_amoy`

    -   **Chain ID**: 80002

    -   **Currency Symbol**: POL

    -   **Block Explorer URL**: [amoy.polyscan.com](https://amoy.polyscan.com)

The **BDP Token** contract is available here: [BDP Contract](https://amoy.polygonscan.com/address/0xbae72f20dacf4bbb38413eba699b9dec9161a27e#code)

Features
--------

-   **Connect to a MetaMask wallet**: Easily connect your MetaMask wallet to interact with the application.

-   **Display POL and BDP balances**: View your POL balance (the network's native currency) and your **BDP** token balance from the contract.

-   **View the last 5 transactions**: See the last 5 transactions made by your wallet.

-   **Mint 1000 BDP per day**: If you are the contract owner, you can mint 1000 BDP each day.

-   **Transfer BDP tokens**: Send a chosen amount of BDP to a specified address.

-   **BDP transaction graph**: Visualize a chart showing the number of BDP tokens exchanged daily.

Run the Project Locally
-----------------------

### Step 1: Clone the Repository

Clone the repository to your local machine:

`git clone https://github.com/PaulTisserant/web3-project.git
cd web3-project`

### Step 2: Install Dependencies

Make sure you have **Node.js** installed on your machine. If not, you can download it here: <https://nodejs.org/>.

Then, install the project dependencies using npm:

`npm install`

### Step 3: Configure Environment Variables

Create a `.env.local` file in the root of your project and add your **Polygonscan API key** to retrieve blockchain data. Here's an example of a `.env.local` file:

`REACT_APP_POLYGON_API_KEY=your_polygonscan_api_key`

### Step 4: Start the Project

Run the development server with the following command:

`npm run dev`

This will start the application on `http://localhost:3000`. You can now access it in your browser.

Default RPC URL
---------------

-   **RPC URL**: `rpc.ankr.com/polygon_amoy`

-   **Chain ID**: 80002

### BDP Token Contract

The **BDP Token** contract is available on **Amoy PolygonScan** [here](https://amoy.polygonscan.com/address/0xbae72f20dacf4bbb38413eba699b9dec9161a27e#code).

Technologies Used
-----------------

-   **React**: Frontend framework for building the user interface.

-   **Wagmi**: Library for interacting with Ethereum and MetaMask.

-   **Tailwind CSS**: Utility-first CSS framework for fast and responsive design.

-   **Chart.js**: Library for generating dynamic token transaction charts.

Solidity Repository
-------------------

The **Solidity** contract code for the BDP token is available here: [BDP Token Solidity Repo](https://github.com/PaulTisserant/web3-contracts)

Author
------

-   **Paul Tisserant**
