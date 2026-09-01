import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Publications, working papers, and ongoing research by political scientist Sujin Cha.",
  alternates: { canonical: "/research/" },
};

const publications = [
  {
    year: "2026",
    title: "Rapidly innovating firms: patent lifecycle and support for trade and IP enforcement",
    href: "https://doi.org/10.1080/09692290.2025.2581119",
    authors: "Sujin Cha, Jieun Lee, Iain Osgood, and Sojun Park",
    venue: "Review of International Political Economy 33(2), 573–607",
  },
  {
    year: "2026",
    title: "Divided industries, special interest institutions, and trade policy",
    href: "https://doi.org/10.1080/03050629.2025.2584980",
    authors: "Sujin Cha and Iain Osgood",
    venue: "International Interactions 52(1), 1–31",
  },
  {
    year: "2024",
    title: "Chinese aid and corruption in African local governments",
    href: "https://doi.org/10.1002/jid.3829",
    authors: "Sujin Cha",
    venue: "Journal of International Development 36(1), 587–605",
  },
  {
    year: "2023",
    title: "Losing Hearts and Minds?: Unpacking the Effects of Chinese Soft Power Initiatives in Africa",
    href: "https://doi.org/10.1525/as.2022.1722144",
    authors: "Sujin Cha, Yehzee Ryoo, and Sung Eun Kim",
    venue: "Asian Survey 63(1), 1–30",
  },
  {
    year: "2022",
    title: "Do Voters Reward Politicians for Trade Liberalization? Evidence from South Korea",
    href: "https://doi.org/10.1007/s11558-021-09442-0",
    authors: "Sung Eun Kim and Sujin Cha",
    venue: "The Review of International Organizations 17(4), 751–780",
  },
];

const workingPapers = [
  {
    title: "Beyond Nationality: Domestic Embeddedness and Industrial Subsidies",
    status: "Under review",
  },
  {
    title: "Global Firms, Domestic Jobs: Public Support for Industrial Subsidies",
    status: "Under review",
  },
];

const worksInProgress = [
  {
    title: "Global Firms and Foreign Talent: Analysis Using H-1B Visa Database",
    collaborators: "with Iain Osgood",
  },
  {
    title: "Revolving Doors in US Trade and Investment Policy",
    collaborators: "with Sojun Park",
  },
  {
    title: "Public Views on Industrial Policy: National Identity or Economic Returns?",
    collaborators: "with Yehzee Ryoo",
  },
  {
    title: "The Ties That Bind and Break: Chaebol and Politician Collusion in Korea",
    collaborators: "with Chloe Ahn",
  },
  {
    title: "Decoding the Matrix: Evolution of Business-Political Networks in Korea",
    collaborators: "with Hanna Lee",
  },
];

function highlightName(authors: string) {
  const pieces = authors.split("Sujin Cha");
  return pieces.flatMap((piece, index) =>
    index === pieces.length - 1
      ? [piece]
      : [
          piece,
          <span className="author-self" key={`name-${index}`}>
            Sujin Cha
          </span>,
        ],
  );
}

export default function ResearchPage() {
  return (
    <>
      <SiteHeader active="research" />
      <main className="page-shell" id="main-content">
        <div className="content-page">
          <p className="eyebrow">Scholarship</p>
          <h1 className="page-title">Research</h1>
          <p className="page-intro">
            My research examines how states and citizens evaluate firms in an era of
            globally fragmented production, with a focus on industrial policy, trade,
            domestic employment, and government-business relations.
          </p>

          <section className="content-section" aria-labelledby="dissertation-heading">
            <div className="section-heading-row">
              <h2 className="section-heading" id="dissertation-heading">
                Dissertation
              </h2>
            </div>
            <article className="dissertation-entry">
              <h3 className="dissertation-title">
                Beyond Nationality: Domestic Embeddedness and Industrial Subsidies
              </h3>
              <p className="dissertation-summary">
                Governments routinely subsidize foreign firms, even as industrial policy
                is justified in terms of national economic development. I argue that
                subsidy support depends not simply on firm nationality but on domestic
                embeddedness—the extent to which firms generate visible domestic economic
                benefits. Using firm-level data on U.S. subsidies from 2000–2023, I show
                that foreign firms receive fewer and substantially smaller subsidies, but
                this disadvantage narrows among labor-intensive firms. Foreign supplier
                dependence, by contrast, does not reduce government support. Two
                preregistered survey experiments show that citizens similarly prioritize
                domestic economic contributions: foreign workforces and suppliers
                substantially reduce support regardless of firm nationality, while the
                effect of nationality is smaller and less consistent. Together, the
                findings show that governments and citizens both look beyond nationality,
                particularly to domestic employment, although they weigh supply chains
                differently. Industrial policy therefore navigates economic
                interdependence by defining which activities of globally integrated firms
                count as sufficiently domestic to warrant public support.
              </p>
            </article>
          </section>

          <section className="content-section" aria-labelledby="publications-heading">
            <div className="section-heading-row">
              <h2 className="section-heading" id="publications-heading">
                Publications
              </h2>
              <span className="section-count">5 peer-reviewed articles</span>
            </div>
            <ol className="publication-list">
              {publications.map((publication) => (
                <li className="publication-item" key={publication.href}>
                  <div className="publication-year">{publication.year}</div>
                  <article>
                    <h3 className="publication-title">
                      <a href={publication.href} target="_blank" rel="noreferrer">
                        {publication.title} <span aria-hidden="true">↗</span>
                      </a>
                    </h3>
                    <p className="publication-authors">
                      {highlightName(publication.authors)}
                    </p>
                    <p className="publication-venue">
                      <em>{publication.venue}</em>
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </section>

          <section className="content-section" aria-labelledby="working-papers-heading">
            <div className="section-heading-row">
              <h2 className="section-heading" id="working-papers-heading">
                Working Papers
              </h2>
              <span className="section-count">2 papers</span>
            </div>
            <ul className="project-list">
              {workingPapers.map((paper) => (
                <li className="project-item" key={paper.title}>
                  <h3 className="project-title">
                    {paper.title}
                    <span className="status-badge">{paper.status}</span>
                  </h3>
                </li>
              ))}
            </ul>
          </section>

          <section className="content-section" aria-labelledby="progress-heading">
            <div className="section-heading-row">
              <h2 className="section-heading" id="progress-heading">
                Work in Progress
              </h2>
              <span className="section-count">Current projects</span>
            </div>
            <ul className="project-list">
              {worksInProgress.map((project) => (
                <li className="project-item" key={project.title}>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-meta">{project.collaborators}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
