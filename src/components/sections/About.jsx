import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const technicalSkills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "MongoDB",
    "SQL"
  ];

  const softSkills = [
    "Communication",
    "Leadership",
    "Problem-Solving",
    "Time Management",
    "Resilience & Continuous Learning",
    "Attention to Detail",
    "Adaptability"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              A Tech enthusiast skilled in web development with expertise in HTML, CSS, JavaScript, and modern frameworks. Passionate about technology and committed to creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"

                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelor of Engineering in Computer Science </strong> - Sathyabama Institute of Science and Technology (2021-2025) - 8.35 CGPA
                </li>
                <li>
                  <strong> Intermediate Education </strong> - SASI Junior College (2019-2021) - 9.4 CGPA
                </li>
                <li>
                  <strong> Secondary Education </strong> - Kimberley High School (2018-2019) - 9.7 CGPA
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    HCL Mini Project Internship
                  </h4>
                  <p>
                    Developed a Personnel Portfolio using HTML, CSS, and JavaScript
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    CODSOFT Virtual Internship
                  </h4>
                  <p>
                    Created professional portfolio websites and implemented various web development projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
