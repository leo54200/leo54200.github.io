export const identity = {
  name: "Leonardo Cavallaro",
  role: "AI & Data Analytics Engineer (M.Sc. Student at PoliTo)",
  angle: "Understanding the Inner Workings of LLMs to Build Safer and More Trustworthy AI.",
  email: "leo.cavallaro.02@gmail.com",
  linkedin: "https://www.linkedin.com/in/leonardo-cavallaro",
  aboutMe: "I am a Computer Engineering M.Sc. student at Politecnico di Torino, specializing in AI and Data Analytics. My interests lie at the intersection of Deep Learning, Generative AI, Reinforcement Learning, and AI Safety. Through research experience at ELLIS Unit Alicante, I am exploring the internal mechanisms of Large Language Models, focusing on mechanistic interpretability, safety behaviors, and vulnerability to adversarial prompting. My previous work also includes diffusion-based generative models and reinforcement learning, with an emphasis on developing and optimizing deep learning architectures. I am passionate about understanding how intelligent systems work, making them more reliable and efficient."
};

export const projects = [
  {
    id: 1,
    title: "Generative Reinforcement Learning",
    description: "Developed a Diffusion-based generative model (Residual MLP) to synthesize high-fidelity state transitions for RL replay buffers. Achieved accelerated agent convergence in SUMO traffic environments by implementing a 20:1 Update-to-Data (UTD) ratio, effectively mitigating sample inefficiency.",
    tags: ["Diffusion Models", "PyTorch", "SAC", "REDQ", "SynthER", "SUMO-RL", "MARL"],
    github: "https://github.com/alicebanaudi/Experience-Replay-for-Action-Generalization-and-Multi-Agent-System", 
  },
  {
    id: 2,
    title: "SDXL Photomosaic Engine",
    description: "Architected a generative pipeline utilizing Stable Diffusion XL and K-Means clustering to assemble large-scale images from semantically relevant micro-tiles. Optimized the latent diffusion process to balance visual fidelity with high-dimensional data processing constraints.",
    tags: ["SDXL", "Computer Vision", "K-Means", "Python", "Image Generation", "Diffusion Models"],
    github: "https://github.com/m4rk-git/Visual-Generation-Contest",
  },
  {
    id: 3,
    title: "Multi-Agent AI Tutor",
    description: "Designed a full-stack orchestration layer for real-time student-AI interactions. Leveraged OpenAI LLM APIs to create specialized virtual study avatars, managing context-aware memory and secure API interaction via a Laravel/Vue.js architecture.",
    tags: ["LLMs", "Laravel", "JavaScript", "API Design"],
    github: "https://github.com/leo54200/AI-Powered-Study-Group-Website",
  },
  {
    id: 4,
    title: "Bare-Metal Systems Pac-Man",
    description: "Engineered a hardware-integrated game for the ARM Cortex-M3 (STM32) using C and ARM Assembly. Implemented manual memory mapping, peripheral interfacing, and interrupt-driven logic to optimize performance for resource-constrained environments without an OS.",
    tags: ["ARM Assembly", "C", "Embedded Systems", "Bare-Metal"],
    github: "https://github.com/leo54200/Pac-Man-Game-for-ARM-on-LandTiger-1768",
  },
  {
    id: 5,
    title: "Remote-File-System-in-Rust",
    description: "Engineered a scalable remote file system in Rust using asynchronous I/O. Implemented custom communication protocols to handle remote file streaming, synchronization, and secure data transfer within a distributed architecture.",
    tags: ["Rust", "Systems Programming", "Network Protocols", "Async I/O"],
    github: "https://github.com/Luffy65/Remote-File-System-in-Rust",
  },
];
export const experience = [
  {
    id: 1,
    role: "Research Intern",
    company: "ELLIS Unit Alicante",
    period: "10/2026 - Present",
    description: "Working on AI Safety and Red Teaming for Large Language Models. My research focuses on investigating how negation-based prompting techniques can bypass LLM safety mechanisms, evaluating model vulnerabilities, and exploring their internal representations to better understand the mechanisms behind safe and unsafe model behavior."
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
    category: "Programming Languages",
    items: ["Python", "Rust", "C", "Java", "SQL", "Kotlin", "JavaScript", "TypeScript", "ARM Assembly"]
  },
  {
    category: "Deep Learning & GenAI",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "Transformers", "Diffusion Models", "SDXL"]
  },
  {
    category: "AI Safety & Interpretability",
    items: ["LLM Red Teaming", "Mechanistic Interpretability", "Adversarial Prompting", "Activation Analysis", "Representation Analysis"
    ]
  },
  {
    category: "Reinforcement Learning",
    items: ["SAC", "REDQ", "SynthER", "Multi-Agent RL (MARL)", "SUMO-RL"]
  },
    {
    category: "Data Science",
    items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"]
  },
  {
    category: "Infrastructure & Tools",
    items: ["Docker", "Git/GitHub", "Linux", "CUDA", "Jupyter", "React", "Tailwind CSS"]
  }
];

export const languages = [
  { name: "Italian", proficiency: "Native" },
  { name: "English", proficiency: "Fluent" },
];

export const SHOW_EXPERIENCE = true;
