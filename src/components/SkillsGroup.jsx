import Skills from "./Skills.jsx";

const SkillsGroup = () => {
    const skillSets = {
        frontend: {
            id: 1,
            title: "Frontend \n Technologies",
            skills: [
                " HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "React JS", "Figma"
            ]
        },
        backend: {
            id: 2,
            title: "Backend \n Technologies",
            skills: [
                "Node JS", "Express JS", "PHP", "Symfony Framework", "Laravel Framework", "Lumen",
            ]
        },
        database: {
            id: 3,
            title: "Database \n Management",
            skills: [
                "MySQL", "SQLite", "MongoDB", "Redis", "Oracle"
            ]
        },
        programming: {
            id: 4,
            title: "Programming \n Languages",
            skills: [
                "C Programming", "Java", "Python", "TypeScript",
            ]
        },
        vcs: {
            id: 5,
            title: "Version \n Controlling",
            skills: [
                "Git", "SVN", "Github", "Gitlab", "Bitbucket",
            ]
        },
        mobile: {
            id: 6,
            title: "Mobile \n Development",
            skills: [
                "Ionic Framework", "React Native",
            ]
        },
        devops: {
            id: 7,
            title: "Cloud / \n DevOps",
            skills: [
                "Amazon SES", "Docker", "Rancher", "CI/CD"
            ]
        },
        management: {
            id: 8,
            title: "Project \n Management",
            skills: [
                "Agile", "SCRUM", "Kanban", "Jira", "Trello"
            ]
        },
        os: {
            id: 9,
            title: "Operating \n Systems",
            skills: [
                "Mac OS", "Linux (Ubuntu)", "Windows", "Shell Script", "Terminal"
            ]
        },
        documentation: {
            id: 10,
            title: "Documentation \n Skills",
            skills: [
                "Microsoft Word", "Powerpoint", "Excel", "LateX", "Google Docs"
            ]
        },
        ai: {
            id: 11,
            title: "Data \n Science",
            skills: [
                "Jupyter Notebook", "Pandas", "NumPy", "Matplotlib"
            ]
        },
        other: {
            id: 12,
            title: "Other \n Technologies",
            skills: [
                "REST API", "Facebook Graph API", "Stripe", "Unity"
            ]
        }
    };

    return (
        <section className="skills">
            <div className="container-fluid">
                <h1 className="center mb-4">Skills & Expertise</h1>
                {/*<p className="center">Technical Proficiencies: Empowering Innovation with Comprehensive Expertise</p>*/}
                <div className="row">
                    <div className="row">
                        {
                            Object.keys(skillSets).map(key => {
                                const value = skillSets[key];
                                return <Skills key={key} skillSet={value}/>;
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );

};

export default SkillsGroup;