import { ethers } from "ethers";
import { MINT_CONTRACT_ADDRESS } from "./address";
import mintabi from "./abi/mint.json";

export const loadNftContract = (
  address: string,
  provider: any,
  chainId: number
) => {
  const etherProvider = new ethers.providers.Web3Provider(provider);
  const signer = etherProvider.getSigner(address);
  const nftContract = new ethers.Contract(
    MINT_CONTRACT_ADDRESS[chainId],
    mintabi,
    signer
  );
  return nftContract;
};

export const createCollectible = async (
  address: string,
  provider: any,
  chainId: any,
  tokenuri: string
) => {
  const mintContract = loadNftContract(address, provider, chainId);
  const tx = await mintContract.createCollectible(tokenuri, "100");
  await tx.wait();
};
