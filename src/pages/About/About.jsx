import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer , Problem Solver , Learner
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Pankaj Kumar Mahto, a passionate Full-Stack Developer
                specializing in building modern web applications and
                user-friendly interfaces.{" "}
                <span className="font-bold text-white">
                  Skilled in MERN stack and problem-solving with C++
                </span>
                , I enjoy tackling challenging algorithms and crafting
                efficient, scalable solutions.
              </p>
              <p className="text-white">
                My focus is on building efficient, user-friendly web
                applications. I specialize in React and the MERN stack, while
                honing my problem-solving skills with C++ and DSA. Currently,
                I’m expanding my experience to strengthen my full-stack
                development capabilities and deliver scalable, modern web
                solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a passion
                    for building modern web solutions and sharing knowledge with
                    the developer community. Skilled in the MERN stack and
                    problem-solving with C++, I strive to create efficient,
                    user-friendly applications that deliver real value.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Pankaj Kumar Mahto
                    </cite>
                    {/* <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">OlovaJS</span>
                    </div> */}
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
