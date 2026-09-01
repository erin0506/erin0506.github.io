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
        code: "PS160",
        title: "Introduction to World Politics",
        meta: "Course instructor: Barbara Koremenos",
        term: "Winter 2025",
        year: "2025",
      },
      {
        code: "PS514",
        title: "The Use of Social Science Computer Programs",
        meta: "Instructor · Graduate course",
        term: "Winter 2024",
        year: "2024",
      },
      {
        code: "PS598",
        title: "Mathematics for Political Science",
        meta: "Course instructor: Iain Osgood · Graduate course",
        term: "Fall 2023",
        year: "2023",
      },
      {
        code: "PS489",
        title: "Strategic Thinking in World Politics",
        meta: "Course instructor: Ishan Joshi",
        term: "Winter 2023",
        year: "2023",
      },
      {
        code: "PS369",
        title: "International Economic Relations",
        meta: "Course instructors: Ishan Joshi (Fall), Iain Osgood (Winter)",
        term: "Fall & Winter 2022",
        year: "2022",
      },
      {
        code: "PS490",
        title: "Game Theory and Formal Models",
        meta: "Course instructor: Iain Osgood",
        term: "Fall 2021",
        year: "2021",
      },
    ],
  },
  {
    name: "ICPSR Summer Program",
    courses: [
      {
        title: "Bayesian Modeling for the Social Sciences I",
        meta: "Course instructor: Justin Esarey",
        term: "2023",
        year: "2023",
      },
      {
        title: "Advanced Time Series Analysis",
        meta: "Course instructors: Paul Kellstedt and Matthew Lebo",
        term: "2022",
        year: "2022",
      },
    ],
  },
  {
    name: "Korea University",
    courses: [
      {
        title: "Political Methodology",
        meta: "Course instructor: Sung Eun Kim",
        term: "2019",
        year: "2019",
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
                      <h3 className="course-title">
                        {"code" in course && course.code ? (
                          <span className="course-code">{course.code}: </span>
                        ) : null}
                        {course.title}{" "}
                        <time className="course-term" dateTime={course.year}>
                          ({course.term})
                        </time>
                      </h3>
                      <p className="course-meta">{course.meta}</p>
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
