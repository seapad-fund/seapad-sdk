# seapad-sdk
TypeScript SDK for seapad

## Example

```bash
import { JsonRpcProvider, RawSigner, SuiExecuteTransactionResponse, Ed25519Keypair, Connection } from "@mysten/sui.js";
const { SeaPadAdapter, SeaPadInput } = require('seapad-sdk')


const PACKAGE_OBJECT_ID = "" //change seapad packageObjectId in here
const MODULE = ""   //change seapad module in here
const COIN = "0x2:sui:SUI"   //change your coin in here

export async function test(): Promise<any> {
    try {
        const connection = new Connection({
            fullnode: "https://fullnode.devnet.sui.io:443/",
            faucet: "https://faucet.devnet.sui.io/gas"
        })
        const provider = new JsonRpcProvider(connection);

        const keypair = new Ed25519Keypair();
        const signer = new RawSigner(keypair, provider)
        const seaPadAdapter = new SeaPadAdapter(signer, provider, PACKAGE_OBJECT_ID, MODULE)
        const seaPadInputConvertor = new SeaPadInput(PACKAGE_OBJECT_ID, MODULE)

        //call get Input of function -> use for FE
        console.log(`FE get input to add_whitelist`, seaPadInputConvertor.addWhitelist({
            COIN: COIN
        }, {
            admin_cap: "", //enter input
            project: "",//enter input
            user: ""//enter input
        }))

        //excuteTransaction -> use for BE
        console.log(`BE call add_whitelist`, await seaPadAdapter.addWhitelist({
            COIN: COIN
        }, {
            admin_cap: "",//enter input
            project: "",//enter input
            user: ""//enter input
        }))

    } catch (error) {
        throw error
    }
}
```
