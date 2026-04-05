"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "~/components/ui/button";

type TabItem = {
	id: "all" | "upcoming" | "completed" | "cancelled";
	label: string;
	count: number;
};

const MyAppointments = () => {
	const [activeTab, setActiveTab] = useState<
		"all" | "upcoming" | "completed" | "cancelled"
	>("upcoming");

	// Sample appointments data
	const appointments = [
		{
			id: 1,
			doctorName: "Dr. Sophia Williams",
			specialty: "Cardiologist",
			image: "/doc1.png",
			date: "2025-04-15",
			time: "10:30 AM",
			status: "upcoming",
			location: "Room 302, Building A",
			rating: "4.8",
			fee: "$150",
		},
		{
			id: 2,
			doctorName: "Dr. James Mitchell",
			specialty: "Dermatologist",
			image: "/doc1.png",
			date: "2025-04-18",
			time: "2:00 PM",
			status: "upcoming",
			location: "Room 105, Building B",
			rating: "4.7",
			fee: "$120",
		},
		{
			id: 3,
			doctorName: "Dr. Emily Chen",
			specialty: "Orthopedist",
			image: "/doc1.png",
			date: "2025-03-20",
			time: "11:00 AM",
			status: "completed",
			location: "Room 201, Building A",
			rating: "4.9",
			fee: "$180",
		},
		{
			id: 4,
			doctorName: "Dr. Michael Brown",
			specialty: "Neurologist",
			image: "/doc1.png",
			date: "2025-03-10",
			time: "3:30 PM",
			status: "completed",
			location: "Room 405, Building C",
			rating: "4.6",
			fee: "$200",
		},
		{
			id: 5,
			doctorName: "Dr. Sarah Johnson",
			specialty: "Pediatrician",
			image: "/doc1.png",
			date: "2025-02-28",
			time: "9:00 AM",
			status: "cancelled",
			location: "Room 102, Building B",
			rating: "4.8",
			fee: "$100",
		},
	];

	const tabs: TabItem[] = [
		{ id: "all", label: "All Appointments", count: appointments.length },
		{
			id: "upcoming",
			label: "Upcoming",
			count: appointments.filter((a) => a.status === "upcoming").length,
		},
		{
			id: "completed",
			label: "Completed",
			count: appointments.filter((a) => a.status === "completed").length,
		},
		{
			id: "cancelled",
			label: "Cancelled",
			count: appointments.filter((a) => a.status === "cancelled").length,
		},
	];

	const filteredAppointments =
		activeTab === "all"
			? appointments
			: appointments.filter((a) => a.status === activeTab);

	const getStatusBadge = (status: string) => {
		const styles = {
			upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/30",
			completed: "bg-green-500/20 text-green-400 border-green-500/30",
			cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
		};
		return styles[status as keyof typeof styles] || styles.upcoming;
	};

	const getStatusIcon = (status: string) => {
		const icons = {
			upcoming: "⏰",
			completed: "✓",
			cancelled: "✕",
		};
		return icons[status as keyof typeof icons] || "•";
	};

	return (
		<main className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative overflow-hidden border-border/30 border-b bg-linear-to-b from-primary/5 to-background px-4 py-12 md:py-20">
				<div className="mx-auto max-w-6xl">
					<div className="animate-fadeUp-1 space-y-2">
						<h1 className="font-bold font-playfair text-4xl text-foreground leading-tight md:text-5xl">
							My Appointments
						</h1>
						<p className="text-lg text-muted-foreground">
							View and manage all your medical appointments in one place
						</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
				{/* Tabs */}
				<div className="mb-8 flex flex-wrap gap-2 border-border/50 border-b">
					{tabs.map((tab) => (
						<button
							className={`relative -mb-0.5 border-b-2 px-4 py-3 font-medium text-sm transition-all duration-300 ${
								activeTab === tab.id
									? "border-primary text-primary"
									: "border-transparent text-muted-foreground hover:text-foreground"
							}`}
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							type="button"
						>
							{tab.label}
							<span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary text-xs">
								{tab.count}
							</span>
						</button>
					))}
				</div>

				{/* Appointments List */}
				{filteredAppointments.length > 0 ? (
					<div className="space-y-4">
						{filteredAppointments.map((appointment) => (
							<div
								className="group animate-fadeUp-1 rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
								key={appointment.id}
							>
								<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
									{/* Left: Doctor Info */}
									<div className="flex flex-1 gap-4">
										<div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
											<Image
												alt={appointment.doctorName}
												className="object-cover"
												fill
												src={appointment.image}
											/>
										</div>
										<div className="min-w-0 flex-1">
											<div className="mb-1 flex items-center gap-2">
												<h3 className="truncate font-bold text-foreground">
													{appointment.doctorName}
												</h3>
												<span
													className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-semibold text-xs ${getStatusBadge(appointment.status)}`}
												>
													{getStatusIcon(appointment.status)}{" "}
													{appointment.status.charAt(0).toUpperCase() +
														appointment.status.slice(1)}
												</span>
											</div>
											<p className="mb-1 font-semibold text-muted-foreground text-xs uppercase">
												{appointment.specialty}
											</p>
											<div className="flex flex-wrap gap-3 text-muted-foreground text-xs md:text-sm">
												<span className="flex items-center gap-1">
													📅{" "}
													{new Date(appointment.date).toLocaleDateString(
														"en-US",
														{ month: "short", day: "numeric", year: "numeric" },
													)}
												</span>
												<span className="flex items-center gap-1">
													🕐 {appointment.time}
												</span>
												<span className="flex items-center gap-1">
													📍 {appointment.location}
												</span>
											</div>
										</div>
									</div>

									{/* Right: Actions */}
									<div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
										<div className="text-right">
											<p className="text-muted-foreground text-xs">
												Consultation Fee
											</p>
											<p className="font-bold text-foreground text-lg">
												{appointment.fee}
											</p>
										</div>
										<div className="flex flex-col gap-2 sm:flex-row">
											{appointment.status === "upcoming" ? (
												<>
													<Button size="sm" variant="outline">
														Reschedule
													</Button>
													<Button
														className="text-destructive hover:bg-destructive/10"
														size="sm"
														variant="outline"
													>
														Cancel
													</Button>
												</>
											) : (
												<>
													<Button size="sm" variant="outline">
														View Notes
													</Button>
													{appointment.status === "completed" && (
														<Button size="sm" variant="outline">
															Book Again
														</Button>
													)}
												</>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="rounded-2xl border-2 border-border/50 border-dashed py-16 text-center">
						<div className="space-y-3">
							<p className="text-4xl">😴</p>
							<h3 className="font-bold font-playfair text-2xl text-foreground">
								No {activeTab !== "all" ? activeTab : ""} appointments
							</h3>
							<p className="mx-auto max-w-sm text-muted-foreground">
								{activeTab === "upcoming"
									? "You don't have any upcoming appointments. Book one now!"
									: activeTab === "completed"
										? "You haven't completed any appointments yet."
										: activeTab === "cancelled"
											? "You don't have any cancelled appointments."
											: "Start by booking your first appointment!"}
							</p>
							{activeTab === "upcoming" || activeTab === "all" ? (
								<Button className="mt-4" size="lg" variant="primary">
									Book an Appointment
								</Button>
							) : null}
						</div>
					</div>
				)}

				{/* Info Cards */}
				<div className="mt-12 grid gap-6 md:grid-cols-3">
					<div className="rounded-xl border border-border/50 bg-card/30 p-6 transition-colors hover:bg-card/50">
						<div className="mb-3 text-3xl">📋</div>
						<h4 className="mb-2 font-semibold text-foreground">View Details</h4>
						<p className="text-muted-foreground text-sm">
							Click on any appointment to view complete details and medical
							notes.
						</p>
					</div>
					<div className="rounded-xl border border-border/50 bg-card/30 p-6 transition-colors hover:bg-card/50">
						<div className="mb-3 text-3xl">🔄</div>
						<h4 className="mb-2 font-semibold text-foreground">Reschedule</h4>
						<p className="text-muted-foreground text-sm">
							Need to change your appointment? Reschedule up to 24 hours before.
						</p>
					</div>
					<div className="rounded-xl border border-border/50 bg-card/30 p-6 transition-colors hover:bg-card/50">
						<div className="mb-3 text-3xl">💬</div>
						<h4 className="mb-2 font-semibold text-foreground">Support</h4>
						<p className="text-muted-foreground text-sm">
							Need help? Contact our support team anytime at
							support@atomhospital.com
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MyAppointments;
