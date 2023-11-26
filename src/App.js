import { useState, useRef } from "react";
import ReactToPrint from 'react-to-print';
import useDownloader from 'react-use-downloader';
import Header from "./components/Header";
import MainDetails from './components/MainDetails';
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Table from "./components/Table";
import Footer from "./components/Footer";

function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [bankName, setBankName] = useState("")
  const [accountHolder, setAccountHolder] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")

  const componentRef = useRef();
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? <div ref={componentRef}>
          <Header handlePrint={handlePrint} />

          <ReactToPrint
            trigger={() => (
              <button className="bg-gray-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-gray-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                Print / Download
              </button>
            )}
            content={() => componentRef.current}
          />

          <MainDetails name={name} address={address} />
          <ClientDetails clientName={clientName} clientAddress={clientAddress} />
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
          <Table />
          <Footer name={name} contact={contact} email={email} bankName={bankName} accountHolder={accountHolder} accountNumber={accountNumber} />
          <button onClick={() => setShowInvoice(false)} className="bg-red-500 text-white font-bold py-2 px-8 roundes shadow border-2 border-red-500 hover:bg-transparent hover:text-red-500 transiton-all duration-300">Edit Information</button>
        </div> : (
          <>
            {/* Details Filling Form */}
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="name">Name:</label>
                <  input type="text" name="text" id="name" placeholder="Enter Your Name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="address">Address:</label>
                <  input type="text" name="text" id="address" placeholder="Enter Your Address" autoComplete="off" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="contact">Contact No.:</label>
                <  input type="tel" name="text" id="contact" placeholder="+91-123-456-7890" autoComplete="off" value={contact} onChange={(e) => setContact(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="email">Email:</label>
                <  input type="email" name="email" id="email" placeholder="Enter Your Email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="clientName">Client's Name:</label>
                <  input type="text" name="text" id="name" placeholder="Enter Client Name" autoComplete="off" value={clientName} onChange={(e) => setClientName(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="clientAddress">Client's Address:</label>
                <  input type="text" name="text" id="name" placeholder="Enter Client Address" autoComplete="off" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="invoiceNumber">Invoice No.:</label>
                <  input type="text" name="text" id="name" placeholder="Enter Invoice Number" autoComplete="off" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="invoiceDate">Invoice Date:</label>
                <  input type="date" name="text" id="name" placeholder="Enter Invoice Date" autoComplete="off" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="dueDate">Due Date:</label>
                <  input type="date" name="text" id="name" placeholder="Enter Due Date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="bankName">Bank Name:</label>
                <  input type="text" name="text" id="bankName" placeholder="Enter Bank Name" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="accountHolder">Account Holder's Name:</label>
                <  input type="text" name="text" id="accountHolder" placeholder="Enter Account Holder Name" autoComplete="off" value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} />
              </div>

              <div className="flex flex-row justify-evenly my-2">
                <label htmlFor="accountNumber">Account Number:</label>
                <  input type="text" name="text" id="name" placeholder="Enter Account Number" autoComplete="off" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
              </div>

              <button onClick={() => setShowInvoice(true)} className="bg-green-500 text-white font-bold py-2 px-8 roundes shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transiton-all duration-300 my-2">Preview Invoice</button>
            </div>
          </>)}
      </main>
    </>
  );
}

export default App;
