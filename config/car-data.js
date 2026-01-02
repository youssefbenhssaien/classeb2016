const price = "10 900 €";
const kilometrage = "142 000 km";
window.CAR = {
        title: "Mercedes-Benz Classe B 180 d",
        subtitle: "2016 • "+kilometrage+" • Boîte automatique",
        price,
        location: "Toulouse",
  	defaultImage: "images/exterieur_1.jpg",
        contactEmail: "mailto:youssef.benhssaien@gmail.com?subject=Annonce%20Mercedes%20Classe%20B%20180d",
        topSpecs: [
          { k: "🚗 Modèle", v: "Classe B 180 d" },
          { k: "📅 Année", v: "2016" },
          { k: "🧭 Kilométrage", v: kilometrage },
          { k: "⚙️ Boîte", v: "Automatique" },
          { k: "⛽ Carburant", v: "Diesel" },
          { k: "💶 Prix", v: price },
        ],
        advantages: [
        	'Vous cherchez une voiture fiable et confortable ⛽',
		'Vous roulez en ville comme sur route 🛣️/🏙️',
		'Vous souhaitez éviter des frais mécaniques importants 🚘',
		'Vous avez une famille ou besoin d’espace 👨‍👩‍👦‍👦',
        ],
        keyPoints: [
	  "Véhicule familial – 5 portes, 5 places",
	  "Grand volume de coffre, pratique au quotidien",
	  "Boîte automatique – conduite facile",
	  "Motorisation fiable et économique",
	  "Pneus 4 saisons remplacés en 2023",
	  "Distribution refaite – pas de gros frais à prévoir",
	  "ISOFIX – adapté aux sièges enfants",
	],
        detailsCards: [
	  /* =========================
	     MOTORISATION & TECHNIQUE
	     ========================= */
	  {
	    title: "⚙️ Motorisation & technique",
	    items: [
	      { label: "Moteur", value: "1.5 Diesel OM607", highlight: false },
	      { label: "Puissance", value: "109 ch", highlight: true },
	      { label: "Boîte de vitesses", value: "Automatique 7G-DCT", highlight: true },
	      { label: "Transmission", value: "Traction avant", highlight: false },
	      { label: "Carburant", value: "Diesel", highlight: false },
	      { label: "Norme antipollution", value: "Euro 6 – Crit’Air 2", highlight: true },
	      { label: "Turbo", value: "Oui", highlight: false },
	    ],
	  },

	  /* =========================
	     ENTRETIEN & HISTORIQUE
	     ========================= */
	  {
	    title: "🧰 Entretien & historique",
	    items: [
	      { label: "Distribution", value: "Refaite à neuf", highlight: true },
	      { label: "Vidange moteur", value: "Récente (filtre à huile)", highlight: true },
	      { label: "Filtre à air", value: "Non remplacé", highlight: false },
	      { label: "Boîte automatique", value: "Fonctionnement normal", highlight: false },
	      { label: "Contrôle technique", value: "Vierge", highlight: true },
	      { label: "Historique", value: "Rapport CarVertical disponible", highlight: true },
	      { label: "Nombre de clés", value: "1 seule", highlight: false },
	    ],
	  },

	  /* =========================
	     PNEUMATIQUES & CHÂSSIS
	     ========================= */
	  {
	    title: "🛞 Pneumatiques & châssis",
	    items: [
	      { label: "Type de pneus", value: "4 saisons", highlight: true },
	      { label: "Remplacement", value: "2023", highlight: true },
	      { label: "État général", value: "Très bon état", highlight: false },
	      { label: "Jantes", value: "Alliage", highlight: false },
	      { label: "Roue de secours", value: "Non (kit anti-crevaison)", highlight: false },
	      { label: "Compresseur de pneus", value: "Oui", highlight: true },
	    ],
	  },

	  /* =========================
	     SÉCURITÉ & FAMILLE
	     ========================= */
	  {
	    title: "🔒 Sécurité & famille",
	    items: [
	      { label: "ISOFIX", value: "Oui (places arrière)", highlight: true },
	      { label: "Airbags", value: "Frontaux, latéraux et rideaux", highlight: false },
	      { label: "ABS / ESP", value: "Oui", highlight: false },
	      { label: "Aide au démarrage en côte", value: "Oui", highlight: false },
	      { label: "Détection sous-gonflage", value: "Oui", highlight: false },
	      { label: "Fermeture centralisée", value: "Télécommandée", highlight: false },
	    ],
	  },

	  /* =========================
	     CONFORT & USAGE QUOTIDIEN
	     ========================= */
	  {
	    title: "🚗 Confort & usage quotidien",
	    items: [
	      { label: "Climatisation", value: "Automatique", highlight: true },
	      { label: "Régulateur / limiteur", value: "Oui", highlight: true },
	      { label: "Vitres électriques", value: "Avant / arrière", highlight: false },
	      { label: "Rétroviseurs", value: "Électriques rabattables", highlight: true },
	      { label: "Volant", value: "Multifonctions", highlight: false },
	      { label: "Banquette arrière", value: "Rabattable", highlight: false },
	    ],
	  },

	  /* =========================
	     MULTIMÉDIA & TECHNOLOGIE
	     ========================= */
	  {
	    title: "🖥️ Multimédia & technologie",
	    items: [
	      { label: "Écran central", value: "Oui", highlight: false },
	      { label: "Bluetooth", value: "Appels + audio", highlight: true },
	      { label: "GPS", value: "Intégré", highlight: false },
	      { label: "Commandes au volant", value: "Oui", highlight: false },
	      { label: "Ordinateur de bord", value: "Oui", highlight: false },
	      { label: "Ecran tactile", value: "Non", highlight: false },
	      { label: "Prises", value: "USB / 12V", highlight: false },
	    ],
	  },

	  /* =========================
	     AIDES À LA CONDUITE
	     ========================= */
	  {
	    title: "🅿️ Aides à la conduite & stationnement",
	    items: [
	      { label: "Caméra de recul", value: "Oui", highlight: true },
	      { label: "Aide au stationnement", value: "Avant et arrière", highlight: true },
	      { label: "Assistance parking", value: "Présente (capteur à reparamétrer)", highlight: false },
	      { label: "Capteur de pluie", value: "Oui", highlight: false },
	      { label: "Allumage automatique des feux", value: "Oui", highlight: false },
	    ],
	  },

	  /* =========================
	     FINITION & EXTRAS
	     ========================= */
	  {
	    title: "✨ Extras & finition",
	    items: [
	      { label: "Finition intérieure", value: "Business", highlight: true },
	      { label: "Sellerie", value: "Tissu premium", highlight: false },
	      { label: "Fonction massage", value: "Oui", highlight: true },
	      { label: "Ambiance intérieure", value: "Soignée / haut de gamme", highlight: false },
	      { label: "État extérieur", value: "Rayures visibles (voir photos)", highlight: false },
	    ],
	  },

	],
        images: {
          exterieur: [
            "images/exterieur_1.jpg",
            "images/exterieur_2.jpg",
            "images/exterieur_3.jpg",
            "images/exterieur_4.jpg",
          ],
          interieur: [
            "images/interieur_1.jpg",
            "images/interieur_2.jpg",
            "images/interieur_3.jpg",
            "images/interieur_4.jpg",
          ],
          coffre: [
            "images/coffre_1.jpg",
          ],
          media: [
            "images/media_1.jpg",
            "images/media_2.jpg",
          ],
        },
      };
