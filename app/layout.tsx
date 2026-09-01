import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sujincha.com"),
  title: {
    default: "Sujin Cha | Political Scientist",
    template: "%s | Sujin Cha",
  },
  description:
    "Sujin Cha is a Ph.D. candidate in Political Science at the University of Michigan studying international and comparative political economy.",
  authors: [{ name: "Sujin Cha", url: "https://sujincha.com" }],
  creator: "Sujin Cha",
  other: {
    linkedin: "https://www.linkedin.com/in/sujin-cha-290460424",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sujin Cha",
    title: "Sujin Cha | Political Scientist",
    description:
      "Research in international and comparative political economy, industrial policy, trade, and government-business relations.",
    url: "https://sujincha.com",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sujin Cha",
  url: "https://sujincha.com",
  image: "https://sujincha.com/assets/sujin-cha-headshot.jpg",
  email: "mailto:sujincha@umich.edu",
  sameAs: ["https://www.linkedin.com/in/sujin-cha-290460424"],
  jobTitle: "Ph.D. Candidate in Political Science",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Michigan",
    url: "https://umich.edu",
  },
  knowsAbout: [
    "Political Economy",
    "Industrial Policy",
    "International Trade",
    "Global Supply Chains",
    "Government-Business Relations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
