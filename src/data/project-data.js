// src/data/project-data.js

const Projects = [
  {
    sectionTitle: 'Circuit Simulator On VR',
    sectionSubtitle: "Project at King Mongkut's Institute of Technology Ladkrabang",
    projects: [
      {
        id: 1,
        title: 'Web Management System',
        image: 'https://img2.pic.in.th/pic/378068758866c8994.png',
        description: [
          "Built the web application using Vite with React and Tailwind CSS for the Front-end, and used Node.js for the Back-end to develop APIs for database interaction.",
          "Designed the Back-end to connect the web application with the database, enabling real-time data display in VR and statistical reporting on the web application.",
        ],
        link: 'https://github.com/Narongrit2544/CircuitSimuInVR_Web',
      },
      {
        id: 2,
        title: 'App CircuitSimulatorOnVr',
        image: 'https://img2.pic.in.th/pic/Screenshot-2025-03-19-155418.png',
        description: [
          "Circuit Simulator On VR is a project developed using Unity to simulate electronic circuits in a virtual reality environment. It allows users to interact with various components through VR, providing a realistic experience. This helps students practice hands-on experiments even without access to physical equipment.",
          "Developed a system for simulating circuit and digital electronics in Virtual Reality (VR) Developed using C#"
        ],
        link: 'https://github.com/Narongrit2544/CircuitSimulatorOnVR',
      },
    ],
  },
  {
    sectionTitle: 'Arcade Game',
    sectionSubtitle: "Mini Project at King Mongkut's Institute of Technology Ladkrabang",
    projects: [
      {
        id: 3,
        title: 'Arcade Machine Simulation',
        image: 'https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-05-21-105034.png', // เปลี่ยนเป็นลิงก์จริงของภาพ
        description: [
          'This project combines hardware (STM32) and software (C language) to create an arcade game cabinet featuring popular games like Fippy Bird and Pingpong. The system enables realistic control and display on the screen, helping to develop embedded programming skills and hardware control system design comprehensively.',
        ],
        link: 'https://github.com/Narongrit2544/STM32-GAME_FLAPPY_AND_PINGPONG',
      },
    ],
  },
  {
    sectionTitle: 'Takecare System',
    sectionSubtitle: 'Project at Uttaradit Technological College',
    projects: [
      {
        id: 4,
        title: 'Caregiver Assistance Device by Posenet',
        image: 'https://scontent.fphs3-1.fna.fbcdn.net/v/t39.30808-6/473797163_2376513512691165_8487047074291299436_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEXJoJRT4gdBYdP-3jRloqJ1K6UK1X-UqrUrpQrVf5Sqj4oPI2kCcIhgWewdrO0sJChVlVFK8O2tZDz9Bo1uzSu&_nc_ohc=BllDLk1KI-IQ7kNvwFVeG4s&_nc_oc=AdldIbbQJnbNSa2xiR0vDV738u-anEiTRPqJdNcoiRVnFiWHn-CX4EkLUSqpEu8e4JtdPZqFObS2qjm96v9CHUkh&_nc_zt=23&_nc_ht=scontent.fphs3-1.fna&_nc_gid=JLleW-yyKZPPqmfpCIVJBw&oh=00_AfLWBmRC-SzukTQtjekEOV6nJww1_5HWSPj2aNrtDCnnIA&oe=68330931',
        description: [
          'This project utilizes Posenet to detect bedridden patients and serves to alert caregivers if the patient has not been repositioned within a specified time. It is developed using JavaScript and works in conjunction with a Raspberry Pi.',
        ],
        link: 'https://github.com/Narongrit2544/AI-innovation-JumpStart-PoseNet-',
      },
    ],
  },
];

export default Projects;
