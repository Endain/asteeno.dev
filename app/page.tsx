export default function Page() {
    return (
        <div className="flex flex-col justify-center h-full">
            <header className="flex flex-col py-8 bg-steel-blue">
                <div className="flex flex-col px-10 py-6 border-8 border-white self-center relative">
                    <h1 className="self-center font-header font-medium text-6xl mb-1 text-white">Austin Steeno</h1>
                    <h2 className="self-center font-header font-medium absolute top-full left-1/2 whitespace-nowrap -translate-y-1/2 -translate-x-1/2 bg-white text-steel-blue text-2xl py-0.5 px-3">Senior
                        Software Engineer</h2>
                </div>
            </header>
            <main className="flex basis-auto flex-grow flex-row max-w-base-width self-center">

                <section className="flex flex-col basis-1/3 bg-stone-50 px-8 py-10">

                    <section className="mb-8">
                        <h3 className="text-2xl font-header uppercase mb-3">Contact</h3>

                        <h4 className="font-semibold">Address</h4>
                        <address className="not-italic">
                            <div>12027 78th Ave S</div>
                            <div className="mb-3">Seattle WA 98178</div>
                        </address>

                        <h4 className="font-semibold">Phone</h4>
                        <a className="mb-3 inline-block border-b-neutral-300 border-b-2 border-dashed"
                           href="tel:+14256987713">+1 425 698 7713</a>

                        <h4 className="font-semibold">Email</h4>
                        <a className="mb-3 inline-block border-b-neutral-300 border-b-2 border-dashed"
                           href="mailto:austin.steeno@gmail.com">austin.steeno@gmail.com</a>

                        <div className="font-extrabold">Github</div>
                        <a className="inline-block border-b-neutral-300 border-b-2 border-dashed"
                           href="https://github.com/endain">github.com/endain</a>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-2xl font-header uppercase mb-3">Education</h3>

                        <h4 className="font-semibold">2010 - 2013</h4>
                        <h4 className="font-semibold">Arizona State University</h4>
                        <div>B.S.E. in Computer Systems Engineering</div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-header uppercase mb-3">Skills</h3>

                        <h4 className="font-semibold">Core Web Technologies</h4>
                        <div>HTML5, CSS and Javascript</div>
                        <div>Typescript and Sass</div>
                        <div className="mb-3">Websockets</div>

                        <h4 className="font-semibold">Frameworks and Libraries</h4>
                        <div className="mb-3">Angular, D3 and Highcharts</div>

                        <h4 className="font-semibold">Graphics</h4>
                        <div className="mb-3">Three.js, Pixi.js, Canvas, WebGL</div>

                        <h4 className="font-semibold">Backend</h4>
                        <div className="mb-3">Node, NestJS, MySQL, Redis</div>

                        <h4 className="font-semibold">Tools</h4>
                        <div>Git, Ngrok, Webstorm</div>
                    </section>

                </section>

                <section className="flex flex-col bg-white basis-2/3 px-8 py-10">

                    <section className="mb-8">
                        <h3 className="text-2xl font-header uppercase mb-3">Work</h3>

                        <h4 className="font-semibold">September 2022 - Present</h4>
                        <h4 className="font-semibold mb-1">
                            <span>Senior Software Engineer</span>
                            <span className="text-neutral-400 mx-1">@</span>
                            <a href="https://corestack.io"
                               className="border-b-neutral-300 border-b-2 border-dashed">Corestack</a>
                        </h4>
                        <div className="mb-6">Transitioned as key asset during acquisition of Optio3. Frontend
                            design and
                            implementation using Angular, Typescript, PHP, and Python and other technologies. Currently
                            focusing
                            on performant, intuitive visualizations, customizable dashboards and tools to drive quick
                            understanding and resolution of cloud cost anomalies.
                        </div>

                        <h4 className="font-semibold">June 2018 - August 2022</h4>
                        <h4 className="font-semibold mb-1">
                            <span>Senior Software Engineer</span>
                            <span className="text-neutral-400 mx-1">@</span>
                            <a href="https://corestack.io/blog/corestack-accelerates-vision-and-growth-with-acquisition-of-optio3/?1/"
                               className="border-b-neutral-300 border-b-2 border-dashed">Optio3</a>
                        </h4>
                        <div className="mb-6">Performed UI design and implementation using Angular and
                            Typescript, created
                            performant and bespoke canvas-based date visualization tools. Created clean, complex and
                            feature-rich UI components in a small, high performing startup team.
                        </div>

                        <h4 className="font-semibold">July 2013 - June 2018</h4>
                        <h4 className="font-semibold mb-1">
                            <span>Senior Software Engineer</span>
                            <span className="text-neutral-400 mx-1">@</span>
                            <a href="https://servicenow.com"
                               className="border-b-neutral-300 border-b-2 border-dashed">ServiceNow</a>
                        </h4>
                        <div>Lead UI and UX efforts for the CMDB team and newly formed Data Analytics
                            and AI team.
                            Created web-based data visualization tools for CMDB, conducted hiring interviews, led
                            migration of
                            UI to Angular.js framework and assisted in integration of acquired company Neebula.
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-header uppercase mb-3">Projects</h3>

                        <h4 className="font-semibold mb-1">Weekly Election System | Twitch | 2023</h4>
                        <div className="mb-2">A scalable and extensible realtime voting system including dynamic
                            overlays,
                            web based control panels, an extension and hosted backend. Allowed chat to vote weekly for a
                            specific character to be "captain" of the stream for the week.
                        </div>
                        <ul className="mb-6 pl-4">
                            <li className="list-disc">Dynamic overlays using a combination of CSS and WebGL</li>
                            <li className="list-disc">Polished extension for user voting, leaderboards and character
                                information in
                                realtime using websockets
                            </li>
                            <li className="list-disc">Node + NestJS based backend, MySQL database, REST APIs and
                                Websockets,
                                custom CLI
                                tools, all Typescript
                            </li>
                        </ul>

                        <h4 className="font-semibold mb-1">Clip Manager Extension | Twitch, Chrome | 2016</h4>
                        <div>Created a Chrome extension that would listen for any clips taken and
                            automatically
                            save the details into local storage. Provided a clean, easy-to-use interface to search,
                            filter, view
                            and even download clips.
                        </div>
                    </section>

                </section>

            </main>
        </div>
    );
}
