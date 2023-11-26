import React from 'react'

export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
    return (
        <>
            <article className="my-5 flex flex-col items-end justify-end">
                <ul>
                    <li><span className="font-bold">{invoiceNumber}</span></li>
                    <li><span className="font-bold">{invoiceDate}</span></li>
                    <li><span className="font-bold">{dueDate}</span></li>
                </ul>
            </article>
        </>
    )
}
