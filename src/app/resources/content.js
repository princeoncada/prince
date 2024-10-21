import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Prince',
    lastName: 'Oncada',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Web Developer',
    avatar: '/images/avatar.jpg',
    location: 'Asia/Kuala_Lumpur',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Tagalog']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/princeoncada',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/prince-oncada-684870232/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:prince.oncada@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>A Passionate Web Developer</>,
    subline: <>I’m Prince, a web developer who thrives under pressure, always pushing beyond my comfort zone to create innovative digital solutions. When I’m not working with clients, I’m exploring new technologies and building my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>
            I’m a passionate web developer with a relentless drive for progressive learning and growth. Starting my career in development, I’ve successfully managed and delivered multiple web projects, especially in the eCommerce domain using Shopify. My work experience has taught me to thrive under pressure, handling tight deadlines and complex challenges with ease. I’m no stranger to pushing beyond my comfort zone, constantly seeking opportunities to improve, innovate, and deliver customized solutions that meet client needs.
            <br></br>
            <br></br>
            From automating processes to leading teams, my approach is centered on understanding client requirements and delivering high-quality digital experiences. If you're looking for someone dedicated to excellence and continuous improvement, let’s connect and make your project a success!
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Hafstaff',
                timeframe: 'July 2023 - July 2024',
                role: 'Executive Assistant / Web Developer',
                achievements: [
                    <>Managed multiple web development projects, including the creation of three distinct eCommerce stores for three different clients using Shopify.</>,
                    <>Collaborated with clients to understand requirements and implement custom functionalities tailored to their business needs.</>,
                    <>Led a team to ensure on-time project delivery, delegating tasks and coordinating efforts to meet deadlines.</>,
                    <>Developed and automated internal processes using Google Sheets scripting, enhancing the operational efficiency of assigned agents.</>,
                    <>Supported web development efforts by creating, maintaining, and optimizing business applications to meet client needs.</>,
                    <>Assisted the CEO with employee monitoring, conducting research, and resolving client and company concerns.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/work/hafstaff/image-1.jpg',
                        alt: 'Image 1',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'AwesomeOS',
                timeframe: 'June 2022 - February 2023',
                role: 'Customer Service Representative',
                achievements: [
                    <>Delivered outstanding customer service, managing and processing orders accurately and efficiently to ensure smooth transactions.</>,
                    <>Handled data entry tasks, maintaining precise and up-to-date records to support business operations.</>,
                    <>Consistently resolved customer issues promptly and effectively, often deescalating concerns and providing satisfactory solutions.</>,
                    <>Assisted in order management, from initial processing to final delivery, ensuring a seamless customer experience.</>
                ],
                images: [
                    {
                        src: '/images/work/os/image-1.jpg',
                        alt: 'Image 1',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Mapua Malayan Colleges Of Mindanao',
                description: <>
                    Pursued a <strong>Bachelor’s degree in Computer Science</strong> at Mapua Malayan Colleges Of Mindanao, where I gained comprehensive knowledge in various areas of software development, including:
                    <ul>
                        <li><strong>Software Engineering:</strong> Studied methodologies for designing, developing, and maintaining software systems.</li>
                        <li><strong>Web Development:</strong> Acquired skills in building dynamic, responsive websites using modern frameworks and technologies.</li>
                        <li><strong>Machine Learning:</strong> Worked with libraries such as TensorFlow and Scikit-learn to build predictive models.</li>
                        <li><strong>Backend Development:</strong> Developed servers using Node.js, Spring Boot, and FastAPI, and worked with databases like MySQL, MongoDB, and Firebase.</li>
                    </ul>
                    <br></br>
                    Completed a thesis project titled <em>"Water Consumption Prediction using a Multivariate Ensemble Model Optimized with Particle Swarm Optimization,"</em> applying machine learning to address real-world problems.
                </>
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <>JavaScript, Google Script, Liquid, Java, Python, Kotlin, HTML, CSS.</>,
                images: []
            },
            {
                title: 'Web Development',
                description: <>Shopify Theme Development, Shopify App Development, Vite + React, Next.js, TailwindCSS, jQuery</>,
                images: []
            },
            {
                title: 'Backend Development',
                description: <>Node.js (Express), Springboot (Kotlin), FastAPI (Python)</>,
                images: []
            },
            {
                title: 'Databases',
                description: <>Firebase, MySQL, MongoDB</>,
                images: []
            },
            {
                title: 'Version Control',
                description: <>Git and GitHub</>,
                images: []
            },
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Progress so far...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };