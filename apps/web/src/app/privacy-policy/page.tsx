const PrivacyPolicy = () => {
	const sections = [
		{
			id: "introduction",
			title: "Introduction",
			content:
				"At Atom Hospital, we are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.",
		},
		{
			id: "information-we-collect",
			title: "Information We Collect",
			subsections: [
				{
					subtitle: "Personal Information",
					text: "We collect information you provide directly, such as your name, email address, phone number, date of birth, medical history, and insurance information when you create an account or book an appointment.",
				},
				{
					subtitle: "Automatically Collected Information",
					text: "We automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, operating system, pages visited, and time spent on pages.",
				},
				{
					subtitle: "Health Information",
					text: "As a healthcare platform, we may collect sensitive health information including appointment details, symptoms, medical conditions, and consultation notes with healthcare providers.",
				},
			],
		},
		{
			id: "how-we-use",
			title: "How We Use Your Information",
			subsections: [
				{
					subtitle: "Service Delivery",
					text: "To provide, maintain, and improve our services, including scheduling appointments and facilitating communication between patients and doctors.",
				},
				{
					subtitle: "Communication",
					text: "To send appointment reminders, updates, and important notifications related to your healthcare services.",
				},
				{
					subtitle: "Analytics",
					text: "To analyze usage patterns and improve our platform's functionality, user experience, and performance.",
				},
				{
					subtitle: "Legal Compliance",
					text: "To comply with applicable laws, regulations, and healthcare industry standards such as HIPAA.",
				},
			],
		},
		{
			id: "data-security",
			title: "Data Security",
			content:
				"We implement industry-leading security measures to protect your personal and health information. This includes encryption of data in transit and at rest, secure authentication protocols, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
		},
		{
			id: "data-sharing",
			title: "Data Sharing & Disclosure",
			subsections: [
				{
					subtitle: "Healthcare Providers",
					text: "We share necessary medical information with healthcare providers you have booked appointments with to facilitate your care.",
				},
				{
					subtitle: "Third-Party Service Providers",
					text: "We may share de-identified data with service providers who assist us in operating our platform, subject to confidentiality agreements.",
				},
				{
					subtitle: "Legal Requirements",
					text: "We may disclose information when required by law, court order, or legal process.",
				},
				{
					subtitle: "No Sale of Data",
					text: "We do not sell, rent, or lease your personal information to third parties for their marketing purposes.",
				},
			],
		},
		{
			id: "user-rights",
			title: "Your Privacy Rights",
			subsections: [
				{
					subtitle: "Access",
					text: "You have the right to access and receive a copy of your personal information and health records.",
				},
				{
					subtitle: "Correction",
					text: "You can request correction of inaccurate or incomplete information in your profile.",
				},
				{
					subtitle: "Deletion",
					text: "You may request deletion of your account and associated data, subject to legal and healthcare retention requirements.",
				},
				{
					subtitle: "Opt-Out",
					text: "You can opt-out of promotional communications at any time through your account settings.",
				},
			],
		},
		{
			id: "cookies",
			title: "Cookies & Tracking",
			content:
				"We use cookies and similar tracking technologies to enhance your experience, remember your preferences, and analyze usage patterns. You can control cookie settings through your browser preferences. Disabling cookies may affect some platform functionalities.",
		},
		{
			id: "third-party",
			title: "Third-Party Links",
			content:
				"Our platform may contain links to third-party websites and services. We are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites before providing your information.",
		},
		{
			id: "children",
			title: "Children's Privacy",
			content:
				"Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information and terminate the child's access.",
		},
		{
			id: "retention",
			title: "Data Retention",
			content:
				"We retain your personal and health information for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. Retention periods vary by data type and applicable regulatory requirements.",
		},
		{
			id: "hipaa",
			title: "HIPAA Compliance",
			content:
				"As a healthcare platform, Atom Hospital complies with the Health Insurance Portability and Accountability Act (HIPAA). We maintain appropriate administrative, physical, and technical safeguards to protect the privacy and security of protected health information.",
		},
		{
			id: "right-to-be-forgotten",
			title: "Right to Be Forgotten",
			content:
				"In accordance with applicable data protection laws, you may request deletion of your personal data. We will honor such requests to the extent permitted by law, while maintaining necessary records for legal compliance and healthcare requirements.",
		},
	];

	return (
		<main className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative overflow-hidden border-border/30 border-b bg-linear-to-b from-primary/5 to-background px-4 py-16 md:py-24">
				<div className="mx-auto max-w-4xl">
					<div className="animate-fadeUp-1 space-y-4">
						<h1 className="font-bold font-playfair text-4xl text-foreground leading-tight sm:text-5xl md:text-6xl">
							Privacy Policy
						</h1>
						<p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
							Your privacy is important to us. Learn how we collect, use, and
							protect your information.
						</p>
						<p className="text-muted-foreground/70 text-sm">
							Last updated: March 10, 2026
						</p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<div className="mx-auto max-w-4xl px-4 py-12 md:py-20">
				<div className="grid gap-8 lg:grid-cols-4 lg:gap-12">
					{/* Sidebar Navigation */}
					<div className="hidden lg:block">
						<div className="sticky top-24 space-y-2">
							<h3 className="mb-4 font-semibold text-foreground text-sm uppercase tracking-wider">
								Sections
							</h3>
							<nav className="space-y-1">
								{sections.map((section) => (
									<a
										className="block rounded px-2 py-1 text-muted-foreground text-sm transition-colors hover:bg-primary/5 hover:text-primary"
										href={`#${section.id}`}
										key={section.id}
									>
										{section.title}
									</a>
								))}
							</nav>
						</div>
					</div>

					{/* Content */}
					<div className="space-y-12 lg:col-span-3">
						{sections.map((section) => (
							<section
								className="animate-fadeUp-1 space-y-4"
								id={section.id}
								key={section.id}
							>
								<h2 className="font-bold font-playfair text-2xl text-foreground md:text-3xl">
									{section.title}
								</h2>

								{section.content && (
									<p className="text-base text-muted-foreground leading-relaxed">
										{section.content}
									</p>
								)}

								{section.subsections && (
									<div className="space-y-4">
										{section.subsections.map((subsection) => (
											<div
												className="rounded-lg border border-border/50 bg-card/30 p-4 transition-colors hover:bg-card/50"
												key={subsection.subtitle}
											>
												<h3 className="mb-2 font-semibold text-foreground text-lg">
													{subsection.subtitle}
												</h3>
												<p className="text-muted-foreground text-sm leading-relaxed md:text-base">
													{subsection.text}
												</p>
											</div>
										))}
									</div>
								)}
							</section>
						))}

						{/* Contact Section */}
						<section className="space-y-6 rounded-2xl border border-border/50 bg-linear-to-br from-primary/10 via-accent/5 to-primary/5 p-8 md:p-10">
							<div className="space-y-2">
								<h2 className="font-bold font-playfair text-2xl text-foreground">
									Questions About Our Privacy Policy?
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									If you have any questions or concerns about this Privacy
									Policy or our privacy practices, please contact us.
								</p>
							</div>

							<div className="space-y-3 text-sm md:text-base">
								<div>
									<p className="font-semibold text-foreground">Email:</p>
									<a
										className="text-primary hover:underline"
										href="mailto:privacy@atomhospital.com"
									>
										privacy@atomhospital.com
									</a>
								</div>
								<div>
									<p className="font-semibold text-foreground">Address:</p>
									<p className="text-muted-foreground">
										Atom Hospital
										<br />
										123 Healthcare Lane
										<br />
										Medical City, MC 12345
									</p>
								</div>
							</div>
						</section>

						{/* Footer Notice */}
						<div className="rounded-lg border border-border/50 bg-card/30 p-4 md:p-6">
							<p className="text-muted-foreground text-xs leading-relaxed md:text-sm">
								<strong>Policy Updates:</strong> We may update this Privacy
								Policy from time to time. We will notify you of any significant
								changes via email or prominent notice on our platform. Your
								continued use of our services after such modifications
								constitutes your acceptance of the updated Privacy Policy.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default PrivacyPolicy;
