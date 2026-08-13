export const config = {
    developer: {
        name: "Sumit",
        fullName: "Sumit Kumar",
        title: "Data Science Student & Full-Stack Developer",
        description: "Data Science undergrad and full-stack developer building machine learning models and modern, responsive web applications. Passionate about turning raw data into real predictions and shipping clean, usable frontend experiences."
    },
    social: {
        github: "Techvenom18",
        leetcode: "rathoresumit19",
        email: "sumitrathore45528@gmail.com",
        location: "New Delhi, India"
    },
    about: {
        title: "About Me",
        description: "I'm a student of B.Tech Computer Science with Specialization in Data Science[CSDS] at Delhi Skill and Entrepreneurship University, CGPA-9.39 currently in my 4th semester. I work across machine learning and full-stack web development projects from preprocessing and evaluating ML models to building responsive React interfaces. I recently completed a Machine Learning internship at Edunet Foundation, building a water quality prediction model, and I'm a core team member of Google Developer Group (GDG) on Campus. Two-time hackathon finalist, and I've led both teams as captain."
    },
    experiences: [
        {
            position: "Machine Learning Intern",
            company: "Edunet Foundation",
            period: "May 2025 - July 2025",
            location: "Remote",
            description: "Built a Water Quality Prediction Model to assess water quality parameters and predict suitability for consumption, from data preprocessing through model evaluation.",
            responsibilities: [
                "Conducted data preprocessing and exploratory data analysis on water quality datasets to identify key predictive features",
                "Implemented and compared multiple machine learning algorithms for classification and prediction tasks",
                "Evaluated model performance using accuracy, precision, recall, and F1-score",
                "Designed a reliable, efficient framework capable of supporting real-time prediction"
            ],
            technologies: ["Python", "pandas", "NumPy", "Data Preprocessing", "EDA", "Model Evaluation"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Hustlers Sports Club Website",
            category: "Front-End Developer",
            technologies: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Vercel",
            image: "/images/hustlers-sports-club.gif", // TODO-> completed: add a real screenshot to public/images/
            liveUrl: "https://hustlers-ashen.vercel.app/",
            repoUrl: "https://github.com/Techvenom18/hustlers_webpage",
            description: "A modern, responsive sports club website featuring club information, sports categories, event highlights, and membership engagement sections. Sole frontend developer — improved user engagement and reduced bounce rate by 20% across all devices through intuitive navigation and optimized performance."
        },
        {
            id: 2,
            title: "Resume Ranking System",
            category: "Full Stack Developer",
            technologies: "Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma ORM, Auth.js, Vite",
            image: "/images/resumerank_demo_hq.gif",
            liveUrl: "https://resumerank-two.vercel.app/",
            repoUrl: "https://github.com/Techvenom18/resumerank",
            description: "Screens and ranks job applicants against a job description, with a transparent score breakdown — built for recruiters who are tired of manually skimming hundreds of resumes."
        },
        {
            id: 3,
            title: "Learning Dashboard",
            category: "Full Stack Developer",
            technologies: "Next.js 15, Supabase, Tailwind CSS, Framer Motion, Vercel",
            image: "/images/learning-dashboard.gif",
            liveUrl: "https://learning-dashboard-seven-eosin.vercel.app/",
            repoUrl: "https://github.com/Techvenom18/learning-dashboard",
            description: "A futuristic, highly animated education platform focused on hardware-accelerated animations, zero layout shifts, and a buttery-smooth experience powered by efficient, server-rendered data. Built with Next.js 15's App Router and Supabase for real-time progress tracking, with Framer Motion driving fluid, GPU-accelerated UI transitions."
        },
        {
            id: 4,
            title: "Personal Portfolio",
            category: "Full Stack Developer",
            technologies: "React, TypeScript, Three.js, GSAP, Vite",
            image: "/images/personal-portfolio.gif",
            liveUrl: "https://personal-portfolio-steel-seven-14.vercel.app",
            repoUrl: "https://github.com/Techvenom18/Personal_Portfolio",
            description: "This portfolio itself — an interactive, physics-driven 3D site with a scroll-animated career timeline, a fully responsive tech stack pyramid, and a WhatsApp-style profile preview. Built and debugged across desktop, tablet, and phone breakpoints."
        },
        {
            id: 5,
            title: "Stock Insights Model",
            category: "Data Analytics",
            technologies: "Python, pandas, NumPy, matplotlib, yfinance",
            image: "/images/nifty-hcl-analysis.gif", // TODO -> completed: add a real screenshot to public/images/
            liveUrl: "", // not deployed yet — badge shows but stays inactive
            repoUrl: "https://github.com/Techvenom18/Project-Stock_insights",
            description: "Compared the performance of the Nifty 50 index against HCL Technologies stock from 2011 to 2022. Sourced historical financial data with yfinance, cleaned and analyzed it with pandas/NumPy, and visualized trends and relative performance with matplotlib."
        },
        {
            id: 6,
            title: "Elementum Landing Webpage",
            category: "Front-End Developer",
            technologies: "HTML, CSS, JavaScript, React.js, Vite, React Router",
            image: "/images/Elementum_demo.gif",
            liveUrl: "https://elementum-webpage-ruby.vercel.app/",
            repoUrl: "https://github.com/Techvenom18/Elementum_Webpage",
            description: "A responsive, animated React conversion of a Figma landing page design for Elementum, a fictional strategy & design studio. Built as a front-end internship assignment, then extended with routing, an inline content-expand pattern, and a light/dark theme toggle."
        },
        {
            id: 7,
            title: "Page Pulse Application",
            category: "Full Stack Developer",
            technologies: "HTML, CSS, JavaScript, Ract.js, Rapid API, Render",
            image: "/images/page_pulse_demo.gif",
            liveUrl: "https://page-pulse-ptoo.onrender.com/",
            repoUrl: "https://github.com/Techvenom18/page-pulse",
            description: "A small tool that audits any URL and returns HTTP status, response time, title, meta description, H1 count, missing alt-text count, and approximate word count."
        }

    ],
    contact: {
        email: "sumitrathore45528@gmail.com",
        github: "https://github.com/Techvenom18",
        linkedin: "https://www.linkedin.com/in/sumit-rathore-680b03377/",
        leetcode: "https://leetcode.com/u/rathoresumit19/",
        twitter: "https://x.com/SumitRathore404",
        facebook: "", // not active — left blank
        instagram: "https://www.instagram.com/sumit.rathore19/"
    },
    skills: {
        develop: {
            title: "DATA SCIENTIST",
            description: "Building predictive models & data-driven insights",
            details: "Working across the full ML pipeline — data preprocessing, exploratory data analysis, model training, and evaluation. Strong foundation in DSA, OOP, DBMS, and operating systems from coursework.",
            tools: ["Python", "pandas", "NumPy", "matplotlib", "R", "Data Preprocessing", "EDA", "Model Evaluation", "DSA", "OOP"]
        },
        design: {
            title: "FRONT-END DEVELOPER",
            description: "Responsive web development & clean UI",
            details: "Building responsive, performant web applications using React.js and modern CSS tooling. Comfortable across the DevOps toolchain for deployment and collaboration.",
            tools: ["React.js", "JavaScript", "CSS3", "Tailwind CSS", "HTML5", "Git", "GitHub"]
        }
    }
};