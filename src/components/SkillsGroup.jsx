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
            id: 2,
            title: "Database \n Management",
            skills: [
                "MySQL", "SQLite", "MongoDB", "Redis", "Oracle"
            ]
        },
        programming: {
            id: 4,
            title: "Programming \n Languages",
            skills: [
                "C Programming", "Python", "Java",
            ]
        },
        mobile: {
            id: 5,
            title: "Mobile \n Development",
            skills: [
                "Ionic Framework", "React Native",
            ]
        },
        vcs: {
            id: 6,
            title: "Version \n Controlling",
            skills: [
                "Git", "SVN", "Github", "Gitlab", "Bitbucket",
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
                "Microsoft Office", "Microsoft Powerpoint", "Excel", "LateX", "Google Docs"
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
        <section className="intro">
            <div className="container-fluid center">
                <h1 className="mb-4">Skills & Expertise</h1>
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