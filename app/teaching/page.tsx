import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching experience in political science, political economy, statistics, and social science computing by Sujin Cha.",
  alternates: { canonical: "/teaching/" },
};

const institutions = [
  {
    name: "University of Michigan",
    courses: [
      {
        title: "Introduction to World Politics",
        meta: "Course instructor: Barbara Koremenos",
      },
      {
        title: "The Use of Social Science Computer Programs",
        meta: "Instructor · Graduate course",
      },
      {
        title: "Mathematics for Political Science",
        meta: "Course instructor: Iain Osgood · Graduate course",
      },
      {
        title: "Strategic Thinking in World Politics",
        meta: "Course instructor: Ishan Joshi",
      },
      {
        title: "International Economic Relations",
        meta: "Course instructors: Ishan Joshi (Fall), Iain Osgood (Winter)",
      },
      {
        title: "Game Theory and Formal Models",
        meta: "Course instructor: Iain Osgood",
      },
    ],
  },
  {
    name: "ICPSR Summer Program",
    courses: [
      {
        title: "Bayesian Modeling for the Social Sciences I",
        meta: "Course instructor: Justin Esarey",
      },
      {
        title: "Advanced Time Series Analysis",
        meta: "Course instructors: Paul Kellstedt and Matthew Lebo",
      },
    ],
  },
  {
    name: "Korea University",
    courses: [
      {
        title: "Political Methodology",
        meta: "Course instructor: Sung Eun Kim",
      },
    ],
  },
];

export default function TeachingPage() {
  return (
    <>
      <SiteHeader active="teaching" />
      <main className="page-shell" id="main-content">
        <div className="content-page">
          <p className="eyebrow">Instruction</p>
          <h1 className="page-title">Teaching</h1>
          <p className="page-intro">
            I have taught undergraduate and graduate courses spanning world politics,
            international economic relations, game theory, political methodology,
            quantitative methods, and social science computing.
          </p>

          {institutions.map((institution) => {
            const headingId = `${institution.name.replaceAll(" ", "-").toLowerCase()}-heading`;
            return (
              <section
                className="institution-block"
                aria-labelledby={headingId}
                key={institution.name}
              >
                <h2 className="institution-name" id={headingId}>
                  {institution.name}
                </h2>
                <ul className="course-list">
                  {institution.courses.map((course) => (
                    <li className="course-item" key={course.title}>
                      <div>
                        <h3 className="course-title">{course.title}</h3>
                        <p className="course-meta">{course.meta}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
