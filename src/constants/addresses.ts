import { AddressZero } from "@ethersproject/constants";
import { ChainId, SUPPORTED_CHAIN_ID } from "./chains";

/**
 * @internal
 */
export const OZ_DEFENDER_FORWARDER_ADDRESS =
  "0x96d367991c5871C4731F51E618108C431f589D0e";

const TWRegistry_address = "0x77DdCB9c3485e715A1Ad2F385D840125B8D31817";
const TWFactory_address = "0xEE47648A2FE9fBd8EF6CF10DC96837cD756E4107";
const BYOCRegistry_address = "0x61Bb02795b4fF5248169A54D9f149C4557B0B7de"; // TODO finalize, this is mumbai only

/**
 * @internal
 */
export const CONTRACT_ADDRESSES: Record<
  SUPPORTED_CHAIN_ID,
  {
    biconomyForwarder: string;
    twFactory: string;
    twRegistry: string;
    twBYOCRegistry: string;
    byocFactory: string;
  }
> = {
  [ChainId.Mainnet]: {
    biconomyForwarder: "0x84a0856b038eaAd1cC7E297cF34A7e72685A8693",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero,
    byocFactory: AddressZero,
  },
  [ChainId.Rinkeby]: {
    biconomyForwarder: "0xFD4973FeB2031D4409fB57afEE5dF2051b171104",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x3E6eE864f850F5e5A98bc950B68E181Cf4010F23",
    byocFactory: "0xd1b313C4fb83d979f0d842Afd97cDc93AFE4ab61",
  },
  [ChainId.Goerli]: {
    biconomyForwarder: AddressZero,
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0xB1Bd9d7942A250BA2Dce27DD601F2ED4211A60C4",
    byocFactory: "0xd1b313C4fb83d979f0d842Afd97cDc93AFE4ab61",
  },
  [ChainId.Polygon]: {
    biconomyForwarder: "0x86C80a8aa58e0A4fa09A69624c31Ab2a6CAD56b8",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero,
    byocFactory: AddressZero,
  },
  [ChainId.Mumbai]: {
    biconomyForwarder: "0x96d367991c5871C4731F51E618108C431f589D0e",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x3F17972CB27506eb4a6a3D59659e0B57a43fd16C",
    byocFactory: "0x4ca9932786541D142bAe8a39483050D1D7AD664a",
  },
  [ChainId.Avalanche]: {
    biconomyForwarder: "0x64CD353384109423a966dCd3Aa30D884C9b2E057",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero,
    byocFactory: AddressZero,
  },
  [ChainId.AvalancheFujiTestnet]: {
    biconomyForwarder: "0x6271Ca63D30507f2Dcbf99B52787032506D75BBF",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x3E6eE864f850F5e5A98bc950B68E181Cf4010F23",
    byocFactory: "0xd1b313C4fb83d979f0d842Afd97cDc93AFE4ab61",
  },
  [ChainId.Fantom]: {
    biconomyForwarder: AddressZero,
    twFactory: "0x97EA0Fcc552D5A8Fb5e9101316AAd0D62Ea0876B",
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero,
    byocFactory: AddressZero,
  },
  [ChainId.FantomTestnet]: {
    biconomyForwarder: AddressZero,
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x3E6eE864f850F5e5A98bc950B68E181Cf4010F23",
    byocFactory: "0xd1b313C4fb83d979f0d842Afd97cDc93AFE4ab61",
  },
};

/**
 * @internal
 */
export function getContractAddressByChainId(
  chainId: SUPPORTED_CHAIN_ID | ChainId.Hardhat,
  contractName: keyof typeof CONTRACT_ADDRESSES[SUPPORTED_CHAIN_ID],
): string {
  // for testing only
  if (chainId === ChainId.Hardhat) {
    if (contractName === "twFactory") {
      return process.env.factoryAddress as string;
    } else if (contractName === "twRegistry") {
      return process.env.registryAddress as string;
    } else if (contractName === "twBYOCRegistry") {
      return process.env.byocTWRegistryAddress as string;
    } else if (contractName === "byocFactory") {
      return process.env.byocFactoryAddress as string;
    } else {
      return AddressZero;
    }
  }
  // real output here
  return CONTRACT_ADDRESSES[chainId][contractName];
}

/**
 * @internal
 */
export function getBYOCRegistryAddress() {
  if (process.env.byocRegistryAddress) {
    return process.env.byocRegistryAddress as string;
  } else {
    return BYOCRegistry_address;
  }
}
