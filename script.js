const distros = [
    { name: "Linux Mint", desc: "Perfeito para iniciantes. Interface familiar e muito estável.", tags: ["Iniciante", "Uso Geral", "Windows-like"], color: "#87c03c", url: "https://linuxmint.com/download.php", scores: { exp: 1, use: "general", interface: "windows", update: "stable" } },
    { name: "Ubuntu", desc: "A distro mais popular. Excelente suporte e fácil de usar.", tags: ["Iniciante", "Programação", "Moderno"], color: "#E95420", url: "https://ubuntu.com/download/desktop", scores: { exp: 1, use: "general", interface: "modern", update: "stable" } },
    { name: "Zorin OS", desc: "Design lindíssimo, feito para quem vem do Windows ou macOS.", tags: ["Iniciante", "Design", "Windows-like"], color: "#3FB1E4", url: "https://zorin.com/os/download/", scores: { exp: 1, use: "general", interface: "windows", update: "stable" } },
    { name: "elementary OS", desc: "Foco extremo em design e facilidade, muito parecido com macOS.", tags: ["Iniciante", "macOS-like", "Design"], color: "#54C8EB", url: "https://elementary.io/", scores: { exp: 1, use: "general", interface: "mac", update: "stable" } },
    { name: "Pop!_OS", desc: "Excelente para jogos e programação. Traz drivers de vídeo prontos.", tags: ["Intermediário", "Jogos", "Programação"], color: "#48B9C7", url: "https://pop.system76.com/", scores: { exp: 2, use: "gaming", interface: "modern", update: "stable" } },
    { 
        name: "Fedora", 
        desc: "Sempre atualizado com as tecnologias mais recentes do mundo Linux.",
        fullDesc: "Fedora é patrocinada pela Red Hat e é conhecida por estar sempre na vanguarda da tecnologia Linux. Ela traz as versões mais recentes de software e é a distribuição de escolha de Linus Torvalds, o criador do Linux.",
        slogan: "Liberdade. Amigos. Recursos. Primeiro.",
        why: "Fedora é excelente para desenvolvedores e entusiastas que querem tecnologia de ponta com estabilidade. Inclui GNOME puro e atualizado, ferramentas de desenvolvimento modernas e é a base do Red Hat Enterprise Linux.",
        features: ["Software sempre atualizado", "Flatpak nativo", "GNOME puro e moderno", "Excelente para desenvolvimento"],
        tags: ["Intermediário", "Programação", "Novidades"], 
        color: "#51A2DA", 
        url: "https://fedoraproject.org/workstation/download", 
        scores: { exp: 2, use: "dev", interface: "modern", update: "rolling" } 
    },
    { name: "Debian", desc: "A rocha. Estabilidade extrema. Base para Ubuntu e Mint.", tags: ["Intermediário", "Servidor", "Estabilidade"], color: "#A80030", url: "https://www.debian.org/download", scores: { exp: 2, use: "server", interface: "custom", update: "stable" } },
    { name: "Arch Linux", desc: "Faça você mesmo. Você constrói o sistema do zero. Rolling release.", tags: ["Avançado", "Customização", "Rolling Release"], color: "#1793D1", url: "https://archlinux.org/download/", scores: { exp: 3, use: "custom", interface: "custom", update: "rolling" } },
    { name: "Manjaro", desc: "Baseado no Arch, mas fácil de instalar. Últimos softwares.", tags: ["Intermediário", "Rolling Release", "Jogos"], color: "#35BF5C", url: "https://manjaro.org/download/", scores: { exp: 2, use: "gaming", interface: "custom", update: "rolling" } },
    { name: "EndeavourOS", desc: "Arch Linux com um instalador fácil e uma comunidade amigável.", tags: ["Avançado", "Terminal", "Rolling Release"], color: "#7f71ad", url: "https://endeavouros.com/latest-release/", scores: { exp: 3, use: "dev", interface: "terminal", update: "rolling" } },
    { name: "Linux Lite", desc: "Revive computadores antigos com uma interface leve e fácil.", tags: ["Iniciante", "PC Antigo", "Leve"], color: "#FFDE00", url: "https://www.linuxliteos.com/download.php", scores: { exp: 1, use: "old_pc", interface: "windows", update: "stable" } },
    { name: "Lubuntu", desc: "Sabor oficial do Ubuntu focado em extrema leveza (LXQt).", tags: ["Iniciante", "PC Antigo", "Leve"], color: "#0068C8", url: "https://lubuntu.me/downloads/", scores: { exp: 1, use: "old_pc", interface: "light", update: "stable" } },
    { name: "Kali Linux", desc: "O padrão da indústria para Hacking e Pentest.", tags: ["Avançado", "Hacking", "Segurança"], color: "#557C94", url: "https://www.kali.org/get-kali/", scores: { exp: 3, use: "hacking", interface: "custom", update: "rolling" } },
    { name: "Parrot OS", desc: "Excelente alternativa ao Kali para segurança e privacidade.", tags: ["Intermediário", "Hacking", "Privacidade"], color: "#3DB9CC", url: "https://parrotsec.org/download/", scores: { exp: 2, use: "hacking", interface: "custom", update: "rolling" } },
    { name: "Tails", desc: "Sistema amnésico focado em anonimato extremo (Deep Web).", tags: ["Intermediário", "Privacidade", "Anonimato"], color: "#56347C", url: "https://tails.net/install/", scores: { exp: 2, use: "privacy", interface: "light", update: "stable" } },
    { name: "Qubes OS", desc: "Segurança por isolamento. Usa máquinas virtuais para tudo.", tags: ["Especialista", "Privacidade", "Segurança"], color: "#2B5885", url: "https://www.qubes-os.org/downloads/", scores: { exp: 4, use: "privacy", interface: "custom", update: "stable" } },
    { name: "Bazzite", desc: "Baseado no Fedora, feito especificamente para PCs Gamers e Steam Deck.", tags: ["Intermediário", "Jogos", "Imutável"], color: "#7a5cb6", url: "https://bazzite.gg/", scores: { exp: 2, use: "gaming", interface: "modern", update: "immutable" } },
    { name: "Nobara Linux", desc: "Versão modificada do Fedora focada 100% em Jogos e Streaming.", tags: ["Intermediário", "Jogos", "Multimídia"], color: "#E0E0E0", url: "https://nobaraproject.org/download/", scores: { exp: 2, use: "gaming", interface: "modern", update: "rolling" } },
    { name: "Ubuntu Studio", desc: "Feito para criadores: Áudio, Vídeo e Gráficos pré-instalados.", tags: ["Intermediário", "Multimídia", "Produção"], color: "#E95420", url: "https://ubuntustudio.org/download/", scores: { exp: 2, use: "media", interface: "custom", update: "stable" } },
    { name: "AlmaLinux", desc: "Clone 1:1 do Red Hat (RHEL). Excelente para servidores e enterprise.", tags: ["Avançado", "Servidor", "Enterprise"], color: "#1D252C", url: "https://almalinux.org/get-almalinux/", scores: { exp: 3, use: "server", interface: "terminal", update: "stable" } },
    { name: "Rocky Linux", desc: "Outra excelente alternativa Enterprise focada em servidores.", tags: ["Avançado", "Servidor", "Enterprise"], color: "#10B981", url: "https://rockylinux.org/download", scores: { exp: 3, use: "server", interface: "terminal", update: "stable" } },
    { name: "Alpine Linux", desc: "Ultra leve e focado em segurança. Muito usado em Docker/Containers.", tags: ["Especialista", "Servidor", "Minimalista"], color: "#0D597F", url: "https://alpinelinux.org/downloads/", scores: { exp: 4, use: "server", interface: "terminal", update: "rolling" } },
    { name: "Gentoo", desc: "Compile tudo do zero. Para quem quer otimização extrema.", tags: ["Especialista", "Código Fonte", "Performance"], color: "#CCCCFF", url: "https://www.gentoo.org/downloads/", scores: { exp: 4, use: "custom", interface: "terminal", update: "source" } },
    { name: "NixOS", desc: "Sistema declarativo. Tudo é configurado em um único arquivo de texto.", tags: ["Especialista", "DevOps", "Declarativo"], color: "#7EBAE4", url: "https://nixos.org/download", scores: { exp: 4, use: "dev", interface: "custom", update: "immutable" } },
    { name: "Fedora Silverblue", desc: "Sistema imutável. Atualizações atômicas impossíveis de quebrar.", tags: ["Intermediário", "Imutável", "Estável"], color: "#51A2DA", url: "https://fedoraproject.org/silverblue/", scores: { exp: 2, use: "general", interface: "modern", update: "immutable" } },
    { name: "openSUSE Tumbleweed", desc: "Rolling release muito testada e estável. Foco em desenvolvedores.", tags: ["Avançado", "Rolling Release", "Enterprise"], color: "#73BA25", url: "https://get.opensuse.org/tumbleweed", scores: { exp: 3, use: "dev", interface: "custom", update: "rolling" } },
    { name: "Void Linux", desc: "Independente, não usa systemd. Rápido e focado no essencial.", tags: ["Avançado", "Minimalista", "Rápido"], color: "#478061", url: "https://voidlinux.org/download/", scores: { exp: 3, use: "custom", interface: "terminal", update: "rolling" } },
    { name: "Slackware", desc: "A distro mais antiga ainda ativa. UNIX-like em sua essência.", tags: ["Especialista", "Clássico", "UNIX"], color: "#3B4252", url: "http://www.slackware.com/getslack/", scores: { exp: 4, use: "custom", interface: "terminal", update: "stable" } }
];

const questions = [
    {
        question: "Qual o seu nível de experiência com o Linux?",
        options: [
            { icon: "🐣", text: "Iniciante", desc: "Nunca usei ou usei muito pouco", values: { exp: 1 } },
            { icon: "🚶", text: "Intermediário", desc: "Já usei, sei usar um pouco o terminal", values: { exp: 2 } },
            { icon: "🏃", text: "Avançado", desc: "Instalo via terminal, resolvo problemas", values: { exp: 3 } },
            { icon: "🧙‍♂️", text: "Especialista", desc: "Quero compilar tudo ou usar sistemas complexos", values: { exp: 4 } }
        ]
    },
    {
        question: "Qual será o foco principal de uso?",
        options: [
            { icon: "☕", text: "Uso Diário", desc: "Navegação na web, trabalho e estudo", values: { use: "general" } },
            { icon: "💻", text: "Programação", desc: "Desenvolvimento de software e DevOps", values: { use: "dev" } },
            { icon: "🎮", text: "Jogos", desc: "Focado em rodar jogos e Steam", values: { use: "gaming" } },
            { icon: "🕵️‍♂️", text: "Hacking", desc: "Segurança da Informação e Pentest", values: { use: "hacking" } },
            { icon: "📻", text: "PC Antigo", desc: "Reviver um computador mais fraco", values: { use: "old_pc" } },
            { icon: "🛡️", text: "Privacidade", desc: "Anonimato absoluto e Deep Web", values: { use: "privacy" } },
            { icon: "🖧", text: "Servidor", desc: "Infraestrutura e serviços em nuvem", values: { use: "server" } },
            { icon: "🎨", text: "Multimídia", desc: "Produção de áudio, vídeo e imagem", values: { use: "media" } }
        ]
    },
    {
        question: "Qual é a sua preferência visual?",
        options: [
            { icon: "🪟", text: "Estilo Windows", desc: "Barra de tarefas embaixo, menu iniciar", values: { interface: "windows" } },
            { icon: "🍎", text: "Estilo macOS", desc: "Dock central elegante, visual limpo", values: { interface: "mac" } },
            { icon: "🐧", text: "Moderno Linux", desc: "Visual próprio e dinâmico (GNOME/KDE)", values: { interface: "modern" } },
            { icon: "🪶", text: "Ultra Leve", desc: "Foco apenas em performance e velocidade", values: { interface: "light" } },
            { icon: "⌨️", text: "Foco no Terminal", desc: "Quero usar apenas teclado e comandos", values: { interface: "terminal" } },
            { icon: "🧩", text: "Customizável", desc: "Eu mesmo vou montar do meu jeito", values: { interface: "custom" } }
        ]
    },
    {
        question: "Como você lida com atualizações de sistema?",
        options: [
            { icon: "🧱", text: "Estabilidade Máxima", desc: "Atualiza menos, foco total em não quebrar", values: { update: "stable" } },
            { icon: "🌊", text: "Rolling Release", desc: "Última versão dos softwares, atualiza sempre", values: { update: "rolling" } },
            { icon: "🔒", text: "Sistema Imutável", desc: "Inquebrável, atualizações atômicas isoladas", values: { update: "immutable" } },
            { icon: "⚙️", text: "Código Fonte", desc: "Quero compilar minhas próprias atualizações", values: { update: "source" } }
        ]
    }
];

let currentQuestion = 0;
let userPreferences = {
    exp: 0,
    use: "",
    interface: "",
    update: ""
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const progressText = document.getElementById('progress-text');
const userCounterEl = document.getElementById('user-counter');

// Live Counter via API
const baseCount = 1248;
async function fetchLiveCounter() {
    if(userCounterEl) {
        try {
            // Add cache-busting to prevent mobile browsers from caching the GET request
            const response = await fetch('https://api.counterapi.dev/v1/melhordistroparalinux/visits/up?t=' + Date.now(), {
                cache: 'no-store'
            });
            const data = await response.json();
            
            const total = baseCount + data.count;
            userCounterEl.textContent = total.toLocaleString('pt-BR');
        } catch (error) {
            userCounterEl.textContent = baseCount.toLocaleString('pt-BR');
        }
    }
}
// Fetch and increment counter on load
fetchLiveCounter();

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);
document.getElementById('back-btn').addEventListener('click', goBack);

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestion = 0;
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';
    
    // Update progress bar
    const progress = (currentQuestion / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Update counter texts
    questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
    progressText.textContent = `${Math.round(progress)}% completo`;

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <div class="option-icon">${opt.icon}</div>
            <div class="option-content">
                <strong>${opt.text}</strong>
                <span>${opt.desc}</span>
            </div>
        `;
        btn.addEventListener('click', () => selectOption(opt.values));
        
        // Add staggered animation delay
        btn.style.animation = `fadeIn 0.3s ease-out ${index * 0.1}s forwards`;
        btn.style.opacity = '0';
        
        optionsContainer.appendChild(btn);
    });
}

function selectOption(values) {
    userPreferences = { ...userPreferences, ...values };
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        progressBar.style.width = `100%`;
        setTimeout(calculateResult, 300);
    }
}

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    } else {
        quizScreen.classList.remove('active');
        startScreen.classList.add('active');
    }
}

function calculateResult() {
    // Scoring system
    distros.forEach(distro => {
        distro.matchScore = 0;
        
        // Experience matching
        if (distro.scores.exp === userPreferences.exp) {
            distro.matchScore += 30;
        } else if (Math.abs(distro.scores.exp - userPreferences.exp) === 1) {
            distro.matchScore += 10;
        } else {
            distro.matchScore -= 20; // Penalize wrong experience level
        }

        // Use case matching
        if (distro.scores.use === userPreferences.use) {
            distro.matchScore += 40;
        }

        // Interface matching
        if (distro.scores.interface === userPreferences.interface) {
            distro.matchScore += 15;
        } else if (userPreferences.interface === "custom" && distro.scores.interface === "modern") {
            distro.matchScore += 5;
        } else if (userPreferences.interface === "terminal" && distro.scores.interface !== "terminal") {
            distro.matchScore -= 10;
        }

        // Update style matching
        if (distro.scores.update === userPreferences.update) {
            distro.matchScore += 20;
        }
    });

    // Sort by score
    distros.sort((a, b) => b.matchScore - a.matchScore);
    
    showResult();
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const winner = distros[0];
    
    const distroNameEl = document.getElementById('distro-name');
    const distroSloganEl = document.getElementById('distro-slogan');
    const distroDescEl = document.getElementById('distro-desc');
    const distroWhyEl = document.getElementById('distro-why');
    const distroFeaturesEl = document.getElementById('distro-features');
    const tagsContainer = document.getElementById('distro-tags');
    const distroDownloadEl = document.getElementById('distro-download');
    
    const distroIconPlaceholder = document.getElementById('distro-icon-placeholder');
    const distroLogo = document.getElementById('distro-logo');
    
    // Simple-icons mapping
    const slugs = {
        "Linux Mint": "linuxmint", "Ubuntu": "ubuntu", "Zorin OS": "zorin", 
        "elementary OS": "elementary", "Pop!_OS": "popos", "Fedora": "fedora", 
        "Debian": "debian", "Arch Linux": "archlinux", "Manjaro": "manjaro", 
        "EndeavourOS": "endeavouros", "Kali Linux": "kalilinux", "Tails": "tails", 
        "Qubes OS": "qubesos", "AlmaLinux": "almalinux", "Rocky Linux": "rockylinux", 
        "Alpine Linux": "alpinelinux", "Gentoo": "gentoo", "NixOS": "nixos", 
        "openSUSE Tumbleweed": "opensuse", "Void Linux": "voidlinux", "Slackware": "slackware"
    };

    const slug = slugs[winner.name] || "linux";
    const hexColor = winner.color.replace('#', '');
    
    distroIconPlaceholder.style.display = 'none';
    distroLogo.style.display = 'block';
    distroLogo.src = `https://cdn.simpleicons.org/${slug}/${hexColor}`;
    
    distroNameEl.textContent = winner.name;
    // Utilize optional fields or generate fallbacks dynamically
    distroSloganEl.textContent = winner.slogan || `A escolha perfeita para o seu perfil.`;
    distroDescEl.textContent = winner.fullDesc || winner.desc;
    distroWhyEl.textContent = winner.why || `Baseado nas suas preferências, esta distribuição atende perfeitamente aos seus requisitos, oferecendo a melhor combinação de recursos e experiência de uso.`;
    
    // Set features list
    distroFeaturesEl.innerHTML = '';
    const features = winner.features || [
        `Ideal para o seu nível: ${winner.tags[0]}`,
        `Foco principal: ${winner.tags[1]}`,
        `Estilo de uso: ${winner.tags[2]}`,
        `Ótima estabilidade e performance`
    ];
    
    features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        distroFeaturesEl.appendChild(li);
    });
    
    // Set download URL
    distroDownloadEl.href = winner.url;
    
    tagsContainer.innerHTML = '';
    winner.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Honorable mentions
    const mentionsContainer = document.getElementById('honorable-mentions-container');
    const mentionsList = document.getElementById('mentions-list');
    mentionsList.innerHTML = '';
    
    if (distros[1] && distros[1].matchScore > 0) {
        mentionsContainer.style.display = 'block';
        for(let i = 1; i <= 3; i++) {
            if(distros[i] && distros[i].matchScore > 0) {
                const li = document.createElement('li');
                const matchPct = Math.round((distros[i].matchScore / distros[0].matchScore)*100);
                
                let tagsHtml = '';
                distros[i].tags.forEach(t => {
                    tagsHtml += `<span>${t}</span>`;
                });

                const mentionSlug = slugs[distros[i].name] || "linux";
                const mentionHexColor = distros[i].color.replace('#', '');

                li.innerHTML = `
                    <div class="mention-header">
                        <div class="mention-title-group" style="display: flex; align-items: center; gap: 10px;">
                            <img src="https://cdn.simpleicons.org/${mentionSlug}/${mentionHexColor}" alt="${distros[i].name} logo" style="width: 24px; height: 24px; object-fit: contain;">
                            <h4 style="color: ${distros[i].color}; margin: 0;">${distros[i].name}</h4>
                        </div>
                        <span class="mention-score">${matchPct > 100 ? 100 : matchPct}% Match</span>
                    </div>
                    <p class="mention-desc">${distros[i].desc}</p>
                    <div class="mention-footer">
                        <div class="mention-tags">${tagsHtml}</div>
                        <a href="${distros[i].url}" target="_blank" class="small-download">📥 Baixar</a>
                    </div>
                `;
                mentionsList.appendChild(li);
            }
        }
    } else {
        mentionsContainer.style.display = 'none';
    }
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    userPreferences = { exp: 0, use: "", interface: "", update: "" };
}
