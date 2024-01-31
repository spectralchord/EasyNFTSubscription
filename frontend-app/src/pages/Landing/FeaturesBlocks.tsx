import {AppWindowIcon, ImageIcon, LayoutGridIcon, ServerIcon, WalletIcon} from "lucide-react";

const FeaturesBlocks = () => (
    <section className="relative">
        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
             aria-hidden="true"></div>
        <div
            className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <h2 className="h2 mb-0">Detailed breakdown of the project components:</h2>
                </div>
                <div
                    className="max-w-sm mx-auto grid gap-6 md:grid-cols-4 lg:grid-cols-6 items-start md:max-w-2xl lg:max-w-none">
                    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl col-span-2">
                        <WalletIcon className="w-16 h-16 p-1 -mt-1 mb-2 stroke-blue-600"/>
                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                            User wallets
                        </h4>
                        <p className="text-gray-600 text-center">
                            Users will need to have a Metamask wallet to interact with the web app & sending to the
                            backend a EIP-712 signature for free subscription.
                            EIP-712 signatures ensure that user actions are secure and cannot be tampered with.
                        </p>
                    </div>

                    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl col-span-2 h-full">
                        <ImageIcon className="w-16 h-16 p-1 -mt-1 mb-2 stroke-blue-600"/>
                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                            NFT Generation & Minting
                        </h4>
                        <p className="text-gray-600 text-center">
                            Based on the subscription preferences, the smart contract triggers the AI to generate the
                            NFTs and then mint them. The NFTs are transfered to the subscribers wallets.
                            All NFTs are generated using Open AI api.
                        </p>
                    </div>

                    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl col-span-2 h-full">
                        <LayoutGridIcon className="w-16 h-16 p-1 -mt-1 mb-2 stroke-blue-600"/>
                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                            Subscription management
                        </h4>
                        <p className="text-gray-600 text-center">
                            Users should be able to choose their subscription preferences, including the category of
                            NFTs they want to receive. This information needs to be stored in the smart contract.
                        </p>
                    </div>

                    <div className={'col-span-1 hidden lg:block'}/>

                    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl col-span-2">
                        <ServerIcon className="w-16 h-16 p-1 -mt-1 mb-2 stroke-blue-600"/>
                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                            Backend wallet relayer
                        </h4>
                        <p className="text-gray-600 text-center">
                            A backend wallet acts as a relayer to sponsor the gas fees on behalf of the users. The
                            backend server is responsible for submitting transactions to the Areon Testnet.
                        </p>
                    </div>

                    <div
                        className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full col-span-2">
                        <AppWindowIcon className="w-16 h-16 p-1 -mt-1 mb-2 stroke-blue-600"/>
                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                            User Experience
                        </h4>
                        <p className="text-gray-600 text-center">
                            A web interface with user-friendly design that allows users to easily subscribe and view own
                            NFTs.
                        </p>
                    </div>
                    <div className={'col-span-1 hidden lg:block'}/>
                </div>
            </div>
        </div>
    </section>
);

export default FeaturesBlocks;
