import PrintableLink from "@/components/printable-link";
import SkillSet from "@/components/skill-set";
import EmploymentPeriod from "@/components/employment-period";
import Employer from "@/components/employer";
import Details from "@/components/details";
import Project from "@/components/project";

export default function Page() {
    return (
        <div className="flex flex-col justify-center h-full">
            <header className="flex flex-col pt-4 pb-10 sm:py-8 bg-steel-blue">
                <div
                    className="flex flex-col px-2 sm:px-10 print:px-12 pt-2 pb-6 sm:py-6 sm:border-8 print:border-[6px] border-white self-center relative">
                    <h1 className="self-center font-header font-medium text-5xl sm:text-6xl print:text-5xl mb-1 text-white">
                        Austin Steeno
                    </h1>
                    <h2 className="self-center font-header font-medium absolute top-full left-1/2 whitespace-nowrap -translate-y-1/2 -translate-x-1/2 bg-white text-steel-blue text-xl sm:text-2xl print:text-lg py-0.5 px-3">
                        Senior Software Engineer
                    </h2>
                </div>
            </header>
            <main
                className="flex basis-auto flex-grow flex-col-reverse md:flex-row print:flex-row max-w-base-width self-center">

                <section className="flex flex-col basis-1/3 bg-stone-50 px-8 py-10 print:pb-0 print:pt-6">

                    <section className="mb-8">
                        <h3 className="text-2xl font-header uppercase mb-3">Personals</h3>

                        <h4 className="font-semibold">Address</h4>
                        <address className="not-italic">
                            <div>12027 78th Ave S</div>
                            <div className="mb-3">Seattle WA 98178</div>
                        </address>

                        <h4 className="font-semibold">Phone</h4>
                        <PrintableLink to="tel:+14256987713" className="mb-3">+1 425 698 7713</PrintableLink>

                        <h4 className="font-semibold">Email</h4>
                        <PrintableLink to="mailto:austin.steeno@gmail.com"
                                       className="mb-3">austin.steeno@gmail.com</PrintableLink>

                        <div className="font-semibold">Website</div>
                        <PrintableLink to="https://asteeno.dev" className="mb-3">asteeno.dev</PrintableLink>

                        <div className="font-semibold">Github</div>
                        <PrintableLink to="https://github.com/endain">github.com/endain</PrintableLink>
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
                        <SkillSet>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </SkillSet>
                        <SkillSet>
                            <PrintableLink to="https://www.typescriptlang.org/">TypeScript</PrintableLink>
                            <PrintableLink to="https://sass-lang.com/">Sass</PrintableLink>
                            <span>Canvas</span>
                            <span>WebGL</span>
                        </SkillSet>
                        <SkillSet className="mb-3">
                            <span>Websockets</span>
                            <span>Webhooks</span>
                            <span>HTTP</span>
                        </SkillSet>

                        <h4 className="font-semibold">Frontend</h4>
                        <SkillSet>
                            <PrintableLink to="https://angular.dev/">Angular</PrintableLink>
                            <PrintableLink to="https://react.dev/">React</PrintableLink>
                            <PrintableLink to="https://nextjs.org/">Next.js</PrintableLink>
                        </SkillSet>
                        <SkillSet className="mb-3">
                            <PrintableLink to="https://d3js.org/">D3</PrintableLink>
                            <PrintableLink to="https://www.highcharts.com/">Highcharts</PrintableLink>
                            <PrintableLink to="https://threejs.org/">Three.js</PrintableLink>
                            <PrintableLink to="https://pixijs.com/">Pixi.js</PrintableLink>
                        </SkillSet>

                        <h4 className="font-semibold">Backend</h4>
                        <SkillSet className="mb-3">
                            <PrintableLink to="https://nodejs.org/en">Node.js</PrintableLink>
                            <PrintableLink to="https://nestjs.com/">NestJS</PrintableLink>
                            <PrintableLink to="https://www.mysql.com/">MySQL</PrintableLink>
                            <PrintableLink to="https://redis.io/">Redis</PrintableLink>
                        </SkillSet>

                        <h4 className="font-semibold">Tools</h4>
                        <SkillSet>
                            <PrintableLink to="https://git-scm.com/">Git</PrintableLink>
                            <PrintableLink to="https://ngrok.com/">Ngrok</PrintableLink>
                            <PrintableLink to="https://www.jetbrains.com/webstorm/">Webstorm</PrintableLink>
                        </SkillSet>
                        <SkillSet className="mb-3">
                            <PrintableLink to="https://www.figma.com/">Figma</PrintableLink>
                            <PrintableLink to="https://www.docker.com/">Docker</PrintableLink>
                            <PrintableLink to="https://www.ffmpeg.org/">FFmpeg</PrintableLink>
                        </SkillSet>

                        <h4 className="font-semibold">Cloud Platforms</h4>
                        <SkillSet className="mb-3">
                            <PrintableLink to="https://firebase.google.com/">Firebase</PrintableLink>
                            <PrintableLink to="https://cloud.google.com/">GCP</PrintableLink>
                            <PrintableLink to="https://aws.amazon.com//">AWS</PrintableLink>
                        </SkillSet>

                        <h4 className="font-semibold">Other</h4>
                        <SkillSet>
                            <span>Java</span>
                            <span>Python</span>
                            <span>C#</span>
                            <span>SQL</span>
                            <span>NoSql</span>
                        </SkillSet>
                    </section>

                </section>

                <section className="flex flex-col bg-white basis-2/3 px-8 py-10 print:pb-0 print:pt-6">

                    <section className="mb-8">
                        <h3 className="text-2xl font-header uppercase mb-3">Career Experience</h3>

                        <Employer link="https://corestack.io/">CoreStack</Employer>
                        <EmploymentPeriod role="Senior Software Engineer" start="2022" end="Present"></EmploymentPeriod>
                        <Details className="mb-6">Transitioned as key asset during acquisition and integration of
                            Optio3, performed front-end design and implementation using Angular and TypeScript,
                            contributed to legacy PHP codebase, focused on performant, intuitive data visualizations,
                            dashboard development and creation of core UI components and transitioning existing features
                            to the new component framework.
                        </Details>

                        <Employer
                            link="https://corestack.io/blog/corestack-accelerates-vision-and-growth-with-acquisition-of-optio3/">Optio3</Employer>
                        <EmploymentPeriod role="Senior Software Engineer" start="2018" end="2022"></EmploymentPeriod>
                        <Details className="mb-6">Worked in a lean, high-performing, agile startup environment,
                            performed UI design and implementation using Angular and TypeScript, created advanced and
                            highly performant data visualization tools and improved on bespoke data visualization tools
                            rendered using canvas, as well as created, improved and maintained various core UI
                            components, and contributed to backend platform in Java and Python.
                        </Details>

                        <Employer link="https://servicenow.com">ServiceNow</Employer>
                        <EmploymentPeriod role="Senior Software Development Engineer" start="2016"
                                          end="2018"></EmploymentPeriod>
                        <Details className="mb-2.5">Continued core UI component development, created data visualization
                            and data analytics tools for CMDB, designed and implemented customizable no-code data
                            processing and visualization pipeline, performed hiring interviews.
                        </Details>
                        <EmploymentPeriod role="Software Development Engineer" start="2014"
                                          end="2016"></EmploymentPeriod>
                        <Details className="mb-2.5">Lead development of CMDB Service Mapping (showcased in Knowledge
                            keynote), assisted with integration and development of Neebula for service mapping,
                            continued CMDB application development, created core UI components in Angular.js for
                            widespread use in the CMDB application.
                        </Details>
                        <EmploymentPeriod role="Associate Software Development Engineer" start="2013"
                                          end="2014"></EmploymentPeriod>
                        <Details>Prototyped major new feature "CMDB Dashboard" utilizing D3 and bespoke drag and drop
                            system, performed additional CMDB application development.
                        </Details>
                    </section>

                    <section>
                        <h3 className="text-2xl font-header uppercase mb-3">Freelance Projects</h3>

                        <Project date="2024">Video Processing Pipeline</Project>
                        <Details className="mb-6"> Created an automated video processing pipeline using FFMPEG and
                            node.js, hosted on
                            Firebase. The system took raw sports game footage from Firestore and referenced against a
                            gameplay rundown stored in noSQL, used FFMPEG to generate short game highlight video clips,
                            optimized them for streaming and stored the resulting clips and associated metadata in
                            Firestore and noSQL. Containerized application using Docker, ran on Google Cloud Run using
                            nightly trigger.
                        </Details>

                        <Project date="2023">Twitch Election System</Project>
                        <Details>Created a scalable and extensible real-time voting and virtual
                            currency system including dynamic overlays, cloud-based control panels, a Twitch extension
                            and cloud-hosted backend. Tracked viewers and awarded virtual currency based on
                            subscriptions purchased. Kept extensive, detailed transaction records to provide
                            leaderboards and breakdowns. Created a build tool that generated a type-safe ORM based on
                            SQL schema. Utilized varied skills, including Websockets, Webhooks, API development and
                            integration, Node.js, Typescript, WebGL and shaders, SQL and more.
                        </Details>
                    </section>

                </section>

            </main>
        </div>
    );
}
