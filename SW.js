
// Données statiques pour les pages
const pages = {
  home: `
    <div id="main-content">
    <h1>PortFolio</h1>
    <p class="intro">Le PortFolio d'un étudiant en BTS SIO</p>
    <div class="container">
      <p class="description">
        Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.

          Ibi victu recreati et quiete, postquam abierat timor, vicos opulentos adorti equestrium adventu cohortium, quae casu propinquabant, nec resistere planitie porrecta conati digressi sunt retroque concedentes omne iuventutis robur relictum in sedibus acciverunt.

          Itaque verae amicitiae difficillime reperiuntur in iis qui in honoribus reque publica versantur; ubi enim istum invenias qui honorem amici anteponat suo? Quid? Haec ut omittam, quam graves, quam difficiles plerisque videntur calamitatum societates! Ad quas non est facile inventu qui descendant. Quamquam Ennius recte.

          Saepissime igitur mihi de amicitia cogitanti maxime illud considerandum videri solet, utrum propter imbecillitatem atque inopiam desiderata sit amicitia, ut dandis recipiendisque meritis quod quisque minus per se ipse posset, id acciperet ab alio vicissimque redderet, an esset hoc quidem proprium amicitiae, sed antiquior et pulchrior et magis a natura ipsa profecta alia causa. Amor enim, ex quo amicitia nominata est, princeps est ad benevolentiam coniungendam. Nam utilitates quidem etiam ab iis percipiuntur saepe qui simulatione amicitiae coluntur et observantur temporis causa, in amicitia autem nihil fictum est, nihil simulatum et, quidquid est, id est verum et voluntarium.
      </p>
    </div>
  </div>
  `,

  Tableau: `
<h1>Tableau des Compétences</h1>
<p class="intro">
        Vous retrouverez ici les différentes compétences ainsi qu'un lien vers le tableau officiel.
    </p>
    <a href="https://docs.google.com/spreadsheets/d/10Un2WtNTe1AedU251vJ0UMDwI2HLWmVf/edit?usp=sharing&ouid=109346040311630020004&rtpof=true&sd=true" target="_blank">
    Tableau des Compétences sur Excel
</a>
  `,


  Competences: `
     <h1>Compétences</h1>

    <p class="intro">
        Les compétences que je développe au cours de ma formation et de mes projets personnels
    </p>

    <div class="container">

        <h2>Développement Web</h2>

        <p class="description">

            Je développe actuellement mes compétences en développement front-end à travers
            différents projets personnels et scolaires.

            <br><br>

            J’utilise principalement HTML5 et CSS3 pour créer des interfaces modernes,
            responsives et structurées, ainsi que JavaScript pour ajouter de l’interactivité
            et améliorer l’expérience utilisateur.

            <br><br>

            Technologies utilisées :
            <br>
            • HTML5
            <br>
            • CSS3
            <br>
            • JavaScript

        </p>

    </div>

    <div class="container">

        <h2>Programmation</h2>

        <p class="description">

            Au cours de ma formation, j’ai également acquis des bases en programmation,
            notamment en C++, ce qui me permet de mieux comprendre la logique algorithmique
            et le fonctionnement des applications.

            <br><br>

            Langages étudiés :
            <br>
            • C++
            <br>
            • Algorithmique

        </p>

    </div>

    <div class="container">

        <h2>Systèmes et Réseaux</h2>

        <p class="description">

            Ma formation en BTS SIO me permet également de développer des compétences
            en systèmes et réseaux informatiques.

            <br><br>

            J’ai des connaissances sur les environnements Windows et Linux,
            ainsi que sur les bases du fonctionnement réseau et de l’administration système.

            <br><br>

            Compétences :
            <br>
            • Windows
            <br>
            • Linux
            <br>
            • Bases réseau
            <br>
            • Administration système

        </p>

    </div>

    <div class="container">

        <h2>Outils</h2>

        <p class="description">

            J’utilise différents outils dans le cadre de mes projets et de ma formation,
            notamment pour le développement, la gestion de projet et le versionnage de code.

            <br><br>

            Outils utilisés :
            <br>
            • Git / GitHub
            <br>
            • Visual Studio Code
            <br>
            • Pack Office

        </p>

    </div>

    <div class="container">

        <h2>Qualités Professionnelles</h2>

        <p class="description">

            Mes expériences scolaires et professionnelles m’ont permis de développer
            plusieurs qualités importantes dans le domaine de l’informatique.

            <br><br>

            • Autonomie
            <br>
            • Organisation
            <br>
            • Esprit d’équipe
            <br>
            • Curiosité
            <br>
            • Motivation

        </p>

    </div>
  `,

CV: `
<h1>CV</h1>

<p class="intro">
    Vous pouvez consulter ou télécharger mon CV.
</p>

<a href="img/cv.pdf" target="_blank" download>
    Télécharger mon CV
</a>

<div class="container">
    <iframe
        src="img/cv.pdf"
        width="100%"
        height="800px"
        style="border:none;">
    </iframe>
</div>
`,


  Exp:`
  <div class="experience">

    <h2>Expériences Professionnelles</h2>

    <p class="description">

        Au cours de mes différentes expériences professionnelles, j’ai appris à travailler
        dans des environnements dynamiques nécessitant organisation, rigueur et esprit d’équipe.

        <br><br>

        Mon expérience chez McDonald’s (de Août à Octobre 2025) m’a permis de développer ma capacité à gérer le stress,
        à travailler efficacement en équipe et à m’adapter rapidement aux différentes tâches
        et responsabilités du poste.

        <br><br>

        Mes expériences saisonnières chez Agrial (Eté 2024 et Eté 2025) m’ont également appris l’importance de la
        ponctualité, du respect des consignes de sécurité et du travail en autonomie.

        <br><br>

        Ces expériences ont renforcé mes qualités humaines et professionnelles, que je souhaite
        aujourd’hui mettre au service de mon parcours dans le développement web.

    </p>

</div>
  `,

  AP: `
<h1>Les AP</h1>
<p class="intro">
        Ici vous trouverez les différentes missions d'AP que j'ai pu avoir au cours des 2 années de BTS.
    </p>
    <a href="https://docs.google.com/spreadsheets/d/10Un2WtNTe1AedU251vJ0UMDwI2HLWmVf/edit?usp=sharing&ouid=109346040311630020004&rtpof=true&sd=true" target="_blank">
    Tableau des Compétences sur Excel
</a>
  `,

  StageP: `
<h1>Stage de première année</h1>

<div class="container">

    <h2>Présentation de l'entreprise</h2>

    <p class="description">

        A2Clic Info est une entreprise informatique indépendante située à Lhomme (72340), dans la Sarthe. Gérée par un seul professionnel, elle est spécialisée dans l'assistance, le dépannage, la maintenance et l'accompagnement informatique auprès des particuliers, des professionnels et des collectivités.

        <br><br>

        L'entreprise propose des services variés tels que l'installation et la configuration de matériels informatiques, la résolution de problèmes techniques, la sécurisation des postes de travail, la gestion des sauvegardes ainsi que l'accompagnement des utilisateurs dans leur utilisation quotidienne des outils numériques.

        <br><br>

        Grâce à sa structure à taille humaine, A2Clic Info privilégie la proximité avec ses clients, l'écoute de leurs besoins et la réactivité dans les interventions. Cette organisation permet de proposer des solutions adaptées, efficaces et compréhensibles, quel que soit le niveau de maîtrise informatique des utilisateurs.

    </p>

</div>

<div class="container">

    <h2>Présentation du système d'information</h2>

    <p class="description">

        Au cours de mon stage, j'ai été amené à intervenir sur différents environnements informatiques utilisés par les clients de l'entreprise. Ces environnements reposaient principalement sur des postes de travail équipés de Windows 10 et Windows 11, ainsi que sur divers logiciels destinés à assurer la productivité, la sécurité et la maintenance des systèmes.

        <br><br>

        Parmi les outils rencontrés durant le stage figuraient notamment Microsoft 365 pour la gestion des comptes utilisateurs et des services bureautiques, Bitdefender pour la protection antivirus, Ninite pour l'installation et la mise à jour automatisée de logiciels, ainsi qu'ADWCleaner pour la détection et la suppression de logiciels indésirables.

        <br><br>

        J'ai également participé à des opérations de maintenance préventive et corrective, à la vérification des configurations matérielles et logicielles des postes de travail, au contrôle de l'état des disques durs, à la mise à jour des systèmes d'exploitation et à la migration de Windows 10 vers Windows 11.

        <br><br>

        Certaines entreprises clientes travaillaient dans des environnements réseau ne disposant pas d'accès à Internet. Dans ce contexte, il était nécessaire d'assurer un suivi rigoureux des ressources informatiques, des droits d'accès et des procédures de sauvegarde afin de garantir la continuité des activités.

        <br><br>

        J'ai également participé à la gestion des sauvegardes automatiques, à la vérification de leur bon fonctionnement ainsi qu'à la sensibilisation des utilisateurs aux bonnes pratiques informatiques telles que l'installation régulière des mises à jour, l'importance des sauvegardes, la sécurisation des données et la vigilance face aux tentatives de fraude ou d'hameçonnage.

        <br><br>

        Le site internet de l'entreprise fait également partie des outils numériques utilisés. J'ai pu participer à des échanges concernant son évolution et son amélioration afin de renforcer la présence numérique de l'entreprise.

    </p>

</div>

<div class="container">

    <h2>Organisation du service informatique</h2>

    <p class="description">

        A2Clic Info étant une entreprise individuelle, l'ensemble des activités informatiques est assuré par son dirigeant. Celui-ci prend en charge aussi bien les interventions techniques que la gestion des projets, le support aux utilisateurs, le suivi des clients, les activités commerciales et l'administration de l'entreprise.

        <br><br>

        Cette organisation permet une relation directe avec les clients et une grande polyvalence dans les missions réalisées. Chaque intervention nécessite à la fois des compétences techniques, relationnelles et organisationnelles.

    </p>

</div>

<div class="container">

    <h2>Mon positionnement durant le stage</h2>

    <p class="description">

        Durant mon stage, j'ai travaillé directement aux côtés du responsable de l'entreprise. Cette proximité m'a permis d'observer et de participer à l'ensemble des étapes d'une intervention informatique, depuis l'identification des besoins du client jusqu'à la mise en œuvre des solutions techniques et leur suivi.

        <br><br>

        J'ai notamment participé à l'inventaire des ressources numériques, à la gestion des sauvegardes, à la vérification des habilitations des utilisateurs, à la maintenance de postes informatiques, au remplacement de matériel, à l'installation de nouveaux équipements, à la migration de systèmes vers Windows 11 ainsi qu'au contrôle du bon fonctionnement des solutions antivirus.

        <br><br>

        J'ai également réalisé des installations informatiques complètes en autonomie, participé à la planification de certaines interventions et contribué à l'accompagnement des utilisateurs dans l'utilisation de leurs outils numériques.

        <br><br>

        Enfin, ce stage m'a permis de développer mes compétences techniques, mon autonomie, mon sens de l'organisation et ma capacité à communiquer avec les utilisateurs. Il m'a également offert une vision concrète du métier de technicien informatique indépendant et des responsabilités liées à la gestion d'une entreprise de services numériques de proximité.

    </p>

</div>

 <h2>Missions réalisées et compétences développées</h2>

<p>
    Lors de mon stage au sein d'A2Clic Info, j'ai participé à différentes missions liées à l'administration des systèmes et réseaux, au support utilisateur, au déploiement de services informatiques ainsi qu'à la veille technologique et au développement professionnel.
</p>

<div class="mission-box">
    <h3>Gestion du patrimoine informatique (B1)</h3>

    <p>
        J'ai contribué à l'inventaire et au suivi des ressources numériques de plusieurs entreprises, notamment dans des environnements fonctionnant sans connexion Internet.
    </p>

    <ul>
        <li>Recenser et identifier les ressources numériques</li>
        <li>Mettre en place et vérifier les niveaux d'habilitation</li>
        <li>Vérifier les conditions de continuité d'un service informatique</li>
        <li>Gérer des sauvegardes</li>
        <li>Vérifier le respect des règles d'utilisation des ressources numériques</li>
    </ul>
</div>

<div class="mission-box">
    <h3>Support et assistance aux utilisateurs (B2)</h3>

    <p>
        J'ai assuré diverses opérations de maintenance et d'assistance technique telles que le remplacement de postes informatiques, l'installation de nouveaux équipements, la migration de Windows 10 vers Windows 11 et la vérification du bon fonctionnement des solutions antivirus.
    </p>

    <ul>
        <li>Collecter, suivre et orienter les demandes</li>
        <li>Traiter des demandes concernant les services système et réseau</li>
        <li>Traiter des demandes concernant les applications</li>
    </ul>
</div>

<div class="mission-box">
    <h3>Présence numérique de l'organisation (B3)</h3>

    <p>
        J'ai participé aux échanges concernant l'évolution du site web de l'entreprise et aux réflexions portant sur son amélioration.
    </p>

    <ul>
        <li>Participer à l'évolution d'un site web</li>
        <li>Contribuer à la valorisation de l'image de l'organisation</li>
    </ul>
</div>

<div class="mission-box">
    <h3>Travail en mode projet (B4)</h3>

    <p>
        J'ai réalisé des installations informatiques complètes de manière autonome tout en participant à la gestion du planning hebdomadaire.
    </p>

    <ul>
        <li>Analyser les objectifs d'un projet</li>
        <li>Planifier les activités</li>
        <li>Suivre l'avancement des actions réalisées</li>
    </ul>
</div>

<div class="mission-box">
    <h3>Mise à disposition des services informatiques (B5)</h3>

    <p>
        J'ai participé au déploiement et à la maintenance de différents services informatiques.
    </p>

    <ul>
        <li>Réaliser les tests d'intégration et d'acceptation d'un service</li>
        <li>Déployer un service</li>
        <li>Accompagner les utilisateurs</li>
    </ul>
</div>

<div class="mission-box">
    <h3>Organisation de son développement professionnel (B6)</h3>

    <p>
        J'ai développé une démarche de veille technologique et mené des recherches d'alternance ainsi que des actions de prospection.
    </p>

    <ul>
        <li>Mettre en œuvre des outils de veille informationnelle</li>
        <li>Gérer son identité professionnelle</li>
        <li>Développer son projet professionnel</li>
        <li>Maintenir à jour son portefeuille de compétences</li>
    </ul>
</div>
  `,

  StageD: `
<h1>Les AP</h1>
<p class="StageD">
treyrj,ej
</p>
</a>
  `,

  Contact: `
    Voici toutes les informations afin de contacter cet étudiant
  `
};

// ==========================
// 🔧 Variables globales
// ==========================
let updateInterval;
let isUpdating = false;

// ==========================
// 🧩 Menu Hamburger
// ==========================
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const sidebar = document.getElementById('sidebar');

  hamburgerIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    sidebar.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
  });

  // Ferme le menu si on clique en dehors
  document.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && !hamburgerIcon.contains(e.target)) {
      sidebar.classList.remove('active');
      hamburgerIcon.classList.remove('active');
    }
  });

  // Écouteurs pour les boutons du menu
  document.querySelectorAll('.sidebar-button').forEach(button => {
    button.addEventListener('click', function() {
      const page = this.getAttribute('data-page');
      changePage(page);
      sidebar.classList.remove('active');
      hamburgerIcon.classList.remove('active');
    });
  });
});

// ==========================
// 🔧 Fonction pour changer de page
// ==========================
function changePage(pageName) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = pages[pageName] || pages.home;

}
