"use client";

import { Button } from "@repo/ui";

export default function AdminDashboard() {
	return (
		<main className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-border border-b bg-card px-6 py-4">
				<div className="flex items-center justify-between">
					<h1 className="font-bold text-3xl text-foreground">
						Admin Dashboard
					</h1>
					<Button variant="outline">Logout</Button>
				</div>
			</header>

			{/* Main Content */}
			<div className="p-6">
				<div className="mx-auto max-w-7xl">
					{/* Welcome Section */}
					<div className="mb-8 space-y-2">
						<h2 className="font-bold text-2xl text-foreground">
							Welcome to Admin Panel
						</h2>
						<p className="text-muted-foreground">
							Manage users, doctors, appointments, and more.
						</p>
					</div>

					{/* Stats Grid */}
					<div className="grid gap-6 md:grid-cols-4">
						<div className="rounded-lg border border-border/50 bg-card p-6">
							<p className="text-muted-foreground text-sm">Total Users</p>
							<p className="mt-2 font-bold text-3xl text-foreground">0</p>
						</div>
						<div className="rounded-lg border border-border/50 bg-card p-6">
							<p className="text-muted-foreground text-sm">Total Doctors</p>
							<p className="mt-2 font-bold text-3xl text-foreground">0</p>
						</div>
						<div className="rounded-lg border border-border/50 bg-card p-6">
							<p className="text-muted-foreground text-sm">Appointments</p>
							<p className="mt-2 font-bold text-3xl text-foreground">0</p>
						</div>
						<div className="rounded-lg border border-border/50 bg-card p-6">
							<p className="text-muted-foreground text-sm">Revenue</p>
							<p className="mt-2 font-bold text-3xl text-foreground">$0</p>
						</div>
					</div>

					{/* Navigation Links */}
					<div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						<a
							className="rounded-lg border border-border/50 bg-card p-6 transition-colors hover:bg-card/80"
							href="/users"
						>
							<h3 className="font-semibold text-foreground">👥 Manage Users</h3>
							<p className="mt-2 text-muted-foreground text-sm">
								View and manage all users
							</p>
						</a>
						<a
							className="rounded-lg border border-border/50 bg-card p-6 transition-colors hover:bg-card/80"
							href="/doctors"
						>
							<h3 className="font-semibold text-foreground">
								👨‍⚕️ Manage Doctors
							</h3>
							<p className="mt-2 text-muted-foreground text-sm">
								Manage doctor profiles and availability
							</p>
						</a>
						<a
							className="rounded-lg border border-border/50 bg-card p-6 transition-colors hover:bg-card/80"
							href="/appointments"
						>
							<h3 className="font-semibold text-foreground">📅 Appointments</h3>
							<p className="mt-2 text-muted-foreground text-sm">
								View all appointments and bookings
							</p>
						</a>
						<a
							className="rounded-lg border border-border/50 bg-card p-6 transition-colors hover:bg-card/80"
							href="/settings"
						>
							<h3 className="font-semibold text-foreground">⚙️ Settings</h3>
							<p className="mt-2 text-muted-foreground text-sm">
								System settings and configuration
							</p>
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
