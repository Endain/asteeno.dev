import PrintableLink from "@/components/printable-link";
import SkillSet from "@/components/skill-set";
import EmploymentPeriod from "@/components/employment-period";
import Employer from "@/components/employer";
import Details from "@/components/details";
import Project from "@/components/project";
import Image from "next/image";
import me from './me.jpg'
import {DevicePhoneMobileIcon, EnvelopeIcon, GlobeAltIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <div className="flex flex-col justify-center h-full">
            <header className="flex flex-col bg-gradient-to-r from-zinc-950 to-gray-900">
                <div className="flex flex-row max-w-base-width self-center">
                    <div className="hidden print:flex md:flex print:basis-2/7 md:basis-2/7 p-8 justify-center">
                        <div className="flex flex-col aspect-square justify-center max-w-full">
                            <div className="flex flex-row aspect-square relative">
                                <Image className="absolute top-0 left-0 w-full h-full rounded-full object-cover"
                                       style={{"overflowClipMargin": "unset"}} src={me}
                                       alt="Austin Steeno"></Image>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col print:basis-5/7 md:basis-5/7 p-8 justify-center">
                        <h1 className="leading-none font-header font-medium whitespace-nowrap text-5xl print:text-4xl md:text-4xl text-white ">
                            Austin Steeno
                        </h1>
                        <h2 className="leading-none font-header whitespace-nowrap text-white text-2xl print:text-lg md:text-lg mb-6 print:mb-4 md:mb-4">
                            Senior Software Engineer | Frontend Focus
                        </h2>
                        <div className="leading-snug print:text-sm text-oxford-blue-50">
                            With 12 years of professional, hands-on experience, I am skilled in developing scalable, intuitive, high-performance
                            web applications. I advanced quickly at ServiceNow where my work was presented to founder
                            Fred Luddy, as well as showcased multiple times at the company's annual keynote. I also
                            spent 4 years at an IoT startup and assisted in its post-acquisition integration. I bring
                            deep expertise in frontend-focused development, data visualization, and interactive media,
                            supported by a strong design sensibility and a thorough understanding of the web platform
                            and its standards. I thrive when given autonomy and faced with complex problems and
                            unknowns, transforming <b>what if</b> into <b>what
                            is</b>.
                        </div>
                    </div>
                </div>
            </header>
            <main
                className="flex basis-auto flex-grow flex-col-reverse md:flex-row print:flex-row max-w-base-width self-center">

                <section className="flex flex-col basis-2/7 bg-zinc-50 pl-8 pr-2 pt-6 pb-10 print:pb-0 print:pr-8">

                    <section className="mb-8">
                        <h3 className="text-2xl font-header uppercase mb-3">Personals</h3>

                        <div className="flex flex-row space-x-1">
                            <MapPinIcon className="size-6 print:size-5 text-oxford-blue-700"></MapPinIcon>
                            <address className="not-italic">
                                <div className="mb-3 print:text-sm">Sacramento, California</div>
                            </address>
                        </div>

                        <div className="flex flex-row space-x-1">
                            <DevicePhoneMobileIcon
                                className="size-6 print:size-5 text-oxford-blue-700"></DevicePhoneMobileIcon>
                            <PrintableLink to="tel:+14256987713" className="mb-3 print:text-sm">+1 425 698
                                7713</PrintableLink>
                        </div>

                        <div className="flex flex-row space-x-1">
                            <EnvelopeIcon className="size-6 print:size-5 text-oxford-blue-700"></EnvelopeIcon>
                            <PrintableLink to="mailto:austin.steeno@gmail.com"
                                           className="mb-3 print:text-sm">austin.steeno@gmail.com</PrintableLink>
                        </div>

                        <div className="flex flex-row space-x-1">
                            <GlobeAltIcon className="size-6 print:size-5 text-oxford-blue-700"></GlobeAltIcon>
                            <PrintableLink to="https://asteeno.dev"
                                           className="mb-3 print:text-sm">asteeno.dev</PrintableLink>
                        </div>

                        <div className="flex flex-row space-x-1">
                            <svg className="m-0.5 size-5 print:size-4 fill-current oxford-blue-700" role="img"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"><title>GitHub</title>
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                            <PrintableLink to="https://github.com/endain"
                                           className="mb-3 print:text-sm">github.com/endain</PrintableLink>
                        </div>

                        <div className="flex flex-row space-x-1">
                            <svg className="m-0.5 size-5 print:size-4 fill-current oxford-blue-700" role="img"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>LinkedIn</title>
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <PrintableLink
                                to="https://www.linkedin.com/in/asteeno/"
                                className="print:text-sm">linkedin.com/in/asteeno/</PrintableLink>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-2xl font-header uppercase mb-3">Education</h3>

                        <h4 className="font-semibold">2010 - 2013</h4>
                        <h4 className="font-semibold">Arizona State University</h4>
                        <div className="print:text-sm">B.S.E. in Computer Systems Engineering</div>
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
                        <SkillSet className="mb-3">
                            <span>Java</span>
                            <span>Python</span>
                            <span>C#</span>
                            <span>SQL</span>
                            <span>NoSql</span>
                        </SkillSet>

                        <h4 className="font-semibold">Soft Skills</h4>
                        <SkillSet>
                            <span>Problem Solving</span>
                            <span>Attention To Detail</span>
                            <span>Critical Thinking</span>
                            <span>Self Management</span>
                            <span>Communication</span>
                            <span>Continuous Learning</span>
                            <span>Creativity</span>
                        </SkillSet>
                    </section>

                </section>

                <section className="flex flex-col bg-white basis-5/7 px-8 pt-6 pb-10 print:pb-0">

                    <section className="mb-8">
                        <h3 className="text-2xl font-header uppercase mb-3">Career Experience</h3>

                        <Employer link="https://corestack.io/">CoreStack</Employer>
                        <EmploymentPeriod role="Senior Software Engineer" start="2022" end="2025"></EmploymentPeriod>
                        <Details className="mb-6">Worked cross-functionally with existing engineering teams, product
                            managers and designers to refresh product frontend to be built on the Angular UI platform
                            developed at Optio3. Took ownership of a new dashboard drilldown system, refining use cases
                            and design and driving it from concept to release, adding immense value and marketability to
                            the corresponding major product release.
                        </Details>

                        <Employer
                            link="https://corestack.io/blog/corestack-accelerates-vision-and-growth-with-acquisition-of-optio3/">Optio3</Employer>
                        <EmploymentPeriod role="Senior Software Engineer" start="2018" end="2022"></EmploymentPeriod>
                        <Details className="mb-6">Fourth engineering hire. Developed advanced, home-grown,
                            high-performance
                            data visualization tools, enabling realtime visualization of large-scale datasets,
                            driving up platform value and enabling use of product by field technicians with mobile
                            devices. Expanded and relentlessly refined and optimized platform UI components, a key value
                            factor resulting in company acquisition.
                        </Details>

                        <Employer link="https://servicenow.com">ServiceNow</Employer>
                        <EmploymentPeriod role="Senior Software Development Engineer" start="2016"
                                          end="2018"></EmploymentPeriod>
                        <Details className="mb-2.5">Developed foundational data visualization components for the newly
                            formed Service Intelligence team, giving new and useful ways for customers to reason about
                            service status. Conducted hiring interviews and gave technical talks, increasing multiple
                            teams capacity for frontend development. Designed and implemented an extendable, low-code
                            data processing and visualization pipeline, unlocking new data analysis paradigms for
                            customers and laying the foundation for further machine learning features.
                        </Details>
                        <EmploymentPeriod role="Software Development Engineer" start="2014"
                                          end="2016"></EmploymentPeriod>
                        <Details className="mb-2.5">Lead engineer behind CMDB Service Mapping UI development (showcased
                            in Knowledge keynote). Travelled abroad to accelerate integration of acquired company
                            Neebula, rewrote their core graph render in JavaScript and conducted crash courses,
                            resulting in ahead-of-schedule integration and product release. Identified gaps in
                            transition to AngularJS frontend and created missing components, resulting in better product
                            continuity and accelerated development pace for the team.
                        </Details>
                        <EmploymentPeriod role="Associate Software Development Engineer" start="2013"
                                          end="2014"></EmploymentPeriod>
                        <Details>Bootstrapped a WYSIWYG dashboard system for the CMDB product, resulting in the green
                            light to develop cutting edge visualization and navigation features, proved the viability
                            and utility of D3 within the product space.
                        </Details>
                    </section>

                    <section>
                        <h3 className="text-2xl font-header uppercase mb-3">Freelance Projects</h3>

                        <Project date="2024">Video Processing Pipeline</Project>
                        <Details className="mb-6">Developed an automated video processing pipeline using FFMPEG and
                            Node.js, hosted on Firebase/GCP.
                        </Details>

                        <Project date="2023">Twitch Election System</Project>
                        <Details>Developed a scalable real-time voting and virtual currency system with dynamic
                            overlays, web-based control panels, a Twitch extension, and a cloud-hosted backend.
                        </Details>
                    </section>

                </section>

            </main>
        </div>
    );
}
