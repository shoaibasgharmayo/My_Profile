const profileData = {
    name: "Shoaib Asghar",
    home: {
        welcomeMessage: "Welcome to My Professional Profile",
        intro: "Explore my skills, projects, and accomplishments below.",
        videoSrc: "https://www.shutterstock.com/shutterstock/videos/1060933255/preview/stock-footage-circa-in-this-animated-film-a-mouse-traps-a-cat-in-a-bag-to-throw-it-in-a-well-but-the-cat.webm"
    },
    skills: {
        hardSkills: [
            "Programming: Python, JavaScript, HTML/CSS",
            "Data Analysis",
            "Machine Learning"
        ],
        softSkills: [
            "Team Collaboration",
            "Problem Solving",
            "Time Management"
        ]
    },
    projects: [
        { title: "Web Development", date: "2023-09-10" },
        { title: "Machine Learning Model", date: "2023-07-15" },
        { title: "Mobile App", date: "2023-05-20" }
    ],
    certifications: [
        { title: "Certified Web Developer", year: 2022 },
        { title: "AI Specialist", year: 2021 }
    ],
    socialMedia: [
        { platform: "X", url: "https://x.com/shoaib_asghar00?" },
        { platform: "GitHub", url: "https://github.com/yourprofile" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/shoaib-asghar-7035a0271" }
    ],
    contact: {
        email: "bscs22130@itu.edu.pk"
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Home Section
    document.getElementById("name").textContent = profileData.name;
    document.getElementById("welcomeMessage").textContent = profileData.home.welcomeMessage;
    document.getElementById("intro").textContent = profileData.home.intro;
    document.getElementById("profileVideo").querySelector("source").src = profileData.home.videoSrc;

    // Skills Section
    const hardSkillsList = document.getElementById("hardSkills");
    const softSkillsList = document.getElementById("softSkills");
    
    profileData.skills.hardSkills.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        hardSkillsList.appendChild(li);
    });

    profileData.skills.softSkills.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        softSkillsList.appendChild(li);
    });

    // Projects Section
    const projectsList = document.getElementById("projectsList");
    profileData.projects.forEach(project => {
        let li = document.createElement("li");
        li.textContent = `${project.title} (${project.date})`;
        projectsList.appendChild(li);
    });

    // Certifications Section
    const certificationsList = document.getElementById("certificationsList");
    profileData.certifications.forEach(cert => {
        let li = document.createElement("li");
        li.textContent = `${cert.title} (${cert.year})`;
        certificationsList.appendChild(li);
    });

    // Social Media Section
    const socialMediaLinks = document.getElementById("socialMediaLinks");
    profileData.socialMedia.forEach(social => {
        let a = document.createElement("a");
        a.href = social.url;
        a.textContent = social.platform;
        a.target = "_blank";
        socialMediaLinks.appendChild(a);
    });

    // Contact Section
    document.getElementById("contactEmail").textContent = `Email: ${profileData.contact.email}`;
});
