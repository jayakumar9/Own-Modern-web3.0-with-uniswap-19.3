// updated upto video time 1:36:33
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext();


const { ethereum } = window;


const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionsContract,
    });
}

export const TransactionsProvider = ({ children }) => {
    //const [currntAccount, setCurrentAccount] = useState('');
   // const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "", person: "" });
    //const [currentAccount, setCurrentAccount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    //const [transactions, setTransactions] = useState([]);
/*
    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));

    }*/

    const checkIfWalletIsConnected = async () => {
       /* try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_accounts" });

           /* if (accounts.length) {
                setCurrentAccount(accounts[0]);

                //getAll Transactions();
            } else {
                console.log('No accounts found');
            }
            console.log(accounts)

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }*/

    }

    const connectWallet = async () => {
      /*  try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });

            setCurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }*/
    }

   /* const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const { addressTo, amount, keyword, message, person } = formData;

            getEthereumContract();
            // const transactionsContract = getEthereumContract();
            //const transactionsContract = createEthereumContract();
            /* const parsedAmount = ethers.utils.parseEther(amount);
 
             await ethereum.request({
                 method: "eth_sendTransaction",
                 params: [{
                     from: currentAccount,
                     to: addressTo,
                     gas: "0x5208", // 21000 GWEI
                     value: parsedAmount._hex, // 0.00001
                 }],
             });
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };
    */
/*

    useEffect(() => {
        checkIFWalletIsConnected();
    }, []);
    */



    return (
        // <TransactionContext.Provider value={{ connectWallet, currntAccount, formData, setformData, handleChange, sendTransaction }}>
        <TransactionContext.Provider value={{ value: 'test' }}>
            {children}
        </TransactionContext.Provider>
    )


};
