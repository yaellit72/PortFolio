
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
  Competences: `
    <h2>Tableau des compétences</h2>
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
