document.addEventListener('DOMContentLoaded', function () {
    // Liste des chemins vers les images, des textes et des titres correspondants

    /*
     { 
        cheminImage: 'path/to/img', 
        texte: "Some text", 
        titre: 'Nice title', 
        alt: "This is an alt" 
    }
    { cheminImage: 'img/.jpg', texte: "", titre: "", alt: "" },
    */

    let PaintStuffList = [
        { cheminImage: 'img/allegorie.jpg', texte: "C'est une œuvre plutôt sombre que nous propose l'artiste où l'on peut voir plusieurs objets dans une pièce qui semble être un 'bazar' où l'on peut apercevoir une poupée ou même encore des instruments de musique en mauvais état ainsi que de l'argenterie", titre: 'Allégorie de la vanité', alt: "Allégorie de la vanité" },
        { cheminImage: 'img/laitiere.jpg', texte: "Dans un intérieur, cette solide servante est absorbée dans l’une de ses activités quotidiennes : faire couler du lait dans un plat, ce qui peut être lu comme une métaphore de la peinture. Une nouvelle fois, Vermeer associe des couleurs primaires dans les vêtements de la protagoniste. Il est impossible pour le spectateur de se faire une opinion sur son état d’esprit, ses émotions ou sentiments. Cette œuvre très intimiste est devenue une véritable icône publicitaire en France depuis son utilisation par la marque Nestlé en 1973.", titre: 'La Laitière', alt: "La Laitière" },
        { cheminImage: 'img/diane.jpg', texte: "Il s'agit de l'une des premières œuvres connues de l'artiste. Diane est la déesse de la lune et de la chasse, ainsi qu'un modèle de chasteté. Elle intervient dans divers récits mythologiques, qui ont fait l'objet de nombreuses représentations narratives de peintres néerlandais de l'âge d'or.", titre: 'Diane et ses compagnes', alt: "Diane et ses compagnes" },
        { cheminImage: 'img/officier.jpg', texte: "Le Soldat et jeune fille riant, appelé aussi l'Officier et la jeune fille riant (en néerlandais : De Soldaat en het Lachende Meisje) est une huile sur toile de Johannes Vermeer peinte vers 1657. Mesurant 50,5 cm de haut et 46 cm de large, le tableau est actuellement exposé à la Frick Collection de New York.", titre: "L'officier et la jeune fille riant", alt: "L'officier et la jeune fille riant" },
        { cheminImage: 'img/entremetteuse.jpg', texte: "L'Entremetteuse fait la quasi-unanimité des critiques. Le peintre, par ce troisième tableau, vient de rompre d'une façon définitive avec ses deux premières compositions, Diane et ses compagnes et Le Christ chez Marthe et Marie.", titre: "L'entremetteuse", alt: "L'entremetteuse" },
        { cheminImage: 'img/jesus.jpg', texte: "La composition de ce tableau a souvent été critiquée : le raccourci de l'épaule droite du Christ est maladroite, l'espace trop vaguement indiqué par une cloison, mais l'harmonie claire et chaude des couleurs préfigure un autre Vermeer, celui de la lumière blonde et sereine qui n'annonce jamais le crépuscule, où le temps disparaît doucement, et devenir transparence.", titre: "Le Christ dans la maison de Marthe et Marie", alt: "Le Christ dans la maison de Marthe et Marie"},
        { cheminImage: 'img/luth.jpg', texte: "Ce tableau du milieu des années 1660 est caractéristique de la maturité de Vermeer. La composition a pour thème la tranquilité domestique : le bassin et le pichet d’eau (l’aiguière) sont les symboles traditionnels de la pureté. Cette toile fut la première de treize peintures par Vermeer à entrer aux Etats-Unis entre 1887 et 1919.", titre: "Jeune femme à l'aiguière", alt: "Jeune femme à l'aiguière"},
        { cheminImage: 'img/liseuse.jpg', texte: "Le tableau représente l'intimité d'une scène d'intérieur. Une jeune femme blonde, debout, lit une lettre devant une fenêtre ouverte, en présentant son profil au spectateur. Seuls les murs du fond et de gauche de la pièce sont représentés.", titre: "La Liseuse à la fenêtre", alt: "La Liseuse à la fenêtre" },
        { cheminImage: 'img/sentinelle.jpg', texte: "La scène, à première vue banale, comporte quelques symboles de nature morale. Un chien, qui symbolise les vertus de fidélité et de vigilance, se tient devant une sentinelle endormie, comme un reproche de son attitude. Au-dessus de l'arche, on retrouve une image tronquée de saint Antoine, l'ermite qui préconisait la pauvreté et la chasteté et la résistance aux tentations, ce que ne fait pas la sentinelle qui échappe à son devoir et cède au sommeil.", titre: "La Sentinelle", alt: "La Sentinelle" },
        { cheminImage: 'img/vin.jpg', texte: "Dans la grande salle carrelée, la jeune femme à l'ample robe de satin rouge-orange assise au premier plan sourit niaisement, sans doute déjà un peu saoule.", titre: "La Jeune Fille au verre de vin", alt: "La Jeune Fille au verre de vin" },
        { cheminImage: 'img/buvant.jpg', texte: "A une table près d'une large double fenêtre, à gauche d'une pièce aux poutres en bois et au carrelage noir et blanc, sont assis deux messieurs. L'un, de l'autre côté de la table, fait face au spectateur ; il porte un chapeau et, le visage souriant, tient une pipe dans chaque main dans l'attitude d'un violoniste. L'autre, assis devant la table, de profil à gauche, tient son chapeau à plumes sur son genou, la main droite dessus.", titre: "Une femme buvant avec deux hommes", alt: "Une femme buvant avec deux hommes" },
        { cheminImage: 'img/filant.jpg', texte: "Sur une chaise, on peut apercevoir une femme qui éffile de la laine avec sur ses genoux un chiot qui regarde dans notre direction comme si il pouvait voir à travers cette oeuvre", titre: "Une femme filant", alt: "Une femme filant" },
        { cheminImage: 'img/chapeau.jpg', texte: "Le jeu de lumière sur le visage de la fille crée une profondeur et une vie remarquables, tandis que le chapeau rouge attire immédiatement l'attention du spectateur. Les détails minutieux de la perle sur son oreille et les textures des tissus sont un témoignage du talent de Vermeer pour la précision.", titre: "La Fille au chapeau rouge", alt: "La Fille au chapeau rouge" },
        { cheminImage: 'img/flute.jpg', texte: "La jeune fille assise avec une flûte à la main est le point central de l'œuvre. La manière dont la lumière caresse son visage et la texture des tissus de sa robe est tout simplement remarquable. Vermeer parvient à créer une atmosphère intime et paisible qui invite le spectateur à s'immerger dans le moment présent.", titre: "La Jeune Fille à la flûte", alt: "La Jeune Fille à la flûte" },
        { cheminImage: 'img/foi.jpg', texte: "Au cœur de l'œuvre se trouve une femme, symbolisant la Foi, debout près d'une table ornée de symboles religieux, notamment une croix, un calice et une Bible ouverte. La lumière qui baigne la scène, typique du style de Vermeer, met en valeur ces objets, créant une atmosphère mystique et sacrée.", titre: "L'Allégorie de la Foi", alt: "L'Allégorie de la Foi" },
        { cheminImage: 'img/geographe.jpg', texte: "Le géographe, assis devant une carte, est plongé dans sa tâche, examinant attentivement les détails de la carte avec une loupe. La pièce est baignée d'une lumière douce qui met en valeur son visage concentré et les objets qui l'entourent. La composition de l'œuvre est équilibrée, avec le géographe au centre et divers instruments et cartes dispersés autour de lui.", titre: "Le Géographe", alt: "Le Géographe" },
        { cheminImage: 'img/perle.jpg', texte: "Le tableau met en scène une jeune fille, dont l'identité reste un mystère, portant une robe turban bleue et une perle suspendue à son oreille. Ce qui attire immédiatement l'attention, c'est la manière dont Vermeer a capturé la luminosité et la texture de la perle, ainsi que l'expression énigmatique de la jeune fille. La lumière qui éclaire son visage et sa perle crée un contraste saisissant avec l'arrière-plan sombre, ajoutant une profondeur et une sensualité à l'œuvre.", titre: "La Jeune Fille à la perle", alt: "La Jeune Fille à la perle" },
        { cheminImage: 'img/denteliere.jpg', texte: "Dans cette scène intime, une jeune femme est assise devant une table, concentrée sur la création de dentelle à l'aide de ses fuseaux. La lumière douce qui tombe sur son visage et ses mains accentue la délicatesse de l'art qu'elle pratique. Vermeer a capturé avec une grande précision les détails du fil, de la dentelle et des coussins utilisés dans la dentellerie.", titre: "La Dentellière", alt: "La Dentellière" },
    ];

    function getRandomPaintStuff() {
        if (PaintStuffList.length) {
            let index = Math.floor(Math.random() * PaintStuffList.length); // get random index
            let currentStuff = PaintStuffList[index]; // get currentStuff from random index
            PaintStuffList.splice(index, 1); //remove the currentStuff from PaintStuffList
            return currentStuff;
        }
        return null;
    }

    let paintElements = document.querySelectorAll(".randomPaint")

    for (const paintElement of paintElements) {
        let img = paintElement.children[0].children[0]
        let title = paintElement.children[1].children[0]
        let desc = paintElement.children[1].children[1]
        let randomStuff = getRandomPaintStuff();

        img.src = randomStuff.cheminImage;
        img.alt = randomStuff.alt;
        title.innerText = randomStuff.titre;
        desc.innerText = randomStuff.texte;
    }
});


function toggle_visibility() {
    document.getElementById("banner").style.display = "none";
}