"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

// Mock data
const DOCTORS = [
	{
		id: 1,
		name: "Sophia Williams",
		specialty: "General Physicians",
		image: "/doc1.png",
		rating: 4.9,
		availability: 5,
	},
	{
		id: 2,
		name: "Dr. Emily Johnson",
		specialty: "Gynaecologist",
		image: "/doc1.png",
		rating: 4.8,
		availability: 3,
	},
	{
		id: 3,
		name: "Dr. Michael Chen",
		specialty: "Dermatologist",
		image: "/doc1.png",
		rating: 4.9,
		availability: 7,
	},
	{
		id: 4,
		name: "Dr. Sarah Anderson",
		specialty: "Pediatrician",
		image: "/doc1.png",
		rating: 4.7,
		availability: 4,
	},
];

const TIME_SLOTS = [
	"09:00 AM",
	"09:30 AM",
	"10:00 AM",
	"10:30 AM",
	"11:00 AM",
	"02:00 PM",
	"02:30 PM",
	"03:00 PM",
	"03:30 PM",
	"04:00 PM",
];

const BookAppointment = () => {
	const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
	const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedTime, setSelectedTime] = useState("");
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		age: "",
		gender: "",
		reason: "",
	});

	const handleFormChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const doctorData = DOCTORS.find((d) => d.id === selectedDoctor);

	const getTomorrowDate = () => {
		const date = new Date();
		date.setDate(date.getDate() + 1);
		return date.toISOString().split("T")[0];
	};

	const isStep1Valid = selectedDoctor !== null;
	const isStep2Valid = selectedDate !== "" && selectedTime !== "";
	const isStep3Valid =
		formData.firstName &&
		formData.lastName &&
		formData.email &&
		formData.phone &&
		formData.age &&
		formData.gender;

	return (
		<main>
			{/* ── HERO SECTION ── */}
			<section className="mx-auto max-w-6xl px-4 pt-24 pb-12">
				<div className="space-y-6 text-center">
					<div>
						<span className="mb-3 inline-block font-semibold text-primary text-xs uppercase tracking-wider">
							Book Your Appointment
						</span>
						<h1 className="font-bold font-playfair text-5xl text-foreground leading-tight sm:text-6xl">
							Schedule with Our <span className="text-primary">Experts</span>
						</h1>
					</div>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
						Easy and quick appointment booking in just 4 simple steps
					</p>
				</div>
			</section>

			{/* ── PROGRESS INDICATOR ── */}
			<section className="mx-auto max-w-6xl px-4 pb-12">
				<div className="flex items-center justify-between gap-2 md:gap-4">
					{(
						[
							{ num: 1, label: "Doctor" },
							{ num: 2, label: "Date & Time" },
							{ num: 3, label: "Details" },
							{ num: 4, label: "Confirm" },
						] as const
					).map(({ num, label }) => (
						<div className="flex flex-1 items-center" key={num}>
							<div className="flex flex-1 items-center">
								<button
									className={`relative flex h-12 w-12 items-center justify-center rounded-full font-bold transition-all duration-300 ${
										step >= num
											? "bg-primary text-white shadow-lg"
											: "border border-border bg-secondary text-muted-foreground"
									}`}
									type="button"
								>
									{step > num ? "✓" : num}
								</button>
								<span className="ml-3 hidden font-medium text-foreground text-sm md:inline">
									{label}
								</span>
							</div>
							{num !== 4 && (
								<div
									className={`mx-1 h-0.5 flex-1 transition-all duration-300 ${
										step > num ? "bg-primary" : "bg-border"
									}`}
								/>
							)}
						</div>
					))}
				</div>
			</section>

			{/* ── BOOKING FORM ── */}
			<section className="mx-auto max-w-4xl px-4 pb-20">
				{/* STEP 1: SELECT DOCTOR */}
				{step === 1 && (
					<div className="animate-fadeUp-1 space-y-6">
						<div>
							<h2 className="mb-2 font-bold font-playfair text-2xl text-foreground">
								Select a Doctor
							</h2>
							<p className="text-muted-foreground">
								Choose from our team of experienced medical professionals
							</p>
						</div>

						<div className="grid gap-4 md:grid-cols-2">
							{DOCTORS.map((doctor) => (
								<button
									className={`group rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
										selectedDoctor === doctor.id
											? "border-primary bg-primary/10"
											: "border-border bg-card hover:border-primary/50"
									}`}
									key={doctor.id}
									onClick={() => setSelectedDoctor(doctor.id)}
									type="button"
								>
									<div className="flex gap-4">
										<div className="relative h-16 w-16 overflow-hidden rounded-xl">
											<Image
												alt={doctor.name}
												className="object-cover"
												fill
												src={doctor.image}
											/>
										</div>
										<div className="flex-1">
											<h3 className="font-bold text-foreground">
												{doctor.name}
											</h3>
											<p className="font-semibold text-primary text-xs uppercase">
												{doctor.specialty}
											</p>
											<div className="mt-1 flex items-center gap-1 text-sm">
												<span className="text-yellow-400">★</span>
												<span className="text-muted-foreground">
													{doctor.rating} ({doctor.availability} slots)
												</span>
											</div>
										</div>
										{selectedDoctor === doctor.id && (
											<div className="flex items-center text-primary">
												<div className="text-2xl">✓</div>
											</div>
										)}
									</div>
								</button>
							))}
						</div>

						<div className="flex gap-4 pt-6">
							<Button
								className="flex-1"
								disabled={!isStep1Valid}
								onClick={() => setStep(2)}
								size="lg"
								variant="primary"
							>
								Continue
							</Button>
						</div>
					</div>
				)}

				{/* STEP 2: SELECT DATE & TIME */}
				{step === 2 && (
					<div className="animate-fadeUp-1 space-y-6">
						<div>
							<h2 className="mb-2 font-bold font-playfair text-2xl text-foreground">
								Select Date & Time
							</h2>
							<p className="text-muted-foreground">
								Choose your preferred appointment slot
							</p>
						</div>

						{doctorData && (
							<div className="mb-6 rounded-2xl border border-border/50 bg-card p-4">
								<p className="text-muted-foreground text-sm">
									Selected Doctor:
									<span className="ml-2 font-semibold text-foreground">
										{doctorData.name}
									</span>
								</p>
							</div>
						)}

						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="date">Appointment Date</Label>
								<Input
									id="date"
									min={getTomorrowDate()}
									onChange={(e) => setSelectedDate(e.target.value)}
									required
									type="date"
									value={selectedDate}
								/>
							</div>

							<div className="space-y-3">
								<Label>Available Time Slots</Label>
								<div className="grid grid-cols-3 gap-3 md:grid-cols-4">
									{TIME_SLOTS.map((time) => (
										<button
											className={`rounded-lg px-3 py-2 font-medium text-sm transition-all duration-300 ${
												selectedTime === time
													? "bg-primary text-white"
													: "border border-border bg-secondary hover:border-primary"
											}`}
											key={time}
											onClick={() => setSelectedTime(time)}
											type="button"
										>
											{time}
										</button>
									))}
								</div>
							</div>
						</div>

						<div className="flex gap-4 pt-6">
							<Button
								className="flex-1"
								onClick={() => setStep(1)}
								size="lg"
								variant="outline"
							>
								Back
							</Button>
							<Button
								className="flex-1"
								disabled={!isStep2Valid}
								onClick={() => setStep(3)}
								size="lg"
								variant="primary"
							>
								Continue
							</Button>
						</div>
					</div>
				)}

				{/* STEP 3: PATIENT DETAILS */}
				{step === 3 && (
					<div className="animate-fadeUp-1 space-y-6">
						<div>
							<h2 className="mb-2 font-bold font-playfair text-2xl text-foreground">
								Your Details
							</h2>
							<p className="text-muted-foreground">
								Please provide your information for the appointment
							</p>
						</div>

						<form className="space-y-6">
							<div className="grid gap-4 md:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="firstName">First Name</Label>
									<Input
										id="firstName"
										name="firstName"
										onChange={handleFormChange}
										placeholder="John"
										required
										type="text"
										value={formData.firstName}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="lastName">Last Name</Label>
									<Input
										id="lastName"
										name="lastName"
										onChange={handleFormChange}
										placeholder="Doe"
										required
										type="text"
										value={formData.lastName}
									/>
								</div>
							</div>

							<div className="grid gap-4 md:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										name="email"
										onChange={handleFormChange}
										placeholder="john@example.com"
										required
										type="email"
										value={formData.email}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="phone">Phone Number</Label>
									<Input
										id="phone"
										name="phone"
										onChange={handleFormChange}
										placeholder="+1 (555) 000-0000"
										required
										type="tel"
										value={formData.phone}
									/>
								</div>
							</div>

							<div className="grid gap-4 md:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="age">Age</Label>
									<Input
										id="age"
										name="age"
										onChange={handleFormChange}
										placeholder="30"
										required
										type="number"
										value={formData.age}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="gender">Gender</Label>
									<select
										className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
										id="gender"
										name="gender"
										onChange={handleFormChange}
										required
										value={formData.gender}
									>
										<option value="">Select Gender</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
										<option value="other">Other</option>
									</select>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="reason">Reason for Visit</Label>
								<textarea
									className="min-h-24 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
									id="reason"
									name="reason"
									onChange={handleFormChange}
									placeholder="Describe your symptoms or reason for visit..."
									value={formData.reason}
								/>
							</div>
						</form>

						<div className="flex gap-4 pt-6">
							<Button
								className="flex-1"
								onClick={() => setStep(2)}
								size="lg"
								variant="outline"
							>
								Back
							</Button>
							<Button
								className="flex-1"
								disabled={!isStep3Valid}
								onClick={() => setStep(4)}
								size="lg"
								variant="primary"
							>
								Review Booking
							</Button>
						</div>
					</div>
				)}

				{/* STEP 4: CONFIRMATION */}
				{step === 4 && (
					<div className="animate-fadeUp-1 space-y-6">
						<div>
							<h2 className="mb-2 font-bold font-playfair text-2xl text-foreground">
								Confirm Your Appointment
							</h2>
							<p className="text-muted-foreground">
								Review your details before confirming
							</p>
						</div>

						{/* Appointment Summary */}
						<div className="space-y-6 rounded-2xl border border-border/50 bg-card p-8">
							{/* Doctor Info */}
							<div className="border-border border-b pb-6">
								<h3 className="mb-4 font-semibold text-foreground">
									Doctor Information
								</h3>
								{doctorData && (
									<div className="flex gap-4">
										<div className="relative h-16 w-16 overflow-hidden rounded-xl">
											<Image
												alt={doctorData.name}
												className="object-cover"
												fill
												src={doctorData.image}
											/>
										</div>
										<div>
											<p className="font-bold text-foreground">
												{doctorData.name}
											</p>
											<p className="font-semibold text-primary text-xs uppercase">
												{doctorData.specialty}
											</p>
											<div className="mt-1 flex items-center gap-1">
												<span className="text-sm text-yellow-400">★</span>
												<span className="text-muted-foreground text-sm">
													{doctorData.rating}
												</span>
											</div>
										</div>
									</div>
								)}
							</div>

							{/* Appointment Details */}
							<div className="border-border border-b pb-6">
								<h3 className="mb-4 font-semibold text-foreground">
									Appointment Details
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between">
										<span className="text-muted-foreground">Date:</span>
										<span className="font-medium text-foreground">
											{new Date(selectedDate).toLocaleDateString("en-US", {
												weekday: "long",
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Time:</span>
										<span className="font-medium text-foreground">
											{selectedTime}
										</span>
									</div>
								</div>
							</div>

							{/* Patient Details */}
							<div>
								<h3 className="mb-4 font-semibold text-foreground">
									Patient Information
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between">
										<span className="text-muted-foreground">Name:</span>
										<span className="font-medium text-foreground">
											{formData.firstName} {formData.lastName}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Email:</span>
										<span className="font-medium text-foreground">
											{formData.email}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Phone:</span>
										<span className="font-medium text-foreground">
											{formData.phone}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Age:</span>
										<span className="font-medium text-foreground">
											{formData.age}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Gender:</span>
										<span className="font-medium text-foreground capitalize">
											{formData.gender}
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Success Message */}
						<div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-400 text-sm">
							✓ All information verified and ready to book
						</div>

						<div className="flex gap-4 pt-6">
							<Button
								className="flex-1"
								onClick={() => setStep(3)}
								size="lg"
								variant="outline"
							>
								Back
							</Button>
							<Button
								className="flex-1"
								onClick={() => {
									alert(
										`Appointment confirmed with ${doctorData?.name} on ${selectedDate} at ${selectedTime}`,
									);
									setStep(1);
									setSelectedDoctor(null);
									setSelectedDate("");
									setSelectedTime("");
									setFormData({
										firstName: "",
										lastName: "",
										email: "",
										phone: "",
										age: "",
										gender: "",
										reason: "",
									});
								}}
								size="lg"
								variant="primary"
							>
								Confirm Booking
							</Button>
						</div>
					</div>
				)}
			</section>
		</main>
	);
};

export default BookAppointment;
