// --- CONFIGURATION ---
// URL des images de sorts (DataDragon)
const spellUrl = (spell) => `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/Summoner${spell}.png`;

// --- DATABASE (35 CHAMPIONS AVEC SORTS) ---
const data = [
    // --- LES CLASSIQUES ---
    { id: "Darius", name: "Darius", diff: "hard", img: "Darius", spells: ["Flash", "Barrier"],
      pros: "Tu gagnes court trade si tu esquives Q externe. E pour réduire burst.",
      cons: "5 stacks = mort. Ne fight jamais longtemps sans ton E." },
    { id: "Garen", name: "Garen", diff: "medium", img: "Garen", spells: ["Flash", "Barrier"],
      pros: "Utilise E quand il fonce avec son A. Heal sur sbires pendant son spin.",
      cons: "R + Ignite t'exécute de loin." },
    { id: "Teemo", name: "Teemo", diff: "easy", img: "Teemo", spells: ["Flash", "Ignite"],
      pros: "Niveau 6 : R + Ignite = Kill. Q suit son Flash.",
      cons: "Blind empêche soin. Ne prends pas de poke gratuit." },
    { id: "Sett", name: "Sett", diff: "hard", img: "Sett", spells: ["Flash", "Barrier"],
      pros: "Q-hold pour passer derrière son Z (coup de poing).",
      cons: "Burst énorme. Ne le laisse pas te grab dans ses sbires." },

    // --- BRUISERS ---
    { id: "Jax", name: "Jax", diff: "medium", img: "Jax", spells: ["Flash", "Barrier"],
      pros: "Active E pendant son hélico. Fear-le avant le stun.",
      cons: "Outscale fort. Ne laisse pas la game durer." },
    { id: "Fiora", name: "Fiora", diff: "hard", img: "Fiora", spells: ["Flash", "Ignite"],
      pros: "Colle-toi aux murs pour cacher tes points vitaux.",
      cons: "Si elle pare (W) ton Fear, tu es mort." },
    { id: "Renekton", name: "Renekton", diff: "medium", img: "Renekton", spells: ["Flash", "Barrier"],
      pros: "Ton E tank son burst. Soigne-toi quand il n'a plus de rage.",
      cons: "Son Z renforcé brise ton bouclier." },
    { id: "Riven", name: "Riven", diff: "medium", img: "Riven", spells: ["Flash", "Barrier"],
      pros: "E annule son burst. Fragile si fear.",
      cons: "Trop mobile. Difficile à attraper." },
    { id: "Irelia", name: "Irelia", diff: "hard", img: "Irelia", spells: ["Flash", "Barrier"],
      pros: "Fear-la quand elle Q sur toi.",
      cons: "4 stacks passif = danger de mort." },
    { id: "Camille", name: "Camille", diff: "easy", img: "Camille", spells: ["Flash", "Barrier"],
      pros: "Fear annule son grappin (E).",
      cons: "Dégâts bruts en late game." },
    { id: "Aatrox", name: "Aatrox", diff: "medium", img: "Aatrox", spells: ["Flash", "Ignite"],
      pros: "Q-hold pour esquiver ses zones.",
      cons: "Trop de soin. Anti-heal obligatoire." },

    // --- TANKS ---
    { id: "Malphite", name: "Malphite", diff: "easy", img: "Malphite", spells: ["Flash", "Barrier"],
      pros: "Ne peut pas te tuer. Dive-le avec R.",
      cons: "Plus utile en teamfight." },
    { id: "Sion", name: "Sion", diff: "easy", img: "Sion", spells: ["Flash", "Barrier"],
      pros: "Q-hold annule son A. Sac à PV pour toi.",
      cons: "Revient toujours sur la lane." },
    { id: "Ornn", name: "Ornn", diff: "medium", img: "Ornn", spells: ["Flash", "Teleport"],
      pros: "Annule son R avec ton R.",
      cons: "Très tanky et fait mal." },
    { id: "Shen", name: "Shen", diff: "easy", img: "Shen", spells: ["Flash", "Teleport"],
      pros: "Annule son R avec E ou R. Prends la tour.",
      cons: "Sa zone W bloque tes attaques." },
    { id: "TahmKench", name: "Tahm Kench", diff: "hard", img: "TahmKench", spells: ["Flash", "Barrier"],
      pros: "Farm et attends le jungler.",
      cons: "Te bat en stat-check. Attention à sa tour." },
    { id: "Chogath", name: "Cho'Gath", diff: "medium", img: "Chogath", spells: ["Flash", "Barrier"],
      pros: "Esquive son A (Q) avec vitesse.",
      cons: "Son R t'exécute tôt." },
    { id: "Mundo", name: "Dr. Mundo", diff: "easy", img: "DrMundo", spells: ["Flash", "Ignite"],
      pros: "Ton soin bat le sien early.",
      cons: "Prends anti-heal." },
    { id: "KSante", name: "K'Sante", diff: "medium", img: "KSante", spells: ["Flash", "Ghost"],
      pros: "Pas assez de dégâts pour te tuer early.",
      cons: "Beaucoup de CC, attention aux murs." },

    // --- RANGED ---
    { id: "Vayne", name: "Vayne", diff: "hard", img: "Vayne", spells: ["Flash", "Ghost"],
      pros: "Si tu touches R, elle meurt.",
      cons: "Te kite à l'infini. Condemn (E) au mur = mort." },
    { id: "Quinn", name: "Quinn", diff: "hard", img: "Quinn", spells: ["Flash", "Ghost"],
      pros: "Niveau 6, suis-la avec passif.",
      cons: "Aveuglement et saut t'empêchent de l'atteindre." },
    { id: "Jayce", name: "Jayce", diff: "medium", img: "Jayce", spells: ["Flash", "Ghost"],
      pros: "Si forme marteau, active E.",
      cons: "Poke fort." },
    { id: "Kennen", name: "Kennen", diff: "medium", img: "Kennen", spells: ["Flash", "Barrier"],
      pros: "Q suit son dash. Fear-le hors ulti.",
      cons: "Stun pénible. Prends ténacité." },
    { id: "Gnar", name: "Gnar", diff: "medium", img: "Gnar", spells: ["Flash", "Ghost"],
      pros: "Tue-le quand il est petit.",
      cons: "Mega-Gnar a trop de CC." },
    { id: "Kayle", name: "Kayle", diff: "easy", img: "Kayle", spells: ["Flash", "Ghost"],
      pros: "Abuse-la pré-6. Dive boucle.",
      cons: "Niveau 16 = Perdu." },
    { id: "Urgot", name: "Urgot", diff: "medium", img: "Urgot", spells: ["Flash", "Barrier"],
      pros: "R permet de regen au dessus seuil execute.",
      cons: "Tourne autour de lui (passif)." },

    // --- AUTRES ---
    { id: "Tryndamere", name: "Tryndamere", diff: "medium", img: "Tryndamere", spells: ["Flash", "Barrier"],
      pros: "Kite son R avec Fear. Randuin op.",
      cons: "Chance critique niveau 1." },
    { id: "Volibear", name: "Volibear", diff: "hard", img: "Volibear", spells: ["Flash", "Barrier"],
      pros: "Esquive E (foudre).",
      cons: "Se soigne trop et burst fort." },
    { id: "Olaf", name: "Olaf", diff: "hard", img: "Olaf", spells: ["Flash", "Barrier"],
      pros: "Ne fight pas niveau 1.",
      cons: "R annule tes CC. Pire counter." },
    { id: "Yorick", name: "Yorick", diff: "medium", img: "Yorick", spells: ["Flash", "Tp"],
      pros: "Tue les goules. Fuis la cage.",
      cons: "Bloqué dans cage = mort." },
    { id: "Illaoi", name: "Illaoi", diff: "hard", img: "Illaoi", spells: ["Flash", "Barrier"],
      pros: "Esquive E ou fuis.",
      cons: "E + R = Mort instantanée." },
    { id: "Nasus", name: "Nasus", diff: "easy", img: "Nasus", spells: ["Flash", "Ghost"],
      pros: "Détruis-le early.",
      cons: "Wither (W) casse ta vitesse d'attaque." },
    { id: "Mordekaiser", name: "Mordekaiser", diff: "medium", img: "Mordekaiser", spells: ["Flash", "Barrier"],
      pros: "Q-hold esquive son A.",
      cons: "Te vole tes stats dans son R." },
    { id: "Yone", name: "Yone", diff: "easy", img: "Yone", spells: ["Flash", "Barrier"],
      pros: "Fragile. E le détruit.",
      cons: "Garde R pour après son E." }
];

// --- DOM ELEMENTS ---
const grid = document.getElementById('grid');
const search = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const mTitle = document.getElementById('modal-title');
const mHeader = document.getElementById('modal-header');
const mPros = document.getElementById('modal-pros');
const mCons = document.getElementById('modal-cons');
const mNotes = document.getElementById('user-notes');
const mSpells = document.getElementById('summoner-spells');
const saveBtn = document.getElementById('save-btn');
const saveMsg = document.getElementById('save-msg');
const closeBtn = document.querySelector('.close-btn');
const soundClick = document.getElementById('sound-click');
// Import/Export
const exportBtn = document.getElementById('export-btn');
const importBtnTrig = document.getElementById('import-btn-trigger');
const importFile = document.getElementById('import-file');

// Etat des filtres
let currentFilter = 'all';

// --- FONCTIONS ---

function playSound() {
    // Joue le son si possible (peut être bloqué par le navigateur)
    try { soundClick.currentTime = 0; soundClick.play(); } catch(e){}
}

function render(searchText = "") {
    grid.innerHTML = "";
    
    // Filtrage combiné (Texte + Difficulté)
    const filtered = data.filter(c => {
        const matchText = c.name.toLowerCase().includes(searchText.toLowerCase());
        const matchDiff = currentFilter === 'all' || c.diff === currentFilter;
        return matchText && matchDiff;
    });

    filtered.forEach(c => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${c.img}_0.jpg" loading="lazy">
            <span class="difficulty ${c.diff}">${c.diff.toUpperCase()}</span>
            <h3>${c.name}</h3>
        `;
        div.onclick = () => { playSound(); openModal(c); };
        grid.appendChild(div);
    });
}

function openModal(c) {
    // Contenu Textuel
    mTitle.innerText = c.name.toUpperCase();
    mHeader.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${c.img}_0.jpg')`;
    mPros.innerText = c.pros;
    mCons.innerText = c.cons;

    // Affichage des sorts
    mSpells.innerHTML = c.spells.map(spell => 
        `<img src="${spellUrl(spell)}" class="spell-icon" title="${spell}">`
    ).join('');
    
    // Notes Perso
    mNotes.value = localStorage.getItem(`ww_note_${c.id}`) || "";
    
    modal.style.display = "block";
    saveMsg.style.opacity = "0";
}

// Gestion des Filtres
function filterData(type) {
    currentFilter = type;
    
    // Mise à jour visuelle des boutons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.classList.contains(type) || (type==='all' && !btn.classList.contains('easy') && !btn.classList.contains('medium') && !btn.classList.contains('hard'))) {
            btn.classList.add('active');
        }
    });

    render(search.value);
}

// --- IMPORT / EXPORT (JSON) ---

// 1. Export
exportBtn.onclick = () => {
    // On rassemble toutes les notes qui commencent par 'ww_note_'
    let exportData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('ww_note_')) {
            exportData[key] = localStorage.getItem(key);
        }
    }
    
    // Création du fichier
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "warwick_notes_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
};

// 2. Import
importBtnTrig.onclick = () => importFile.click();

importFile.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const importedData = JSON.parse(event.target.result);
            // On sauvegarde dans le localStorage
            Object.keys(importedData).forEach(key => {
                if(key.startsWith('ww_note_')) {
                    localStorage.setItem(key, importedData[key]);
                }
            });
            alert("Notes importées avec succès !");
            location.reload(); // Recharger pour afficher les notes
        } catch(err) {
            alert("Erreur lors de la lecture du fichier.");
        }
    };
    reader.readAsText(file);
};

// --- EVENTS ---
saveBtn.onclick = () => {
    const champName = mTitle.innerText.charAt(0) + mTitle.innerText.slice(1).toLowerCase(); // Récupérer le nom proprement c'est dur ici, on utilise le titre modal converti ou une variable globale
    // On va plutôt utiliser une variable globale pour l'ID, plus sûr
    const currentC = data.find(c => c.name.toUpperCase() === mTitle.innerText);
    if(currentC) {
        localStorage.setItem(`ww_note_${currentC.id}`, mNotes.value);
        saveMsg.style.opacity = "1";
        setTimeout(() => { saveMsg.style.opacity = "0"; }, 2000);
    }
};

search.oninput = (e) => render(e.target.value);
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; };

// Lancement
render();
