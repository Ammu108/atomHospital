"use client";

import { Button, Card, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import Image from "next/image";
import { useState } from "react";
import { SPECIALITIES } from "~/lib/constant";

// Mock doctor data
const DOCTORS = [
	{
		id: 1,
		name: "Sophia Williams",
		specialty: "General Physicians",
		image: "/doc1.png",
		rating: 4.9,
		reviews: 234,
		description: "Experienced general physician with 10+ years of practice",
	},
	{
		id: 2,
		name: "Dr. Emily Johnson",
		specialty: "Gynaecologist",
		image: "/doc1.png",
		rating: 4.8,
		reviews: 189,
		description: "Specialized in women's health and reproductive care",
	},
	{
		id: 3,
		name: "Dr. Michael Chen",
		specialty: "Dermatologist",
		image: "/doc1.png",
		rating: 4.9,
		reviews: 267,
		description: "Expert in skin conditions and cosmetic dermatology",
	},
	{
		id: 4,
		name: "Dr. Sarah Anderson",
		specialty: "Pediatrician",
		image: "/doc1.png",
		rating: 4.7,
		reviews: 145,
		description: "Caring pediatrician focused on child wellness",
	},
	{
		id: 5,
		name: "Dr. James Wilson",
		specialty: "Gastroenterologist",
		image: "/doc1.png",
		rating: 4.9,
		reviews: 312,
		description: "Specialized in digestive and gastrointestinal disorders",
	},
	{
		id: 6,
		name: "Dr. Lisa Martinez",
		specialty: "General Physicians",
		image: "/doc1.png",
		rating: 4.8,
		reviews: 201,
		description: "Dedicated to comprehensive patient care",
	},
	{
		id: 7,
		name: "Dr. Rachel Green",
		specialty: "Gynaecologist",
		image: "/doc1.png",
		rating: 5.0,
		reviews: 156,
		description: "Compassionate care for all life stages",
	},
	{
		id: 8,
		name: "Dr. David Park",
		specialty: "Dermatologist",
		image: "/doc1.png",
		rating: 4.8,
		reviews: 198,
		description: "Specializing in advanced skin treatments",
	},
	{
		id: 9,
		name: "Dr. Jennifer Lee",
		specialty: "Pediatrician",
		image: "/doc1.png",
		rating: 4.9,
		reviews: 223,
		description: "Creating healthy futures for children",
	},
];

const Doctors = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const filteredDoctors = selectedCategory
		? DOCTORS.filter((doctor) => doctor.specialty === selectedCategory)
		: DOCTORS;

	return (
		<main>
			{/* ── HERO SECTION ── */}
			<section className="mx-auto max-w-6xl px-4 pt-24 pb-16">
				<div className="space-y-6 text-center">
					<div>
						<span className="mb-3 inline-block font-semibold text-primary text-xs uppercase tracking-wider">
							Our Medical Team
						</span>
						<h1 className="font-bold font-playfair text-5xl text-foreground leading-tight sm:text-6xl">
							Meet Our Expert <span className="text-primary">Doctors</span>
						</h1>
					</div>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
						Browse through our network of qualified and experienced medical
						professionals. Filter by specialty to find the perfect doctor for
						your healthcare needs.
					</p>
				</div>
			</section>

			{/* ── FILTER SECTION ── */}
			<section className="mx-auto max-w-6xl px-4 pb-16">
				<div className="mb-8">
					<h3 className="mb-6 font-semibold text-foreground text-lg">
						Filter by Specialty
					</h3>
					<div className="flex flex-wrap gap-3">
						<button
							className={`rounded-full px-6 py-2.5 font-medium text-sm transition-all duration-300 ${
								selectedCategory === null
									? "bg-primary text-white shadow-lg"
									: "border border-border bg-secondary text-foreground hover:border-primary hover:bg-secondary/80"
							}`}
							onClick={() => setSelectedCategory(null)}
							type="button"
						>
							All Doctors
						</button>
						{SPECIALITIES.map(({ label }) => (
							<button
								className={`rounded-full px-6 py-2.5 font-medium text-sm transition-all duration-300 ${
									selectedCategory === label
										? "bg-primary text-white shadow-lg"
										: "border border-border bg-secondary text-foreground hover:border-primary hover:bg-secondary/80"
								}`}
								key={label}
								onClick={() => setSelectedCategory(label)}
								type="button"
							>
								{label}
							</button>
						))}
					</div>
				</div>

				{/* Results count */}
				<p className="mb-8 text-muted-foreground text-sm">
					Showing{" "}
					<span className="font-semibold text-foreground">
						{filteredDoctors.length}
					</span>{" "}
					{selectedCategory ? `${selectedCategory}s` : "doctors"}
				</p>

				{/* ── DOCTORS GRID ── */}
				{filteredDoctors.length > 0 ? (
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{filteredDoctors.map((doctor, index) => (
							<div
								className="animate-fadeUp-1"
								key={doctor.id}
								style={{
									animationDelay: `${index * 50}ms`,
								}}
							>
								<Card className="group relative h-full overflow-hidden pt-0 transition-all duration-300 hover:border-primary/50">
									{/* Doctor Image */}
									<div className="relative aspect-square overflow-hidden bg-linear-to-br from-accent/20 to-primary/20">
										<Image
											alt={doctor.name}
											className="object-cover transition-transform duration-300 group-hover:scale-105"
											fill
											src={doctor.image}
										/>
									</div>

									<CardHeader className="space-y-3">
										<div>
											<CardTitle className="text-xl">{doctor.name}</CardTitle>
											<p className="mt-1 font-semibold text-primary text-xs uppercase tracking-wider">
												{doctor.specialty}
											</p>
										</div>

										{/* Rating */}
										<div className="flex items-center gap-2">
											<div className="flex items-center gap-0.5">
												<span className="text-yellow-400">★</span>
												<span className="font-semibold text-foreground text-sm">
													{doctor.rating}
												</span>
											</div>
											<span className="text-muted-foreground text-xs">
												({doctor.reviews} reviews)
											</span>
										</div>

										<CardDescription className="text-sm leading-relaxed">
											{doctor.description}
										</CardDescription>

										<Button className="mt-2 w-full" size="lg" variant="primary">
											Book Appointment
										</Button>
									</CardHeader>
								</Card>
							</div>
						))}
					</div>
				) : (
					<div className="py-20 text-center">
						<p className="text-lg text-muted-foreground">
							No doctors found in this specialty
						</p>
					</div>
				)}
			</section>
		</main>
	);
};

export default Doctors;
