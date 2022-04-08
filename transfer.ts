const transferTezToAddress = async (user: UserDoc, amount: number, address: string) => {
    message = `Transfering ${amount} ꜩ to ${address}...`
    console.log(message);
    await sendMessage(await User.find({ "$or": [{ tg_id: user.tg_id! }, { e: true }] }), message)
    await tezos.contract
        .transfer({ to: address, amount: amount })
        .then(async (op: TransactionOperation) => {
            message = `Waiting for [${op.hash}](https://tzkt.io/${op.hash}) to be confirmed...`
            console.log(message);
            await sendMessage(await User.find({ "$or": [{ tg_id: user.tg_id! }, { e: true }] }), message)
            await op.confirmation(1).then(() => op.hash).catch((error: any) => console.log('Error:', error))

            // send a telegram notification to the user
            message = `You have successfully transferred ${amount} ꜩ to ${address}.`
            message += `\n*Transaction Hash:* [${op.hash}](https://tzkt.io/${op.hash})`

            await sendMessage(await User.find({ "$or": [{ tg_id: user.tg_id! }, { e: true }] }), message)
        })
        .catch(async (err: any) => {
            console.log(`Error: ${err} ${JSON.stringify(err, null, 2)}`);

            if (JSON.stringify(err).includes('delayed')) {
                console.log('Delayed error', err, '\n-----');
                message = 'Got branch delayed error from tezos, restarting the bot ...'
                await sendMessage(await User.find({ "$or": [{ tg_id: user.tg_id! }, { e: true }] }), message)
                await restart()

            }
        })

}
