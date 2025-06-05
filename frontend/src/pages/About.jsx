import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);

  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        Hello! I'm{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          Satish Naik
        </strong>
        , a passionate Computer Science Engineering student who loves building impactful solutions that solve real-world problems. I believe in continuous learning, collaboration, and using technology to make lives easier.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">Technical Expertise:</h2>
      <p>
        <strong>Languages & Tools:</strong> C, C++, Python, JavaScript, SQL, Git. <br />
        <strong>Frameworks & Libraries:</strong> React, Next.js, Express, Django, Node.js, MongoDB, Tailwind CSS. <br />
        <strong>Other Skills:</strong> REST APIs, Firebase, Machine Learning basics, UI/UX Design (Figma), Cloudflare, Render, Vercel.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">Projects & Contributions:</h2>
      <p>
        Built <strong>Next Bite</strong>, a real-time food tracking system for hostels & PGs to manage daily food consumption and avoid wastage. <br />
        Created <strong>MedCare</strong>, a MERN-based healthcare app that allows users to book lab tests and uses ML to analyze reports and provide health tips. <br />
        Developed <br />
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">Leadership & Involvement:</h2>
      <p>
        Technical Coordinator at LCC, leading workshops and technical initiatives. <br />
        Organized national-level events like <strong>HackElite</strong> and participated in FOSS Camp, FOSS Nytes, and more. <br />
        Represented projects during Open Day, NAAC visits, and received appreciation from HOD and VC.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">Achievements:</h2>
      <p>
        Secured 1st rank in SSLC with 96.96% and 5th rank in PU with 94.33%. <br />
        Awarded the <strong>Rajya Puraskar</strong> in Scouts & Guides and completed NCC 'B' Certificate. <br />
        Winner of multiple hackathons and coding contests hosted by CSI and LCC.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">What Drives Me:</h2>
      <p>
        I’m curious by nature and enjoy solving problems—whether it's through code, collaboration, or creativity. I thrive in fast-paced environments, and I’m always looking for opportunities to grow, contribute, and build things that matter.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">Interests Beyond Tech:</h2>
      <p>
        Beyond development, I love organizing events, guiding students, and engaging in community building. I enjoy exploring new ideas, from fashion and public speaking to tech for social impact.
      </p>
    </div>
  );
}

export default About;
