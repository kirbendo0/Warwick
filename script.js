// --- BASE DE DONNÉES EXTENSIVE (35 CHAMPIONS) ---
const data = [
    // --- LES CLASSIQUES ---
    { id: "Darius", name: "Darius", diff: "hard", img: "Darius",
      pros: "Tu gagnes les trades courts si tu Q-hold son A (zone externe). Utilise E pour tank son burst.",
      cons: "5 stacks = mort. Ne fight jamais longtemps sans ton E." },
    { id: "Garen", name: "Garen", diff: "medium", img: "Garen",
      pros: "Utilise E quand il fonce avec son A (Silence). Tu peux heal sur les sbires pendant qu'il spin.",
      cons: "Son R + Ignite t'exécute de très loin. Attention au burst." },
    { id: "Teemo", name: "Teemo", diff: "easy", img: "Teemo",
      pros: "Niveau 6 : R + Ignite = Kill garanti. Ton Q suit son Flash.",
      cons: "Le blind t'empêche de te soigner. Ne prends pas de dégâts gratuits avant le niveau 3." },
    { id: "Sett", name: "Sett", diff: "hard", img: "Sett",
      pros: "Q-hold pour passer derrière lui quand il charge son Z (coup de poing zone).",
      cons: "Son burst est énorme early. Ne le laisse pas te grab dans ses sbires." },
    
    // --- LES BRUISERS ---
    { id: "Jax", name: "Jax", diff: "medium", img: "Jax",
      pros: "Active E quand il active son E (Hélicoptère). Fear-le avant qu'il ne t'étourdisse.",
      cons: "Il outscale très fort. Ne laisse pas la game durer." },
    { id: "Fiora", name: "Fiora", diff: "hard", img: "Fiora",
      pros: "Colle-toi aux murs pour protéger tes points vitaux.",
      cons: "Si elle pare (W) ton Fear ou ton R, tu es mort. Matchup très technique." },
    { id: "Renekton", name: "Renekton", diff: "medium", img: "Renekton",
      pros: "Ton E tank tout son burst. Soigne-toi quand il n'a plus de rage.",
      cons: "Il peut briser ton bouclier avec son Z renforcé." },
    { id: "Riven", name: "Riven", diff: "medium", img: "Riven",
      pros: "Ton E annule son burst. Elle est très fragile si elle est Fear.",
      cons: "Si elle te kite bien, tu ne la toucheras jamais." },
    { id: "Irelia", name: "Irelia", diff: "hard", img: "Irelia",
      pros: "Son stun est prévisible. Fear-la quand elle Q sur toi.",
      cons: "Si elle a son passif chargé (4 stacks), ne fight pas. Elle te découpe." },
    { id: "Camille", name: "Camille", diff: "easy", img: "Camille",
      pros: "Tu peux annuler son grappin (E) avec ton Fear. Tu gagnes les longs trades.",
      cons: "Elle peut kite avec son Z. Attention à ses dégâts bruts en late game." },
    { id: "Aatrox", name: "Aatrox", diff: "medium", img: "Aatrox",
      pros: "Q-hold pour passer derrière lui lors de ses Q. Esquive les sweet spots.",
      cons: "Il se soigne beaucoup. Prends l'anti-heal (800g) très vite." },
    
    // --- LES TANKS ---
    { id: "Malphite", name: "Malphite", diff: "easy", img: "Malphite",
      pros: "Il ne peut pas te tuer. Tu peux le dive facilement avec ton R.",
      cons: "Il sera plus utile en teamfight. Splitpush pour le bloquer." },
    { id: "Sion", name: "Sion", diff: "easy", img: "Sion",
      pros: "Q-hold son A pour l'interrompre ou l'esquiver. C'est un sac à PV pour toi.",
      cons: "Il reviendra toujours sur la lane avec son R ou TP. Attention aux ganks." },
    { id: "Ornn", name: "Ornn", diff: "medium", img: "Ornn",
      pros: "Q-hold quand il te fonce dessus ou crache du feu. Tu peux annuler son R avec ton R.",
      cons: "Il est très tanky et fait mal. Ne le sous-estime pas." },
    { id: "Shen", name: "Shen", diff: "easy", img: "Shen",
      pros: "Annule son R avec ton E ou R. Quand il part, prends sa tour.",
      cons: "Sa zone (W) bloque tes attaques. Attends qu'elle disparaisse." },
    { id: "TahmKench", name: "Tahm Kench", diff: "hard", img: "TahmKench",
      pros: "Pas grand chose. Farm et attends ton jungler.",
      cons: "Il te bat en stat-check. S'il te mange sous tour, tu es mort." },
    { id: "Chogath", name: "Cho'Gath", diff: "medium", img: "Chogath",
      pros: "Esquive son A (Q) et tu gagnes. Tu es plus rapide que lui.",
      cons: "Son R (Miam) t'exécute même si tu as ton E actif. Attention à tes HP." },
    { id: "Mundo", name: "Dr. Mundo", diff: "easy", img: "DrMundo",
      pros: "Colle-toi à lui. Ton soin bat le sien en early.",
      cons: "Ne reste pas low HP, il lance ses couperets. Prends anti-heal." },
    { id: "KSante", name: "K'Sante", diff: "medium", img: "KSante",
      pros: "Il ne fait pas assez de dégâts pour te tuer early. Sustain sur lui.",
      cons: "Il a beaucoup de CC et peut t'éloigner de ta team ou te mettre sous tour." },

    // --- LES RANGED & PENIBLES ---
    { id: "Vayne", name: "Vayne", diff: "hard", img: "Vayne",
      pros: "Si tu touches ton R, elle meurt. Joue avec les bush.",
      cons: "Elle te kite à l'infini. Si elle te condamne (E) au mur, c'est fini." },
    { id: "Quinn", name: "Quinn", diff: "hard", img: "Quinn",
      pros: "Niveau 6, tu peux la suivre avec ton passif de vitesse.",
      cons: "Son aveuglement et son saut t'empêchent de l'atteindre. Joue passif." },
    { id: "Jayce", name: "Jayce", diff: "medium", img: "Jayce",
      pros: "S'il change en marteau, active E. Tu le bats au corps à corps.",
      cons: "Il poke fort. Reste derrière les sbires." },
    { id: "Kennen", name: "Kennen", diff: "medium", img: "Kennen",
      pros: "Ton Q suit son dash électrique. Fear-le hors de son ulti.",
      cons: "Son stun est pénible. Prends de la ténacité." },
    { id: "Gnar", name: "Gnar", diff: "medium", img: "Gnar",
      pros: "Tue-le quand il est petit. Il est très fragile.",
      cons: "En Méga-Gnar, il a beaucoup de CC. Attention au mur." },
    { id: "Kayle", name: "Kayle", diff: "easy", img: "Kayle",
      pros: "Abuse-la pré-6. Dive en boucle. Freeze la lane.",
      cons: "Si la game dure 35 minutes, tu as perdu." },
    { id: "Urgot", name: "Urgot", diff: "medium", img: "Urgot",
      pros: "Ton R te permet de repasser au-dessus du seuil d'exécution.",
      cons: "S'il te retourne (E), tu prends cher. Tourne autour de lui." },

    // --- LES SPECIAUX ---
    { id: "Tryndamere", name: "Tryndamere", diff: "medium", img: "Tryndamere",
      pros: "Tu peux kite son R avec ton Fear. Randuin le détruit.",
      cons: "S'il a de la chatte sur les critiques niveau 1, ça peut mal tourner." },
    { id: "Volibear", name: "Volibear", diff: "hard", img: "Volibear",
      pros: "Esquive son E (foudre). Utilise E pour réduire son combo Q+W.",
      cons: "Il se soigne autant que toi et a plus de burst. Très dur à tuer." },
    { id: "Olaf", name: "Olaf", diff: "hard", img: "Olaf",
      pros: "Attends ton niveau 3. Ne fight pas niveau 1.",
      cons: "Son R annule ton R et ton E. C'est ton plus gros counter." },
    { id: "Yorick", name: "Yorick", diff: "medium", img: "Yorick",
      pros: "Tue ses goules avec tes auto-attaques pour l'or. Fuis sa cage.",
      cons: "S'il te bloque dans la cage avec son R, tu vas prendre cher." },
    { id: "Illaoi", name: "Illaoi", diff: "hard", img: "Illaoi",
      pros: "Si elle rate E, fonce. Détruis ses tentacules.",
      cons: "Si elle touche E + R, fuis IMMÉDIATEMENT." },
    { id: "Nasus", name: "Nasus", diff: "easy", img: "Nasus",
      pros: "Tu le domines totalement early. Empêche-le de stacker.",
      cons: "Son W (Slow) réduit ta vitesse d'attaque. C'est l'enfer sans bottes de célérité." },
    { id: "Mordekaiser", name: "Mordekaiser", diff: "medium", img: "Mordekaiser",
      pros: "Q-hold pour esquiver son A. Tu gagnes le stat-check early.",
      cons: "Dans son R, si tu rates tes sorts, il te vole tes stats et te tue." },
    { id: "Yone", name: "Yone", diff: "easy", img: "Yone",
      pros: "Il est fragile. Ton E le détruit quand il essaie de burst.",
      cons: "Il a beaucoup de dash. Garde ton R pour quand il a utilisé son E." }
];

// --- VARIABLES DOM ---
const grid = document.getElementById('grid');
const search = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const mTitle = document.getElementById('modal-title');
const mHeader = document.getElementById('modal-header');
const mPros = document.getElementById('modal-pros');
const mCons = document.getElementById('modal-cons');
const mNotes = document.getElementById('user-notes');
const saveBtn = document.getElementById('save-btn');
const saveMsg = document.getElementById('save-msg');
const closeBtn = document.querySelector('.close-btn');
let currentId = null;

// --- FONCTIONS ---

// Affichage
function render(filter = "") {
    grid.innerHTML = "";
    data.filter(c => c.name.toLowerCase().includes(filter.toLowerCase())).forEach(c => {
        const div = document.createElement('div');
        div.className = 'card';
        // Utilisation des images officielles Riot
        div.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${c.img}_0.jpg" loading="lazy">
            <span class="difficulty ${c.diff}">${c.diff.toUpperCase()}</span>
            <h3>${c.name}</h3>
        `;
        div.onclick = () => openModal(c);
        grid.appendChild(div);
    });
}

// Modal & Notes
function openModal(c) {
    currentId = c.id;
    mTitle.innerText = c.name.toUpperCase();
    mHeader.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${c.img}_0.jpg')`;
    mPros.innerText = c.pros;
    mCons.innerText = c.cons;
    
    // Récupérer la note sauvegardée dans le navigateur
    mNotes.value = localStorage.getItem(`ww_note_${c.id}`) || "";
    
    modal.style.display = "block";
    saveMsg.style.opacity = "0";
}

// Sauvegarde
saveBtn.onclick = () => {
    if(currentId) {
        localStorage.setItem(`ww_note_${currentId}`, mNotes.value);
        saveMsg.style.opacity = "1";
        // Petit délai pour effacer le message
        setTimeout(() => { saveMsg.style.opacity = "0"; }, 2000);
    }
};

// Events
search.oninput = (e) => render(e.target.value);
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; };

// Lancement
render();