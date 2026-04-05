import { IconBoltFilled, IconEye } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";

const About = () => {
	// Move all static data outside render for stable keys + performance
	const highlights = [
		{ id: "years", number: "6+", label: "Years of Excellence", emoji: "🏆" },
		{ id: "lives", number: "5M+", label: "Lives Changed", emoji: "❤️" },
		{ id: "partners", number: "500+", label: "Medical Partners", emoji: "🤝" },
	];

	const coreValues = [
		{
			id: "compassion",
			icon: "❤️",
			title: "Compassion",
			description:
				"We prioritize patient wellbeing above all else, treating every person with dignity and empathy.",
		},
		{
			id: "innovation",
			icon: "🔬",
			title: "Innovation",
			description:
				"Constantly pushing boundaries with cutting-edge technology and medical practices.",
		},
		{
			id: "integrity",
			icon: "🤝",
			title: "Integrity",
			description:
				"Transparent, honest, and ethical in all our operations and patient relationships.",
		},
		{
			id: "excellence",
			icon: "🎯",
			title: "Excellence",
			description:
				"Striving for perfection in everything we do, from care to technology.",
		},
	];

	const achievements = [
		{
			id: "consultations",
			number: "5M+",
			label: "Successful Consultations",
			detail: "And counting every day",
		},
		{
			id: "specialists",
			number: "200+",
			label: "Specialists On Board",
			detail: "From multiple medical fields",
		},
		{
			id: "availability",
			number: "24/7",
			label: "Service Availability",
			detail: "Always there when you need us",
		},
		{
			id: "satisfaction",
			number: "4.9★",
			label: "Patient Satisfaction",
			detail: "Based on 500K+ reviews",
		},
		{
			id: "cities",
			number: "15+",
			label: "Cities Covered",
			detail: "And expanding rapidly",
		},
		{
			id: "uptime",
			number: "99.9%",
			label: "Uptime Guarantee",
			detail: "Reliable and always accessible",
		},
	];

	const culturePoints = [
		"collaborative-culture",
		"continuous-learning",
		"work-life-balance",
		"inclusive-environment",
	].map((id) => ({
		id,
		text: id
			.replace(/-/g, " ")
			.replace(/\b\w/g, (l) => l.toUpperCase())
			.replace(
				"Collaborative Culture",
				"Collaborative culture fostering innovation",
			)
			.replace(
				"Continuous Learning",
				"Continuous learning and professional growth",
			)
			.replace("Work Life Balance", "Work-life balance and wellness programs")
			.replace(
				"Inclusive Environment",
				"Diverse, inclusive, and welcoming environment",
			),
	}));

	const testimonials = [
		{
			id: "sarah",
			quote:
				"Atom Hospital made scheduling my specialist appointment incredibly easy. What would have taken weeks took just 15 minutes!",
			author: "Sarah M.",
			role: "Patient",
		},
		{
			id: "patel",
			quote:
				"As a healthcare provider, I'm impressed with how this platform streamlines my practice and helps me reach more patients.",
			author: "Dr. Patel",
			role: "Cardiologist",
		},
		{
			id: "rajesh",
			quote:
				"The 24/7 virtual consultation feature has been a lifesaver for our family. Highly recommended!",
			author: "Rajesh K.",
			role: "Happy Patient",
		},
	];

	const stars = ["star-1", "star-2", "star-3", "star-4", "star-5"];

	return (
		<main>
			{/* ── HERO SECTION ── */}
			<section className="mx-auto max-w-6xl px-4 pt-24 pb-16">
				<div className="grid items-center gap-16 lg:grid-cols-2">
					{/* Left: Intro Text */}
					<div className="animate-fadeUp-1 space-y-6">
						<div>
							<span className="mb-3 inline-block font-semibold text-primary text-xs uppercase tracking-wider">
								About Us
							</span>
							<h1 className="font-bold font-playfair text-5xl text-foreground leading-tight sm:text-6xl">
								Transforming Healthcare,{" "}
								<span className="text-primary">One Click at a Time</span>
							</h1>
						</div>

						<div className="space-y-4">
							<p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
								Founded in 2020, Atom Hospital emerged from a simple
								observation: accessing quality healthcare shouldn't be
								complicated. What began as a mission to revolutionize
								patient-doctor connections has become a trusted platform serving
								millions.
							</p>
							<p className="max-w-xl text-base text-muted-foreground leading-relaxed">
								We're not just an appointment system. We're building an
								ecosystem where technology and compassion meet to redefine what
								healthcare can be.
							</p>
						</div>
					</div>

					{/* Right: Highlight Cards */}
					<div className="animate-fadeUp-2 space-y-5">
						{highlights.map(({ id, number, label, emoji }) => (
							<div
								className="group flex gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-accent hover:bg-secondary/50 hover:shadow-lg"
								key={id}
							>
								<div className="shrink-0 pt-1 text-4xl">{emoji}</div>
								<div className="flex flex-col justify-center">
									<div className="font-bold font-playfair text-2xl text-primary">
										{number}
									</div>
									<div className="mt-0.5 text-muted-foreground text-sm">
										{label}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── MISSION & VISION ── */}
			<section className="mx-auto max-w-6xl px-4 py-20">
				<div className="grid gap-12 md:grid-cols-2">
					{/* Mission */}
					<div className="group animate-fadeUp-1">
						<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
							<IconBoltFilled className="h-7 w-7 text-primary" />
						</div>
						<h2 className="mb-4 font-bold font-playfair text-3xl text-foreground">
							Our Mission
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed">
							To transform healthcare accessibility by enabling every individual
							to connect with qualified medical professionals instantly,
							regardless of geographical or socioeconomic barriers. We believe
							quality healthcare is a right, not a privilege.
						</p>
					</div>

					{/* Vision */}
					<div className="group animate-fadeUp-2">
						<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
							<IconEye className="h-7 w-7 text-primary" />
						</div>
						<h2 className="mb-4 font-bold font-playfair text-3xl text-foreground">
							Our Vision
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed">
							To create a world where healthcare is democratized, personalized,
							and accessible to all. Our vision extends beyond appointments—we
							envision a holistic health ecosystem powered by AI, data, and
							human expertise.
						</p>
					</div>
				</div>
			</section>

			{/* ── CORE VALUES ── */}
			<section className="mx-auto max-w-6xl px-4 py-20">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold font-playfair text-4xl text-foreground">
						Guided by Core Values
					</h2>
					<p className="mx-auto max-w-2xl text-muted-foreground">
						Every decision we make is rooted in these fundamental principles
						that define our culture and commitment to excellence.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{coreValues.map(({ id, icon, title, description }) => (
						<div
							className="group animate-fadeUp-1 rounded-2xl border border-border/50 bg-card p-6"
							key={id}
						>
							<div className="mb-4 text-4xl">{icon}</div>
							<h3 className="mb-3 font-bold text-foreground text-lg">
								{title}
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{description}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* ── ACHIEVEMENTS ── */}
			<section className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-4 py-20">
				<div className="absolute inset-0 bg-linear-to-r from-primary/10 via-accent/5 to-primary/10" />
				<div className="relative z-10">
					<h2 className="mb-16 text-center font-bold font-playfair text-4xl text-foreground">
						Our Achievements
					</h2>

					<div className="grid gap-8 md:grid-cols-3">
						{achievements.map(({ id, number, label, detail }) => (
							<div
								className="group animate-fadeUp-1 rounded-2xl border border-border/50 bg-background/50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-background"
								key={id}
							>
								<div className="mb-2 font-bold font-playfair text-4xl text-primary">
									{number}
								</div>
								<h3 className="mb-2 font-semibold text-foreground">{label}</h3>
								<p className="text-muted-foreground text-xs">{detail}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── TEAM CULTURE ── */}
			<section className="mx-auto max-w-6xl px-4 py-20">
				<div className="grid items-center gap-12 md:grid-cols-2">
					{/* Image/Visual */}
					<div className="relative h-96 animate-fadeUp-1 overflow-hidden rounded-2xl">
						<Image
							alt="team culture"
							className="object-cover"
							fill
							src="/about-doctors.jpg"
						/>
					</div>

					{/* Content */}
					<div className="animate-fadeUp-2">
						<h2 className="mb-6 font-bold font-playfair text-4xl text-foreground">
							Built by Brilliant Minds
						</h2>
						<p className="mb-4 text-muted-foreground leading-relaxed">
							Our team consists of doctors, engineers, designers, and healthcare
							professionals united by a shared vision: making healthcare better
							for everyone.
						</p>
						<p className="mb-8 text-muted-foreground leading-relaxed">
							From our founders who started this journey to the growing family
							of innovators joining us daily, every team member brings unique
							expertise and unwavering commitment to transforming healthcare
							delivery.
						</p>

						<div className="space-y-4">
							{culturePoints.map(({ id, text }) => (
								<div className="flex items-start gap-3" key={id}>
									<div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
									<span className="text-foreground">{text}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── TESTIMONIALS ── */}
			<section className="mx-auto max-w-6xl px-4 py-20">
				<h2 className="mb-16 text-center font-bold font-playfair text-4xl text-foreground">
					Trusted by Thousands
				</h2>

				<div className="grid gap-8 md:grid-cols-3">
					{testimonials.map(({ id, quote, author, role }) => (
						<div
							className="group animate-fadeUp-1 rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-accent hover:bg-secondary/30"
							key={id}
						>
							<div className="mb-4 flex gap-1">
								{stars.map((starId) => (
									<span className="text-lg text-primary" key={starId}>
										★
									</span>
								))}
							</div>
							<p className="mb-6 text-muted-foreground italic">"{quote}"</p>
							<div>
								<p className="font-semibold text-foreground">{author}</p>
								<p className="text-muted-foreground text-sm">{role}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ── CTA SECTION ── */}
			<section className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 md:py-20">
				<Image
					alt="Doctors and healthcare professionals collaborating"
					className="object-cover"
					fill
					priority
					src="/about-cta.jpg"
				/>

				<div className="absolute inset-0 bg-linear-to-r from-teal-950/70 via-teal-950/40 to-teal-950/70" />

				<div className="relative z-10 text-center">
					<h2 className="mb-6 font-bold font-playfair text-4xl text-white">
						Join Our Healthcare Revolution
					</h2>
					<p className="mx-auto mb-10 max-w-2xl text-white">
						Experience the future of healthcare today. Schedule your appointment
						in seconds and connect with world-class medical professionals.
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button size="lg" variant="primary">
							Book Appointment
						</Button>
					</div>
				</div>
			</section>

			{/* Spacing */}
			<div className="h-8" />
		</main>
	);
};

export default About;
