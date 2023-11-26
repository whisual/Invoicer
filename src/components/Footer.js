import React from 'react'

export default function Footer({ name, contact, email, bankName, accountHolder, accountNumber }) {
    return (
        <>
            <footer>
                <ul className="flex flex-wrap items-center justify-center">
                    <li><span className="font-bold">Name:</span>{name}</li>
                    <li><span className="font-bold">Contact No.:</span>{contact}</li>
                    <li><span className="font-bold">Email:</span>{email}</li>
                    <li><span className="font-bold">Bank Name:</span>{bankName}</li>
                    <li><span className="font-bold">Account Holder:</span>{accountHolder}</li>
                    <li><span className="font-bold">Account No.:</span>{accountNumber}</li>
                </ul>
            </footer>
        </>
    )
}
