// ─── Personal Info ────────────────────────────────────────────────────────────

export const personal = {
    name: "Oliver Froberg",
    title: "Software & Game Developer",
    tagline: "I have experience from Web development, App Development and Game Development.",
    status: "Attending VidenDjurs for web development",
    bio: [
        "Hey, I'm Oliver! I'm a Danish software and game developer. My programming journey began in 2018 through a passion for game development, exploring engines like Unity and Unreal before diving deep into Minecraft modding.",
        "Over the years, I've expanded my skillset from early C# experiments to full-stack development. Today, I work primarily with TypeScript for modern web apps, and Java/Kotlin for backend systems and game modifications."
    ],
    location: "Denmark",
    links: {
        github: "https://github.com/ThePandaOliver",
        curseforge: "https://www.curseforge.com/members/ThePandaOliver/projects",
        modrinth: "https://modrinth.com/user/ThePandaOliver",
        linkedin: "https://www.linkedin.com/in/oliver-froberg-a449b3393"
    },
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks = [
    {label: "Home", href: "#hero"},
    {label: "Skills", href: "#skills"},
    {label: "Projects", href: "#projects"},
    {label: "Modding", href: "#modding"},
    {label: "Partnership", href: "#partnership"},
] as const;

// ─── Skills ───────────────────────────────────────────────────────────────────

export type SkillCategory = {
    name: string;
    icon: string;
    skills: string[];
};

export const skillCategories: SkillCategory[] = [
    {
        name: "Languages",
        icon: "💻",
        skills: ["TypeScript", "JavaScript", "Java", "Kotlin", "HTML", "CSS", "C#", "SQL"],
    },
    {
        name: "Frameworks & Libraries",
        icon: "🧩",
        skills: ["React", "Next.js", "Vite.js", "Node.js", "Express", ".Net", "Gradle", "Maven", "Compose Multiplatform"],
    },
    {
        name: "Tools & Platforms",
        icon: "🔧",
        skills: ["Git", "GitHub", "GitLab", "VS Code", "JetBrains IDEs", "Docker", "Docker Compose", "Vercel", "Render", "Supabase", "Figma", "Hetzner", "Netcup", "Cloudflare", "Tailscale"],
    },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type Project = {
    title: string;
    description: string;
    tags: string[];
    href?: string;
    badge?: string;
};

export const projects: Project[] = [
    {
        title: "PandaLib",
        description: "A core library mod that powers all of my Minecraft projects. Provides shared utilities, event hooks, and config handling.",
        tags: ["Kotlin", "GitHub"],
        href: "https://www.curseforge.com/minecraft/mc-mods/pandalib",
        badge: "Open Source",
    },
    {
        title: "Panda's Falling Trees",
        description: "A Minecraft mod that makes trees fall realistically when you chop them down. One of my most popular mods with millions of downloads.",
        tags: ["Kotlin", "GitHub"],
        href: "https://www.curseforge.com/minecraft/mc-mods/pandas-falling-trees",
        badge: "Open Source",
    },
    {
        title: "Panda's Extra Details",
        description: "Adds subtle animations and aesthetic details to Minecraft blocks, making the world feel more alive without compromising performance.",
        tags: ["Kotlin", "GitHub"],
        href: "https://www.curseforge.com/minecraft/mc-mods/pandas-extra-details",
        badge: "Open Source",
    }
];

// ─── Minecraft Modding Stats ──────────────────────────────────────────────────

export const moddingStats = [
    {label: "Total Downloads", value: "30M+", icon: "⬇️"},
    {label: "CurseForge", value: "Active", icon: "🟠"},
    {label: "Modrinth", value: "Active", icon: "🟢"},
    {label: "Mod Loaders", value: "Fabric · Forge · NeoForge", icon: "⚙️"},
] as const;

export const moddingHandle = "The Panda Oliver";

// ─── Partnership ──────────────────────────────────────────────────────────────

export const partnership = {
    company: "Kinetic Hosting",
    companyUrl: "https://kinetichosting.net",
    description: "I'm proud to be partnered with Kinetic Hosting — a reliable Minecraft server hosting provider. As a mod developer trusted by millions of players, it's a natural fit to team up with a host that makes running those mods effortless.",
    tagline: "Recommended hosting for your Minecraft server.",
} as const;
