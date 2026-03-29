export const identity = {
  name: "Leonardo Cavallaro",
  role: "AI & Data Analytics Engineer (M.Sc. Student at PoliTo/KAIST)",
  angle: "Architecting the future of Data-Driven Systems through Generative AI and Reinforcement Learning.",
  email: "leo.cavallaro.02@gmail.com",
  linkedin: "https://www.linkedin.com/in/leonardo-cavallaro",
  aboutMe: "I am a Computer Engineering M.Sc. student at Politecnico di Torino, specializing in AI and Data Analytics. Having recently completed a research exchange at KAIST in South Korea, I focus on architecting high-performance systems that bridge the gap between sophisticated AI theory and robust software engineering. My expertise lies at the intersection of Generative Models and Reinforcement Learning. Whether I am optimizing Diffusion-based transition models with high UTD ratios or engineering scalable data pipelines, I am driven by the challenge of making deep neural architectures run efficiently in real-world production environments. Having bridged the 9,000km gap between PoliTo and KAIST, I’m now focused on my next challenge in AI and Software Engineering. Always down to talk shop over an espresso or to exchange notes on high-performance data systems.",
};

export const projects = [
  {
    id: 1,
    title: "Generative Reinforcement Learning",
    description: "Developed a Diffusion-based generative model (Residual MLP) to synthesize high-fidelity state transitions for RL replay buffers. Achieved accelerated agent convergence in SUMO traffic environments by implementing a 20:1 Update-to-Data (UTD) ratio, effectively mitigating sample inefficiency.",
    tags: ["Diffusion Models", "PyTorch", "SUMO-RL", "MARL"],
    github: "https://github.com/alicebanaudi/Experience-Replay-for-Action-Generalization-and-Multi-Agent-System", 
  },
  {
    id: 2,
    title: "SDXL Photomosaic Engine",
    description: "Architected a generative pipeline utilizing Stable Diffusion XL and K-Means clustering to assemble large-scale images from semantically relevant micro-tiles. Optimized the latent diffusion process to balance visual fidelity with high-dimensional data processing constraints.",
    tags: ["SDXL", "Computer Vision", "K-Means", "Python"],
    github: "https://github.com/m4rk-git/Visual-Generation-Contest",
  },
  {
    id: 3,
    title: "Multi-Agent AI Tutor",
    description: "Designed a full-stack orchestration layer for real-time student-AI interactions. Leveraged OpenAI LLM APIs to create specialized virtual study avatars, managing context-aware memory and secure API interaction via a Laravel/Vue.js architecture.",
    tags: ["LLMs", "Laravel", "Vue.js", "API Design"],
    github: "https://github.com/leo54200/AI-Powered-Study-Group-Website",
  },
  {
    id: 4,
    title: "Bare-Metal Systems Pac-Man",
    description: "Engineered a hardware-integrated game for the ARM Cortex-M3 (STM32) using C and ARM Assembly. Implemented manual memory mapping, peripheral interfacing, and interrupt-driven logic to optimize performance for resource-constrained environments without an OS.",
    tags: ["ARM Assembly", "C", "Embedded Systems", "Bare-Metal"],
    github: "https://github.com/leo54200/Pac-Man-Game-for-ARM-on-LandTiger-1768",
  },
];
export const experience = [
  {
    id: 1,
    role: "Visiting Research Scholar / Student",
    company: "KAIST",
    description: "Conducted advanced research dynamically interfacing with top-tier AI laboratories. Specizalized in Generative AI techniques, expanding domain knowledge applied to distributed reinforcement learning.",
    period: "2023 - Present"
  }
];

export const education = [
    {
    id: 1,
    institution: "Politecnico di Torino (PoliTo)",
    degree: "M.Sc. in Computer Engineering (AI & Data Analytics)",
    description: "Specializing in AI and Data Analytics. My curriculum focuses on advanced statistical learning, neural computing, and the architecture of data-driven systems.",
    period: "09/2024 - Present"
  },
  {
    id: 2,
    institution: "Korea Advanced Institute of Science & Technology (KAIST)",
    degree: "Exchange Program",
    description: "Developed Generative RL frameworks utilizing Diffusion Models (Residual MLP) to synthesize high-fidelity transitions for replay buffers. Optimized SUMO traffic agents using a 20:1 Update-to-Data (UTD) ratio to accelerate convergence in data-limited regimes.",
    period: "09/2025 - 02/2026"
  },
  {
    id: 3,
    institution: "University of Catania",
    degree: "B.Sc. in Computer Engineering",
    description: "Foundational studies in computer science. Thesis focused on developing an AI-Powered Tutor using a full-stack orchestration layer (Laravel/JS) and OpenAI LLM APIs.",
    period: "09/2021 - 07/2024"
  },
  {
    id: 4,
    institution: "Warsaw University of Technology (WUT)",
    degree: "Erasmus+ Program",
    description: "International academic exchange focusing on core computer engineering principles and cross-cultural technical collaboration within Poland's top-ranked technical university.",
    period: "02/2023 - 07/2023"
  }
];

export const technicalSkills = [
  {
    category: "AI & Deep Learning",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "SDXL", "Generative RL"]
  },
  {
    category: "Systems & Low-Level",
    items: ["C", "ARM Assembly", "Rust", "Embedded Systems", "Memory Mapping"]
  },
  {
    category: "Software Engineering",
    items: ["Python", "Java", "SQL", "Kotlin", "JavaScript", "Docker", "Git"]
  }
];

export const languages = [
  { name: "Italian", proficiency: "Native" },
  { name: "English", proficiency: "Fluent" },
  { name: "Polish", proficiency: "Basic" }
];

export const SHOW_EXPERIENCE = false; // Set to true to show the Experience section
