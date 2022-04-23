import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const Welcome = () => {
    const {connectWallet,currentAccount} = useContext(TransactionContext);
    return (<>
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Our App
          </a>
        </h1>

        {!currentAccount && <button className="mt-3 text-2xl" onClick={connectWallet}>
          Connect Wallet
          {/* <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
        </code> */}
        </button>}
    </main>
</>
)};
export default Welcome 