import React, { useState } from "react";
import { Home } from "./Home";
export const Paymentsform = () => {
	const [formData, setFormData] = useState({
		name: "",
		cardNumber: "",
		expiry: "",
		cvv: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Payment submitted:", formData);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<form
				onSubmit={handleSubmit}
				className="bg-white p-6 rounded-xl shadow-md w-full max-w-md flex flex-col gap-5"
			>
				<h2 className="text-xl font-bold text-center">Payment Form</h2>

				{/* Name */}
				<div className="flex flex-col gap-1">
					<label className="text-sm font-medium">Name on Card</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="border rounded-lg p-2"
						required
					/>
				</div>

				{/* Card Number */}
				<div className="flex flex-col gap-1">
					<label className="text-sm font-medium">Card Number</label>
					<input
						type="text"
						name="cardNumber"
						value={formData.cardNumber}
						onChange={handleChange}
						className="border rounded-lg p-2"
						required
					/>
				</div>

				{/* Expiry + CVV */}
				<div className="flex flex-row gap-4">
					<div className="flex flex-col flex-1 gap-1">
						<label className="text-sm font-medium">Expiry Date</label>
						<input
							type="text"
							name="expiry"
							value={formData.expiry}
							onChange={handleChange}
							className="border rounded-lg p-2"
							required
						/>
					</div>

					<div className="flex flex-col flex-1 gap-1">
						<label className="text-sm font-medium">CVV</label>
						<input
							type="password"
							name="cvv"
							value={formData.cvv}
							onChange={handleChange}
							className="border rounded-lg p-2"
							required
						/>
					</div>
				</div>

				{/* Button Row */}
				<div className="flex justify-center">
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
					>
						Pay Now
					</button>
				</div>
			</form>
		</div>
	);
};