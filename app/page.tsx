import type { Metadata } from "next";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sujin Cha, a Ph.D. candidate in Political Science and Gerald R. Ford Presidential Fellow at the University of Michigan.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <SiteHeader active="about" />
      <main className="page-shell" id="main-content">
        <div className="home-grid">
          <aside className="profile-column" aria-label="Professional profile">
            <figure className="portrait-frame">
              <img
                className="portrait"
                src="/assets/sujin-cha-headshot.jpg"
                alt="Portrait of Sujin Cha"
                width="2115"
                height="2644"
                sizes="(max-width: 580px) 80vw, (max-width: 820px) 255px, 300px"
                fetchPriority="high"
              />
            </figure>
            <div className="profile-details">
              <p className="profile-line">Ph.D. Candidate</p>
              <a
                className="profile-link"
                href="https://lsa.umich.edu/polisci"
                target="_blank"
                rel="noreferrer"
              >
                Department of Political Science
              </a>
              <p className="profile-line profile-line-spaced">M.A. Student</p>
              <a
                className="profile-link"
                href="https://lsa.umich.edu/stats"
                target="_blank"
                rel="noreferrer"
              >
                Department of Statistics
              </a>
              <a
                className="profile-link"
                href="https://umich.edu"
                target="_blank"
                rel="noreferrer"
              >
                University of Michigan
              </a>
              <div className="profile-contact-links">
                <a className="profile-link" href="mailto:sujincha@umich.edu">
                  sujincha@umich.edu
                </a>
                <a
                  className="profile-link profile-linkedin"
                  href="https://www.linkedin.com/in/sujin-cha-290460424"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="linkedin-icon" aria-hidden="true">
                    in
                  </span>
                  LinkedIn
                </a>
                <a
                  className="profile-link"
                  href="/assets/Sujin_Cha_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  CV
                </a>
              </div>
              <div className="profile-interests">
                <h2 className="profile-interests-heading">Research Interests</h2>
                <ul className="research-tags">
                  <li>Political Economy</li>
                  <li>Industrial Policy</li>
                  <li>Trade &amp; Investment</li>
                  <li>Global Supply Chains</li>
                  <li>Money in Politics</li>
                  <li>Korean Politics</li>
                </ul>
              </div>
            </div>
          </aside>

          <section aria-label="About Sujin Cha">
            <div className="body-copy home-body-copy">
              <p>
                <strong className="welcome-inline">Welcome!</strong> I am a Ph.D.
                candidate in Political Science and a Gerald R. Ford Presidential Fellow
                at the University of Michigan. I specialize in international and
                comparative political economy and am{" "}
                <span className="job-market-note">
                  on the 2026–27 academic job market
                </span>.
              </p>
              <p>
                My research examines how global economic integration transforms
                relationships among governments, firms, and citizens. My dissertation,{" "}
                <em>
                  Beyond Nationality: Domestic Embeddedness and the Politics of
                  Industrial Subsidy
                </em>
                , investigates how governments and the public decide which firms deserve
                industrial support when production crosses national borders. Combining
                original firm-level data with preregistered survey experiments, I show
                that firm nationality matters, but visible contributions to the domestic
                economy, particularly employment and domestic sourcing, can be even more
                consequential. My broader research examines the politics of trade,
                multinational firms, technological innovation, and government-business
                relations.
              </p>
              <p>
                My work has been published in the{" "}
                <em>Review of International Political Economy</em>,{" "}
                <em>International Interactions</em>,{" "}
                <em>Review of International Organizations</em>,{" "}
                <em>Journal of International Development</em>, and <em>Asian Survey</em>.
                In my teaching, I bring together substantive questions and analytical
                tools across international relations, political economy, and political
                methodology. I have taught nine undergraduate and graduate courses,
                including courses in world politics, international economic relations,
                game theory, quantitative methods, and social science computing.
              </p>
              <p>
                I hold a B.A. and M.A. in Political Science and International Relations
                from Korea University. Before graduate school, I worked at the United
                Nations Industrial Development Organization.
              </p>
              <p>
                Outside of research and teaching, I enjoy exploring new cafés and
                bakeries, cooking, and gardening.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
