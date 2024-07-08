import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Resume.css';

const Resume = () => {
    const headerSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 });
    const sectionSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1000 });

    return (
        <animated.div className="resume-container" style={headerSpring}>
            <animated.header style={headerSpring}>
                <h1>Ahmed Refaat Mohamed Abozied</h1>
                <h2>Software Engineer</h2>
                <p>Cairo, Egypt</p>
                <p>
                    <a href="http://www.linkedin.com/in/ahmed-refaat-149898188/">LinkedIn</a> |
                    <a href="http://github.com/AhmedRefaat00">GitHub</a>
                </p>
                <p>Email: ahmedrefaat00ar@gmail.com | Phone: +20 1110433991</p>
            </animated.header>

            <animated.section style={sectionSpring}>
                <h3>Summary</h3>
                <p>
                    Motivated software engineer eager to contribute to team success with attention to detail and excellent organizational skills. Proficient in software design, development, testing, and maintenance. Keen to lead, grow, and excel in the tech industry.
                </p>
            </animated.section>

            <animated.section style={sectionSpring}>
                <h3>Education</h3>
                <p><strong>Egyptian Chinese University (ECU)</strong></p>
                <p>B.Sc. in Software Engineering and Information Technology, 2016 - 2022</p>
                <p>Graduation Project: Smart ATM System For the Blind People (A+)</p>
                <p>CGPA: 2.12</p>
            </animated.section>

            <animated.section style={sectionSpring}>
                <h3>Technical Skills</h3>
                <ul>
                    <li><strong>Front-End:</strong> HTML, CSS, JavaScript, ReactJS, Bootstrap, WordPress</li>
                    <li><strong>Back-End:</strong> Node.js</li>
                    <li><strong>Database:</strong> SQL, MySQL, Firebase</li>
                    <li><strong>Data Analysis:</strong> Python, MS Excel, Tracking & Analytics Tools</li>
                    <li><strong>Design:</strong> Adobe XD, Adobe Illustrator, Canva, Adobe Photoshop</li>
                    <li><strong>General:</strong> MS Word, MS PowerPoint, Google Docs</li>
                    <li><strong>Soft Skills:</strong> Communication, Project Scheduling, Leadership, Teamwork, Project Management, Program Management, Scrum Master, Product Owner</li>
                </ul>
            </animated.section>

            <animated.section style={sectionSpring}>
                <h3>Certifications</h3>
                <ul>
                    <li>React Js Frontend developer - ITI Platform, 05/2024</li>
                    <li>Foundations of Project Management - Coursera, 08/2023</li>
                    <li>Project Initiation: Starting a Successful Project - Coursera, 10/2023</li>
                    <li>Web Development Challenger Certificate - Udacity, 07/2022</li>
                    <li>Data Analysis Challenger Certificate - Udacity, 02/2022</li>
                    <li>Banque Misr Training Certificate - Banque Misr, 09/2021</li>
                    <li>Graphic Design: Adobe XD - ECU, 08/2021</li>
                    <li>Android Developer: Android Studio, Java, Kotlin - IDE Academy, 08/2019 - 02/2020</li>
                </ul>
            </animated.section>

            <animated.section style={sectionSpring}>
                <h3>Professional Experience</h3>
                <div>
                    <h4>React JS Frontend Developer</h4>
                    <p><strong>Bedab Software | 2024 - 05/2024</strong></p>
                    <ul>
                        <li>Developed responsive web pages using HTML, CSS, and Bootstrap.</li>
                        <li>Implemented dynamic features using JavaScript and React.js.</li>
                        <li>Integrated APIs to fetch and display data on web applications.</li>
                        <li>Contributed to Git-based version control and collaborated on team projects.</li>
                        <li>Ensured web accessibility and optimized performance for better user experience.</li>
                    </ul>
                </div>
            </animated.section>
            <animated.section>
                <h3>Volunteer Experience</h3>
                <div>
                    <h4>Organizing Committee Member (Vice President)</h4>
                    <p><strong>Hult Prize ECU | 2020 - 2022</strong></p>
                    <ul>
                        <li>Planned and executed committee activities, meetings, and schedules.</li>
                        <li>Developed project plans and milestones for competition success.</li>
                        <li>Contributed to marketing materials and social media strategy.</li>
                        <li>Supported team selection and member development.</li>
                    </ul>
                </div>
            </animated.section>
            <animated.section>
                <h3>Training</h3>
                <div>
                    <h4>UI and UX Designer</h4>
                    <p><strong>Egyptian Chinese University | 07/2021 - 08/2021</strong></p>
                    <ul>
                        <li>Designed and prototyped 9 projects using Adobe XD.</li>
                        <li>Applied UI & UX principles to create user-friendly interfaces.</li>
                        <li>Developed adjustable grid-based screens for responsive design.</li>
                        <li>Created dynamic and adjustable lists to enhance user interaction.</li>
                    </ul>
                </div>
                <div>
                    <h4>Graphic Designer & Software Engineer</h4>
                    <p><strong>Egyptian Chinese University | 07/2020 - 09/2020</strong></p>
                    <ul>
                        <li>Created projects using Adobe Photoshop and Illustrator.</li>
                        <li>Developed a Registration System using Java and NetBeans.</li>
                        <li>Created a MySQL database and designed SQL queries to manage data.</li>
                    </ul>
                </div>

            </animated.section>

            <animated.section style={sectionSpring}>
                <h3>Personal Projects</h3>
                <ul>
                    <li><strong>The React Quiz App:</strong>This project is
                        a quiz application built with React, utilizing the useReducer
                        and useEffect hooks for state management and side effects.
                        The application fetches questions from an API, allows users to
                        answer them within a time limit, and keeps track of their score and high score.
                        <a href="https://ahmedrefaat00ar-the-react-quiz.netlify.app/">Link</a></li>
                    <li><strong>Popcorn:</strong>useEffect, data fetching, custom hooks<a href="https://www.behance.net/gallery/127846847/7gz-Kora-app">Behance</a></li>
                </ul>
            </animated.section>

            <animated.section style={sectionSpring}>
                <h3>Languages</h3>
                <p><strong>Arabic:</strong> Native</p>
                <p><strong>English:</strong> intermediate</p>
            </animated.section>

            <animated.section style={sectionSpring}>
                <h3>Personal Information</h3>
                <p><strong>Date of Birth:</strong> 16/03/1998</p>
                <p><strong>Nationality:</strong> Egyptian</p>
                <p><strong>Military Status:</strong> Completed</p>
                <p><strong>Marital Status:</strong> Single</p>
            </animated.section>
        </animated.div>
    );
};

export default Resume;
