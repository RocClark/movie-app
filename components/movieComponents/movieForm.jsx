"use client";
import React, { useState, useContext } from 'react';
import { TicketReviewContext } from '../contexts/ticketContext'; // Adjust the import path as needed
import Link from 'next/link';

function MoiveForm() {
    const { purchaseTicket } = useContext(TicketReviewContext); // Access purchaseTicket from the context

    const [nameOnCard, setNameOnCard] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationMonth, setExpirationMonth] = useState('');
    const [expirationYear, setExpirationYear] = useState('');
    const [formValid, setFormValid] = useState(false); // Track form validity

    const handleSubmit = () => {
        // Validate the form fields
        if (nameOnCard && cardNumber && expirationMonth && expirationYear) {
            // If all fields are filled out, set purchased to true
            purchaseTicket(); // This function should set the purchased property to true
            setFormValid(true); // Mark the form as valid to allow navigation
        } else {
            setFormValid(false); // Prevent navigation if the form is invalid
            console.log("Please fill out all the fields.");
        }
    };

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center px-5 pb-10 pt-2">
            <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
                <div className="mb-10">
                    <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
                </div>
                <div className="mb-3">
                    <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                    <div>
                        <input 
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" 
                            placeholder="John Smith" 
                            type="text"
                            value={nameOnCard}
                            onChange={(e) => setNameOnCard(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                    <div>
                        <input 
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" 
                            placeholder="0000 0000 0000 0000" 
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3 -mx-2 flex items-end">
                    <div className="px-2 w-2/3">
                        <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                        <div>
                            <select 
                                className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                                value={expirationMonth}
                                onChange={(e) => setExpirationMonth(e.target.value)}
                            >
                                <option value="">Select month</option>
                                <option value="01">01 - January</option>
                                <option value="02">02 - February</option>
                                <option value="03">03 - March</option>
                                <option value="04">04 - April</option>
                                <option value="05">05 - May</option>
                                <option value="06">06 - June</option>
                                <option value="07">07 - July</option>
                                <option value="08">08 - August</option>
                                <option value="09">09 - September</option>
                                <option value="10">10 - October</option>
                                <option value="11">11 - November</option>
                                <option value="12">12 - December</option>
                            </select>
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <select 
                            className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                            value={expirationYear}
                            onChange={(e) => setExpirationYear(e.target.value)}
                        >
                            <option value="">Select year</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                            <option value="2033">2033</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6">
                    <button 
                        className="w-full px-3 py-3 bg-indigo-500 text-white rounded-md focus:outline-none hover:bg-indigo-600 transition-colors"
                        onClick={handleSubmit}
                    >
                        Submit Payment
                    </button>
                </div>
                {formValid && (
                    <div className="mt-6">
                        <Link
                            href="/movieHome/confermation"
                            className="block text-center px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none hover:bg-green-600 transition-colors"
                        >
                            Go to Confirmation
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MoiveForm;