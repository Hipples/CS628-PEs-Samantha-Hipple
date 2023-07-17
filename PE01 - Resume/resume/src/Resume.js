import './Resume.css';

function Resume() {
  return (
    <div className='Resume'>
        <h1 className='Name'>Samantha Hipple</h1>

            <p className='Contact-Info'>
                Vancouver, WA 98661 | (360) 977-3294 | samantha.m.hipple@gmail.com
            </p>

            <h2>Education</h2>
                <h3>Master of Science in Computer Science</h3>
                    <p>City University of Seattle | September 2023</p>
                    <p>GPA: 3.9/4.0</p>
                <h3>Bachelor of Arts in Psychology</h3>
                    <p>Western Washington University | June 2013</p>
                    <p>GPA: 3.7/4.0</p>
            
            <h2>Skills</h2>
                <p>Programming Lanugages: Python, R, JavaScript</p>
                <p>Frameworks & Libraries: React, React Native, Node.js, Express.js</p>
                <p>Database Systems: MySQL, MongoDB</p>
                <p>Operating Systems: Windows, Linux</p>
                <p>Version Control: Git</p>
            
            <h2>Work Experience</h2>
                <h3>Software Development Intern</h3>
                    <p>XYZ Corporation, USA | May 2022 - August 2022</p>
                    <p>Worked on a team to develop a new web application using React and Node.js</p>
                    <p>Collaborated with team members to design and implement features</p>
                    <p>Debugged and fixed issues in codebase</p>
                <h3>Teaching Assistant</h3>
                    <p>Department of Computer Science | August 2021 - present</p>
                    <p>Assist with grading and holding office hours for an undergraduate CS course</p>
                    <p>Help students with assignments and answer questions about course material</p>

            <h2>Projects</h2>
                <h3>Personal Website</h3>
                    <p>Built a personal website using React and deployed to GitHub Pages</p>
                    <p>Source code: https://github.com/studentname/personal-website</p>
                <h3>Online Bookstore</h3>
                    <p>Developed a web app for an online bookstore using Spring Boot and MySQL</p>
                    <p>Source code: https://github.com/studentname/online-bookstore</p>
    </div>
  );
}

export default Resume;