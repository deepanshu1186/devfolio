import type { JSX } from "react";

interface HeroProps {
    name: string;
    role: string;
    short: string;
    githubUrl?: string;
    cvUrl?: string;
    profileSrc?: string; // optional path to profile image in public/
}

export default function Hero({ name,
    role,
    short,
    githubUrl,
    cvUrl,
    profileSrc = "/avatar-placeholder.png"
}: Readonly<HeroProps>): JSX.Element {
    return (
        <section
            aria-label="Introduction"
            className="bg-gradient-to-b from-white to-slate-50 pb-12"
        >
            <div className="max-w-4xl mx-auto px-6 md:px-8 pt-14">
                <div className="bg-white shadow-md rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Left: text */}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                                Hi, I’m <span className="text-blue-600">{name}</span>
                            </h1>

                            <p className="text-lg text-slate-700 mt-4">{role}</p>

                            <p className="text-base text-slate-600 mt-4 max-w-2xl">
                                {short}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {githubUrl && (
                                    <a
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:opacity-90 transition"
                                    >
                                        View GitHub
                                    </a>
                                )}

                                {cvUrl && (
                                    <a
                                        href={cvUrl}
                                        className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
                                        download
                                    >
                                        Download CV
                                    </a>
                                )}

                                <a
                                    href="/projects"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    See Projects
                                </a>
                            </div>
                        </div>

                        {/* Right: profile card */}
                        <div className="w-full md:w-56 flex-shrink-0">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-1">
                                <div className="bg-white rounded-lg p-4 text-center">
                                    <img
                                        src={profileSrc}
                                        alt={`${name} profile`}
                                        width={96}
                                        height={96}
                                        className="w-24 h-24 mx-auto rounded-full bg-slate-200 object-cover"
                                    />
                                    <div className="mt-4">
                                        <div className="font-semibold text-slate-900">{name}</div>
                                        <div className="text-sm text-slate-600 mt-1">15+ years · Web Dev</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* flex */}
                </div> {/* card */}
            </div>
        </section>
    )
}