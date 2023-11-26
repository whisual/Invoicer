import React from 'react'


export default function Header({ handlePrint }) {
    return (
        <>
            <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
                <div className='flex flex-col items-center justify-center'>
                    <img src="https://cdn6.aptoide.com/imgs/3/4/5/3451fd4570905fcd8c4d13f4fa5a3d7b_icon.png" alt="" className='w-10 h-10 ' />
                    <h2 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h2>
                </div>
                {/* <div>
                    <ul className="flex items-center justify-between flex-wrap" >
                        <li><button onClick={handlePrint} className="bg-blue-500 text-white font-bold py-2 px-8 roundes shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transiton-all duration-300 mx-1" >Print/Download</button></li>
                    </ul>
                </div> */}
            </header>
        </>
    )
}
