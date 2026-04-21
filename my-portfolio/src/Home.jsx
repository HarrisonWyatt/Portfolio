export default function PortfolioHomePage() {
  const projectTypes = [
    {
      title: 'Websites',
      description:
        'Responsive websites, landing pages, business sites, and front-end builds.',
      link: '/websites',
      emoji: '🌐',
    },
    {
      title: 'Software',
      description:
        'Apps, tools, full-stack platforms, and problem-solving projects.',
      link: '/software',
      emoji: '💻',
    },
    {
      title: 'Cloud',
      description:
        'Basics and fundamentals of cloud computing',
      link: '/cloud',
      emoji: '🎨',
    },
    {
      title: 'Cyber / Security',
      description:
        'Security labs, network projects, monitoring, and technical investigations.',
      link: '/security',
      emoji: '🛡️',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold tracking-wide">
            Harrison Wyatt
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Portfolio Website
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              I build websites, software, and practical digital solutions.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Welcome to my work in progress portfolio. This site showcases the projects I have built,
              the problems I like solving, and the skills I use across development,
              design, and technical work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4 font-mono text-sm text-slate-300">
                <p>&lt;developer&gt;</p>
                <p className="pl-4">Building clean, useful, and modern projects.</p>
                <p className="pl-4">React • C# • .NET • Firebase • Security</p>
                <p>&lt;/developer&gt;</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Project Categories
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Explore my work by project type
            </h2>
            <p className="mt-4 text-slate-300">
              Choose a category below to highlight the kind of work you want people to
              see first.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {projectTypes.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10"
              >
                <div className="mb-4 text-4xl">{project.emoji}</div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>
                <span className="mt-6 inline-block font-semibold text-sky-400">
                  View category →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="mt-4 leading-8 text-slate-300">
                I enjoy building practical, polished projects that solve real problems.
                My work includes web development, software projects, technical problem
                solving, and security-focused work. This portfolio is a place to show
                what I have built and how I approach each challenge.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 pb-24">
          <div className="rounded-3xl border border-sky-400/20 bg-sky-500/10 p-8 md:p-12">
            <h2 className="text-3xl font-bold">Let’s work together</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
        
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:itsharrisonwyatt@gmail.com"
                className="rounded-2xl mx-auto bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Email Me
              </a>
              <a
                href="https://github.com/harrisonwyatt"
                className="rounded-2xl mx-auto border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
