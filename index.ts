// or directly from @swapkit/api
import { Chain, SwapKitApi, createSwapKit } from '@swapkit/sdk'

(async function get() {
    const connectChains = [Chain.Ethereum, Chain.Bitcoin, Chain.THORChain]
    const swapKitClient = createSwapKit({
    config: {
        stagenet: true,
        ethplorerApiKey: 'EK-73cbb-Ea74b5f-UNosJ',
    }
    })
    swapKitClient.connectKeystore(connectChains, "begin sadness design bacon denial burger nature uncover true anchor cash minimum")

    const quoteParams = {
        sellAsset: 'ETH.ETH',
        sellAmount: '1',
        buyAsset: 'ETH.USDC',
        senderAddress: '0x41eEf45BBCE1d50192E3b4a0505cec8fCF32968F',
        recipientAddress: '0x41eEf45BBCE1d50192E3b4a0505cec8fCF32968F',
        slippage: '3',
    };

    const { routes } = await SwapKitApi.getQuote(quoteParams);
    console.log(routes);
})();
