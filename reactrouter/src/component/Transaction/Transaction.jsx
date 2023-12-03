import  { useState } from 'react';
import DigiWallet from '../../assets/Dw.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transaction = () => {

    const notify = () => toast(`$ ${amount} Added to your wallet!`);
    const Error = () => toast(`Invalid Input!`)

  const [walletAddress, setWalletAddress] = useState('');
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({ walletAddress: '', amount: '' });

  const isEthereumAddress = (address) => {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(address);
  };
  
  const isAmountValid = (amount) => {
    return amount >= 0 && amount <= 10000;
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const walletAddressError = isEthereumAddress(walletAddress) ? notify() : `Invalid Ethereum address ${Error()}`;
    const amountError = isAmountValid(amount) ? '' : 'Amount should be between 0 and 10,000';
    setErrors({ walletAddress: walletAddressError, amount: amountError });
    
  };

  return (
    <div className='border-2 flex justify-center gap-12 items-center  p-4'>
        <div className="">
            <img src={DigiWallet} alt=""  className='w-[500px]'/>
        </div>
    <form onSubmit={handleSubmit} className=' p-12 border-2 flex flex-col items-center justify-start gap-4 h-auto rounded-md '>
        <h1 className='text-2xl font-bold text-gray-800 '>Connect to Wallet</h1>
        <div className="flex flex-col gap-2">
      <label className='font-bold text-gray-700'>Username: </label>
        <input 
        type="text"
        className='h-8 focus:border-2 outline-none px-2 border-b-2 w-[350px] focus:shadow focus:shadow-black rounded-md'
        value={username} 
        placeholder='Username'
        required
        onChange={(e=>setUsername(e.target.value))}
        />
        </div>
    <div className="flex flex-col gap-2">
      <label className='font-bold text-gray-700'>Wallet Address: </label>
        <input 
        type="text"
        className='h-8 focus:border-b-2 outline-none px-2 border-b-2 w-[350px] focus:shadow focus:shadow-black rounded-md'
        value={walletAddress} 
        onChange={(e) => setWalletAddress(e.target.value)}
        placeholder='type wallet addss like 0x32Be343B94f860...'
        required
        />
        {errors.walletAddress && <p className='text-red-500'>{errors.walletAddress}</p>}
        </div>
        {/* Amount */}
    <div className="flex flex-col gap-2 w-[350px]">
      <label className='font-bold text-gray-700'>Amount:</label>
        <input 
        type="number"
        className='border-b-2 focus:shadow-black h-8 rounded-md px-2'
         value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='enter amount'
           required
            />
        {errors.amount && <p className='text-red-500'>{errors.amount}</p>}
        </div>

        {/* button */}
        <div className="button px-4 py-2 bg-orange-700 rounded-lg hover:bg-orange-800 text-white font-bold cursor-pointer">
      <input type="submit" value="Submit" />
      <ToastContainer/>
      </div>

    </form>
    </div>
  );
};

export default Transaction;
