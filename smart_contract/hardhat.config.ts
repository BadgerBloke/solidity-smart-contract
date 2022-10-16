import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// https://eth-goerli.g.alchemy.com/v2/vajRxG8lxopOpRbktEQHovsPOpEXFE-_

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/vajRxG8lxopOpRbktEQHovsPOpEXFE-_",
            accounts: [
                "de3bb12376de31c28b772f0b47939e9e3db0f1ff39db6ed10de32b9de6dae306",
            ],
        },
    },
};

export default config;
