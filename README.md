# Easy NFT Subscription

Easy NFT Subscription is an innovative gasless (FREE) NFT subscription platform on the Areon Testnet Network

![image.png](https://cdn.dorahacks.io/static/files/18d5d42a9af5b1a198f489942afbb050.png)



**Detailed breakdown of main components & aspects:**
1. A user-friendly web interface enabling easy subscription management and NFT viewing;
2. NFT generation & minting: Leveraging the OpenAI API, the smart contract triggers AI to generate and mint NFTs based on user preferences;
3. Subscription management: Users can choose NFT categories of interest, and this information is securely stored in the smart contract;
4. EIP-712 Signatures: Users are required to have a Metamask wallet to interact with the web app and submit an EIP-712 signature for a free subscription;
5. Wallet relayer: A backend wallet acts as a relayer to sponsor the gas fees on behalf of the users, submitting transactions to support gasless interactions.


**How does it work?**
- **Subscription:** To ensure a FREE NFT subscription, EIP-712 signatures are employed. Users sign and submit signatures, which are verified on a server. Upon successful verification, a dedicated wallet covers the transaction cost, registering the user.
- **Generating and sending NFTs:** Utilizing the OpenAI API, NFTs are generated and sent using dedicated server wallets (relayers). CRON tasks on the server automate the process, ensuring NFTs are sent at predefined intervals without any cost to users.
