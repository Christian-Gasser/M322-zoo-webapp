import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';
import './LeafletStyles.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Location data for different categories
const locations = {
    Attraktionen: [
        { position: [47.386506, 8.575515], name: "Haupteingang" },
        { position: [47.387200, 8.575800], name: "Masoala Regenwald" },
        { position: [47.386800, 8.575200], name: "Zoolino" }
    ],
    Tiere: [
        { position: [47.384824, 8.574313], name: "Forschungsstation" },
        { position: [47.384677, 8.574130], name: "Freiflugbereich Vögel" },
        { position: [47.384849, 8.574203], name: "Listzaffe" },
        { position: [47.384947, 8.574235], name: "Golgelbes Löwenäffchen" },
        { position: [47.385073, 8.574289], name: "Springtamarin" },
        { position: [47.385032, 8.574516], name: "Terrarium" },
        { position: [47.384997, 8.574632], name: "Aquarium" },
        { position: [47.385118, 8.574410], name: "Humboltpinguin" },
        { position: [47.385231, 8.574602], name: "Königspinguin" },
        { position: [47.385652, 8.574813], name: "Chileflamingo" },
        { position: [47.385962, 8.574853], name: "Wasservögel" },
        { position: [47.384876, 8.574527], name: "Roter Ibis" },
        { position: [47.385411, 8.573146], name: "Brillenbär" },
        { position: [47.384232, 8.572892], name: "Galapagos Riesenschildkröten" },
        { position: [47.384492, 8.572626], name: "Bürstenschwanz-Rattenkänguru" },
        { position: [47.384405, 8.572567], name: "Exuma-Wirtelschwanzleguan" },
        { position: [47.384355, 8.572555], name: "Savu-Python" },
        { position: [47.384309, 8.572403], name: "Koala" },
        { position: [47.384396, 8.572114], name: "Australien" },
        { position: [47.384322, 8.571932], name: "Emu" },
        { position: [47.384322, 8.571932], name: "Bennet-Wallaby" },
        { position: [47.383991, 8.571829], name: "Regenbogenlori" },
        { position: [47.384267, 8.571341], name: "Europäischer Fischotter" },
        { position: [47.384639, 8.571651], name: "Seehund" },
        { position: [47.384790, 8.572022], name: "Sumatra Orang-Utan" },
        { position: [47.384881, 8.572050], name: "Westlicher Flachlandgorilla" },
        { position: [47.384953, 8.572236], name: "Menschenaffenhaus" },
        { position: [47.385050, 8.572490], name: "Kappengibbon" },
        { position: [47.384960, 8.572392], name: "Weissschulter-Kapizineraffe" },
        { position: [47.384735, 8.571164], name: "Lama" },
        { position: [47.385194, 8.571831], name: "Alpaka" },
        { position: [47.385591, 8.572236], name: "Darwin-Nandu" },
        { position: [47.385493, 8.572195], name: "Vikunja" },
        { position: [47.385746, 8.572560], name: "Guangako" },
        { position: [47.385918, 8.572762], name: "Schmutzgeier" },
        { position: [47.386107, 8.572796], name: "Waldrapp" },
        { position: [47.386166, 8.572813], name: "Europäischer Löffler" },
        { position: [47.386692, 8.572910], name: "Habichtskauz" },
        { position: [47.386421, 8.573826], name: "Arabische Oryx" },
        { position: [47.386702, 8.574430], name: "Hauskamel" },
        { position: [47.386741, 8.574279], name: "Persische Kropfgazelle" },
        { position: [47.387155, 8.574418], name: "Hausyak" },
        { position: [47.387423, 8.574321], name: "Kaschmirziege" },
        { position: [47.387132, 8.576034], name: "Nubischer Steinbock" },
        { position: [47.387323, 8.576037], name: "Kapp-Klippschliefer" },
        { position: [47.387530, 8.575908], name: "Gelada" },
        { position: [47.388093, 8.576549], name: "Burma-Leierhisch" },
        { position: [47.387939, 8.576925], name: "Asiatischer Elefant" },
        { position: [47.388498, 8.577070], name: "Kaeng Krachan Elefantenpark" },
        { position: [47.388840, 8.577225], name: "Balistar" },
        { position: [47.388844, 8.577153], name: "Terrarien" },
        { position: [47.388158, 8.576637], name: "Spenglers Zacken-Erdschildkröte" },
        { position: [47.388507, 8.578852], name: "Lewa Savanne" },
        { position: [47.389213, 8.577359], name: "Graupapagei" },
        { position: [47.389342, 8.577652], name: "Südliches Breitmaulnashorn" },
        { position: [47.389257, 8.577906], name: "Netzgiraffe" },
        { position: [47.389120, 8.577702], name: "Naktmull" },
        { position: [47.388849, 8.578323], name: "Helmperlhuhn" },
        { position: [47.388364, 8.578462], name: "Grevyzebra" },
        { position: [47.388226, 8.579283], name: "Impala" },
        { position: [47.387741, 8.579221], name: "Säbelantilope" },
        { position: [47.389155, 8.578872], name: "Blauhalsstrauss" },
        { position: [47.387784, 8.578285], name: "Erdmännchen" },
        { position: [47.387276, 8.578542], name: "Dahomey-Rind" },
        { position: [47.387643, 8.580145], name: "Stachelschwein" },
        { position: [47.387752, 8.579811], name: "Spaltenschildkröte" },
        { position: [47.387772, 8.579779], name: "Felsenschildechse" },
        { position: [47.387987, 8.580015], name: "Tüpfelhyäne" },
        { position: [47.385670, 8.577987], name: "Fledermaus Auffangstation" },
        { position: [47.386016, 8.577512], name: "Kaninchen" },
        { position: [47.386330, 8.576672], name: "Afrikanische Zwergziege" },
        { position: [47.385852, 8.577423], name: "Ouessant-Schaf" },
        { position: [47.385955, 8.577219], name: "Turpolje-Schwein" },
        { position: [47.386090, 8.577183], name: "Appenzeller Barthuhn" },
        { position: [47.386134, 8.577124], name: "Seidenhuhn" },
        { position: [47.384622, 8.578621], name: "Masoala Halle" },
        { position: [47.384088, 8.578080], name: "Naturschutzzentrum" }

    ],
    Besuchereinrichtungen: [
        { position: [47.384324, 8.578041], name: "Zoo Shop Masoala" },
        { position: [47.384378, 8.574236], name: "Zoo Shop Eingang" },
        { position: [47.384288, 8.578062], name: "Restaurant Masoala" },
        { position: [47.384368, 8.573852], name: "Restaurant Pantanal" },
        { position: [47.384219, 8.574175], name: "Zoo Café" },
        { position: [47.387167, 8.575596], name: "Restaurant Altes Klösterli" },
        { position: [47.387546, 8.578608], name: "Ubele Kisok" },
        { position: [47.386651, 8.576203], name: "Afrika-Kiosk" },
        { position: [47.388168, 8.577528], name: "Pranburi-Kiosk" },
        { position: [47.386590, 8.574043], name: "Trampeltier-Kiosk" },
        { position: [47.384924, 8.574830], name: "Pinguin-Hüsli" },
        { position: [47.386832, 8.573873], name: "Spielplatz" },
        { position: [47.384509, 8.573559], name: "Spielplatz" },
        { position: [47.386643, 8.577193], name: "Spielplatz" },
        { position: [47.384465, 8.571252], name: "Rutsche" },
        { position: [47.385779, 8.577992], name: "Rutsche" },
        { position: [47.384966, 8.572530], name: "WC" },
        { position: [47.384357, 8.574014], name: "WC" },
        { position: [47.384755, 8.574836], name: "WC" },
        { position: [47.385060, 8.574530], name: "WC" },
        { position: [47.387300, 8.573893], name: "WC" },
        { position: [47.386852, 8.575720], name: "WC" },
        { position: [47.386852, 8.575720], name: "WC" },
        { position: [47.389220, 8.577567], name: "WC" },
        { position: [47.387494, 8.578704], name: "WC" },
        { position: [47.387771, 8.579929], name: "WC" },
        { position: [47.385845, 8.577747], name: "WC" },
        { position: [47.384122, 8.578200], name: "WC" }
    ]
};

export default function Map() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const zooPosition = [47.386506, 8.575515];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    };

    return (
        <div className={styles.mapWrapper}>
            <div className={styles.mapHeader}>
                <h1>Zooplan</h1>
                <div className={styles.dropdown}>
                    <button 
                        type="button"
                        className={styles.attractionsButton}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {selectedCategory || "Auswählen"}
                    </button>
                    {isDropdownOpen && (
                        <ul className={`${styles.dropdownMenu} ${styles.show}`}>
                            {Object.keys(locations).map((category) => (
                                <li 
                                    key={category}
                                    className={styles.dropdownItem}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className={styles.mapContainer}>
                <MapContainer 
                    center={zooPosition} 
                    zoom={16} 
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {selectedCategory && locations[selectedCategory].map((location, index) => (
                        <Marker 
                            key={index} 
                            position={location.position}
                        >
                            <Popup>
                                {location.name}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}
