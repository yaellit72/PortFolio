
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
<h1>Projet AP S2 - Tournois E-Sport</h1>

<p class="intro">
    Vous trouverez ici la présentation du projet réalisé dans le cadre de l'atelier de professionnalisation du BTS SIO SLAM. Ce projet consistait à concevoir et développer un site web dédié à la gestion de tournois e-sport pour le Pixel Bar.
</p>

<div class="container">

    <h2>Présentation du projet</h2>

    <p class="description">

        Dans le cadre d'un projet confié par SOLIDANUM, j'ai participé à la conception et au développement d'un site web destiné au Pixel Bar, un établissement spécialisé dans l'organisation de tournois e-sport.

        <br><br>

        Le client souhaitait disposer d'une plateforme moderne permettant de présenter les jeux concernés par les compétitions, d'afficher les tournois à venir et de gérer facilement les événements via une interface d'administration.

        <br><br>

        Le projet a été réalisé en binôme dans un contexte professionnel simulé, avec des échanges réguliers avec un chef de projet et des rendus intermédiaires permettant de suivre l'avancement des travaux.

    </p>

</div>

<div class="container">

    <h2>Contexte professionnel</h2>

    <p class="description">

        Le Pixel Bar organise régulièrement des compétitions de jeux vidéo destinées à une communauté de joueurs composée principalement d'étudiants et de jeunes adultes.

        <br><br>

        Avant ce projet, la communication autour des événements reposait principalement sur les réseaux sociaux.

        <br><br>

        Afin de centraliser les informations et de simplifier la gestion des compétitions, le client a exprimé le besoin de disposer d'un site web responsive permettant de consulter les jeux, les tournois programmés et les informations associées.

    </p>

</div>

<div class="container">

    <h2>Démarche de réalisation</h2>

    <p class="description">

        Le projet a débuté par l'analyse des besoins du client et l'étude du cahier des charges fourni par SOLIDANUM.

        <br><br>

        Nous avons ensuite mis en place une organisation de travail basée sur Trello pour le suivi des tâches et Git pour la gestion des versions du projet.

        <br><br>

        Une identité visuelle complète a été créée comprenant une charte graphique, plusieurs maquettes et une proposition de nouveau logo adaptée à l'image du client.

        <br><br>

        Après validation des maquettes, les interfaces ont été développées à l'aide de HTML, CSS, JavaScript et Bootstrap afin de garantir un affichage responsive sur l'ensemble des supports.

        <br><br>

        La partie back-end a ensuite été préparée avec la réalisation des diagrammes UML, la conception de la base de données et l'ajout de données de test.

        <br><br>

        Enfin, le projet a été déployé sur un serveur web et connecté à une base de données via PHP afin de permettre l'exploitation des données au sein du site.

    </p>

</div>

<div class="container">

    <h2>Résultats et livrables</h2>

    <p class="description">

        Ce projet a permis la réalisation d'un site web complet répondant aux besoins exprimés par le client.

        <br><br>

        Les principaux livrables produits sont les maquettes graphiques, la charte graphique, le logo, la documentation du projet ainsi que l'ensemble des pages web développées.

        <br><br>

        Le site comprend une page d'accueil présentant l'établissement et les jeux disponibles, des pages détaillées pour chaque jeu ainsi qu'un espace d'administration permettant la gestion des utilisateurs, des jeux et des tournois.

        <br><br>

        Une base de données relationnelle a également été conçue afin de stocker et gérer les informations nécessaires au fonctionnement de l'application.

    </p>

</div>

<div class="container">

    <h2>Bilan personnel</h2>

    <p class="description">

        Cette application professionnelle m'a permis de renforcer mes compétences en développement web front-end et back-end, en conception de bases de données ainsi qu'en gestion de projet.

        <br><br>

        J'ai également développé ma capacité à travailler en équipe, à respecter un cahier des charges et à utiliser des outils professionnels de suivi de projet et de gestion de versions.

        <br><br>

        Cette expérience m'a permis de découvrir les différentes étapes de réalisation d'une application web, depuis l'analyse des besoins jusqu'au déploiement de la solution.

    </p>

</div>

<h2>Compétences BTS SIO mises en œuvre</h2>

<div class="mission-box">

    <h3>Gestion du patrimoine informatique (B1)</h3>

    <ul>
        <li>Mettre en place des outils de gestion de projet (Trello)</li>
        <li>Utiliser un système de gestion de versions (Git)</li>
        <li>Organiser et structurer les ressources du projet</li>
    </ul>

</div>

<div class="mission-box">

    <h3>Réponse aux incidents et aux demandes d'assistance et d'évolution (B2)</h3>

    <ul>
        <li>Documenter les choix techniques et fonctionnels</li>
        <li>Assurer le suivi des évolutions du projet</li>
        <li>Mettre à jour la documentation associée</li>
    </ul>

</div>

<div class="mission-box">

    <h3>Développement de la présence en ligne de l'organisation (B3)</h3>

    <ul>
        <li>Réaliser des maquettes graphiques</li>
        <li>Concevoir l'identité visuelle du projet</li>
        <li>Développer des interfaces web en HTML, CSS et JavaScript</li>
        <li>Créer des pages web responsives avec Bootstrap</li>
    </ul>

</div>

<div class="mission-box">

    <h3>Travail en mode projet (B4)</h3>

    <ul>
        <li>Analyser les objectifs d'un projet</li>
        <li>Planifier les activités</li>
        <li>Suivre l'avancement des tâches</li>
        <li>Présenter les résultats obtenus</li>
    </ul>

</div>

<div class="mission-box">

    <h3>Mise à disposition des services informatiques (B5)</h3>

    <ul>
        <li>Concevoir une base de données relationnelle</li>
        <li>Réaliser des diagrammes UML</li>
        <li>Ajouter des données de test</li>
        <li>Déployer un site web sur un serveur</li>
        <li>Mettre en place une connexion PHP avec la base de données</li>
        <li>Intégrer les données dynamiques dans l'application</li>
    </ul>

</div>
`,
  StageP: `
<h1>Stage de première année</h1>

<p class="intro">
    Vous trouverez ici la présentation de l'entreprise qui m'a accueilli durant mon stage de première année de BTS, du 18 Mai 2026 au 19 Juin 2026, le contexte professionnel, le système d'information utilisé ainsi que les missions réalisées et les compétences développées.
</p>

<div class="container">

    <h2>Présentation de l'entreprise</h2>

    <p class="description">

        A2Clic Info est une entreprise informatique indépendante située à Lhomme (72340), dans la Sarthe. Gérée par un seul professionnel, elle est spécialisée dans l'assistance, le dépannage, la maintenance et l'accompagnement informatique auprès des particuliers, des professionnels et des collectivités.

        <br><br>

        L'entreprise propose des services variés tels que l'installation et la configuration de matériels informatiques, la résolution de problèmes techniques, la sécurisation des postes de travail, la gestion des sauvegardes ainsi que l'accompagnement des utilisateurs dans leur utilisation quotidienne des outils numériques.

        <br><br>

        Grâce à sa structure à taille humaine, A2Clic Info privilégie la proximité avec ses clients, l'écoute de leurs besoins et la réactivité dans les interventions. Cette organisation permet de proposer des solutions adaptées, efficaces et compréhensibles quel que soit le niveau de maîtrise informatique des utilisateurs.

    </p>

</div>

<div class="container">

    <h2>Présentation du système d'information</h2>

    <p class="description">

        Au cours de mon stage, j'ai été amené à intervenir sur différents environnements informatiques utilisés par les clients de l'entreprise.

        <br><br>

        Les infrastructures étaient principalement composées de postes de travail sous Windows 10 et Windows 11, d'imprimantes, de périphériques réseau et de différentes solutions logicielles destinées à la sécurité et à la maintenance des systèmes.

        <br><br>

        Parmi les outils rencontrés durant le stage figuraient Microsoft 365, Bitdefender, Ninite et ADWCleaner. J'ai également participé à la gestion des sauvegardes, à la vérification de leur bon fonctionnement et à la maintenance de plusieurs postes utilisateurs.

        <br><br>

        Certaines entreprises clientes fonctionnaient dans des environnements réseau ne disposant pas d'accès Internet, nécessitant une gestion rigoureuse des ressources numériques et des procédures de sécurité.

    </p>

</div>

<div class="container">

    <h2>Organisation du service informatique</h2>

    <p class="description">

        A2Clic Info étant une entreprise individuelle, l'ensemble des activités informatiques est assuré par son dirigeant.

        <br><br>

        Celui-ci prend en charge les interventions techniques, le support utilisateur, la maintenance des infrastructures, la gestion des projets, la relation client ainsi que l'administration de l'entreprise.

        <br><br>

        Cette organisation permet une grande réactivité et une relation directe avec les utilisateurs.

    </p>

</div>

<div class="container">

    <h2>Mon positionnement durant le stage</h2>

    <p class="description">

        Durant mon stage, j'ai travaillé directement aux côtés du responsable de l'entreprise.

        <br><br>

        Cette proximité m'a permis de participer à l'ensemble des étapes d'une intervention informatique : analyse du besoin, diagnostic, mise en œuvre de solutions, tests et accompagnement des utilisateurs.

        <br><br>

        J'ai ainsi pu développer mes compétences techniques tout en découvrant les responsabilités liées à la gestion d'une entreprise informatique indépendante.

    </p>

</div>

<h2>Missions réalisées</h2>

<div class="container">

    <p class="description">

        Au cours de mon stage chez A2Clic Info, j'ai participé à différentes missions de maintenance informatique, d'assistance aux utilisateurs, de sécurisation des postes de travail et d'accompagnement numérique. Ces missions répondaient aux besoins quotidiens des clients de l'entreprise et avaient pour objectif de garantir la disponibilité, la sécurité et le bon fonctionnement de leurs équipements informatiques.

        <br><br>

        Pour réaliser ces interventions, j'ai travaillé directement avec le responsable de l'entreprise et utilisé différents outils tels que Microsoft 365, Bitdefender, Ninite, ADWCleaner ainsi que les fonctionnalités d'administration intégrées à Windows 10 et Windows 11. J'ai également été amené à intervenir sur des postes informatiques, des imprimantes et différents périphériques réseau.

        <br><br>

        Parmi les principales missions réalisées, j'ai participé à la configuration et au remplacement de postes informatiques, à la migration d'ordinateurs vers Windows 11, à la vérification des antivirus, à la gestion des sauvegardes ainsi qu'à l'assistance des utilisateurs. J'ai également pris part aux réflexions concernant l'évolution du site internet de l'entreprise et réalisé une veille technologique sur les nouvelles solutions informatiques.

        <br><br>

        Chaque intervention suivait une démarche similaire : analyse du besoin du client, diagnostic du problème rencontré, recherche de la solution adaptée, mise en œuvre des actions nécessaires puis vérification du bon fonctionnement de la solution déployée. Les interventions étaient validées à travers des tests techniques et par le retour des utilisateurs concernés.

        <br><br>

        Plusieurs contraintes ont été rencontrées durant le stage, notamment la diversité des environnements informatiques, la nécessité de préserver les données des utilisateurs lors des migrations de postes ainsi que l'adaptation à des entreprises disposant parfois de réseaux sans accès Internet. Ces situations m'ont appris à analyser rapidement les problèmes et à adapter les solutions proposées en fonction du contexte.

        <br><br>

        Les principaux livrables produits au cours du stage ont été les configurations de postes informatiques, les migrations vers Windows 11, les contrôles de sauvegardes, les installations de logiciels, les comptes rendus d'intervention ainsi que les recommandations formulées aux utilisateurs concernant la sécurité et les bonnes pratiques informatiques.

        <br><br>

        Cette expérience m'a permis de développer mes compétences en maintenance informatique, en administration système et en support utilisateur. Elle m'a également sensibilisé à l'importance de la cybersécurité, de la sauvegarde des données et de l'accompagnement des utilisateurs dans l'utilisation de leurs outils numériques. À l'avenir, certaines tâches pourraient être facilitées par l'utilisation d'outils de supervision centralisés ou de solutions de gestion à distance permettant un suivi plus rapide des équipements et des interventions.

    </p>

</div>

<div class="container">

    <h2>Bilan personnel</h2>

    <p class="description">

        Ce stage m'a permis de développer mes compétences en administration systèmes et réseaux, en maintenance informatique ainsi qu'en accompagnement des utilisateurs.

        <br><br>

        J'ai renforcé mon autonomie, mon sens de l'organisation et ma capacité à résoudre des problèmes techniques dans des environnements variés.

        <br><br>

        Cette expérience m'a également permis de découvrir le fonctionnement d'une entreprise informatique indépendante et de mieux comprendre les attentes du monde professionnel.

    </p>

</div>



<h2>Compétences BTS SIO mises en œuvre</h2>

<div class="mission-box">

    <h3>Gestion du patrimoine informatique (B1)</h3>

    <ul>
        <li>Mettre en place et vérifier les niveaux d'habilitation</li>
        <li>Gérer des sauvegardes</li>
        <li>Vérifier le respect des règles d'utilisation des ressources numériques</li>
    </ul>

</div>

<div class="mission-box">

    <h3>Support et assistance aux utilisateurs (B2)</h3>

    <ul>
        <li>Collecter, suivre et orienter les demandes</li>
    </ul>

</div>

<div class="mission-box">

    <h3>Travail en mode projet (B4)</h3>

    <ul>
        <li>Analyser les objectifs d'un projet</li>
    </ul>

</div>

<div class="mission-box">

    <h3>Mise à disposition des services informatiques (B5)</h3>


    <ul>
        <li>Accompagner les utilisateurs</li>
    </ul>

</div>

<div class="mission-box">

    <h3>Organisation de son développement professionnel (B6)</h3>


    <ul>
        <li>Mettre en œuvre des outils de veille informationnelle</li>
    </ul>

</div>

<p class="intro">
    Vous pouvez consulter ou télécharger une diapo de présentation.
</p>

<a href="img/diapo.pdf" target="_blank" download>
    Télécharger la présentation.
</a>
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
