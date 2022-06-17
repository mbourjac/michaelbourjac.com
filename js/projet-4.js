import { disableRightClick } from "./utils/disable-right-click.js";
import { projectsData } from "./utils/data.js";
import { responsiveLoading } from "./utils/responsive-loading.js";
import { createSpreads } from "./utils/spreads-layout.js";

const projectData = projectsData[projectsData.length - 4];

disableRightClick();

function createContent() {
    const picturesData = [
        [
            {
                number: "01",
                title: [
                    "Basilique Sainte-Anne d'Auray",
                    "Sainte-Anne-d'Auray",
                    "France",
                ],
                coordinates: "47.70395, -2.95495",
            },
            {
                number: "02",
                title: ["Bretagne", "France"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "06",
                title: ["Bretagne", "France"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "09",
                title: ["Bretagne", "France"],
                pictures: 2,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "12",
                title: ["Bretagne", "France"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "14",
                title: ["Bretagne", "France"],
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "02",
                title: ["Dôme de Milan", "Piazza del Duomo", "Milan", "Italie"],
                coordinates: "45.46442, 9.18996",
            },
            {
                number: "04",
                title: [
                    "Cathédrale de Modène",
                    "Via Sant'Eufemia",
                    "Modène",
                    "Italie",
                ],
                coordinates: "44.64654, 10.9248",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "05",
                title: [
                    "Palazzo d'Accursio et Palazzo del Podestà",
                    "Piazza Maggiore",
                    "Bologne",
                    "Italie",
                ],
                coordinates: "44.49375, 11.34309",
            },
            {
                number: "06",
                title: [
                    "Palazzo Re Enzo",
                    "Piazza del Nettuno",
                    "Bologne",
                    "Italie",
                ],
                coordinates: "44.49421, 11.34254",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "07",
                title: ["Ponte Vecchio", "Florence", "Italie"],
                coordinates: "43.76803, 11.25458",
            },
            {
                number: "10",
                title: [
                    "Porte Sud",
                    "Baptistère Saint-Jean",
                    "Piazza del Duomo",
                    "Florence",
                    "Italie",
                ],
                coordinates: "43.77298, 11.25504",
            },
            {
                number: "11",
                title: [
                    "Porte du Paradis",
                    "Baptistère Saint-Jean",
                    "Piazza del Duomo",
                    "Florence",
                    "Italie",
                ],
                coordinates: "43.77313, 11.25526",
            },
            {
                number: "12",
                title: [
                    "Santa Maria del Fiore",
                    "Piazza del Duomo",
                    "Florence",
                    "Italie",
                ],
                coordinates: "43.7728, 11.25442",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "14",
                title: [
                    "Corridor de Vasari et Ponte alle Grazie",
                    "Florence",
                    "Italie",
                ],
                coordinates: "43.76817, 11.25329",
            },
            {
                number: "15",
                title: ["Florence", "Italie"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "16",
                title: [
                    "Campanile de Giotto",
                    "Santa Maria del Fiore",
                    "Piazza del Duomo",
                    "Florence",
                    "Italie",
                ],
                coordinates: "43.77315, 11.2569",
            },
            {
                number: "17",
                title: ["Palazzo Vecchio", "Florence", "Italie"],
                coordinates: "43.77314, 11.25698",
            },
            {
                number: "18",
                title: [
                    "Basilique San Lorenzo",
                    "Piazza di San Lorenzo",
                    "Florence",
                    "Italie",
                ],
                coordinates: "43.77498, 11.2547",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "28",
                title: [
                    "Ile Minore et Ile Maggiore",
                    "Lac Trasimène",
                    "Italie",
                ],
                coordinates: "43.18826, 12.04625",
            },
            {
                number: "29",
                title: ["Assise", "Italie"],
                coordinates: "43.07721, 12.59981",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "30",
                title: ["Basilique Saint-François", "Assise", "Italie"],
                coordinates: "43.07499, 12.60513",
            },
            {
                number: "31",
                title: ["Basilique Saint-François", "Assise", "Italie"],
                coordinates: "43.07403, 12.60671",
            },
            {
                number: "32",
                title: [
                    "Temple de Minerve",
                    "Piazza del Comune",
                    "Assise",
                    "Italie",
                ],
                coordinates: "43.07106, 12.61484",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "37",
                title: ["Assise", "Italie"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
        ],
        [
            {
                number: "02",
                title: [
                    "Galate Capitolin",
                    "Salle du Gladiateur",
                    "Palais Neuf",
                    "Rome",
                    "Italie",
                ],
                coordinates: "41.89348, 12.48339",
            },
            {
                number: "03",
                title: ["Amour et Psyché", "Palais Neuf", "Rome", "Italie"],
                coordinates: "41.89344, 12.48337",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "04",
                title: [
                    "Louve capitoline",
                    "Palais des Conservateurs",
                    "Rome",
                    "Italie",
                ],
                coordinates: "41.89322, 12.48249",
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "06",
                title: ["Marchés de Trajan", "Rome", "Italie"],
                coordinates: "41.89526, 12.48587",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "08",
                title: ["Porticciolo di Santa Lucia", "Naples", "italie"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "09",
                title: [
                    "Ristorante Transatlantico",
                    "Porticciolo di Santa Lucia",
                    "Naples",
                    "Italie",
                ],
                coordinates: "40.82949, 14.24859",
            },
            {
                number: "11",
                title: ["Baie de Naples", "Italie"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "13",
                title: ["Port", "Capri", "Italie"],
                coordinates: "40.55653, 14.23898",
            },
            {
                number: "16",
                title: ["Villa San Michele", "Anacapri", "Capri", "Italie"],
                coordinates: "40.5573, 14.2252",
            },
            {
                number: "23",
                title: ["Positano", "Italie"],
                coordinates: "40.62756, 14.4876",
            },
            {
                number: "25",
                title: [
                    "Apollon Archer",
                    "Temple d'Apollon",
                    "Pompéi",
                    "Italie",
                ],
                coordinates: "40.74908, 14.48459",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "31",
                title: ["Faune Dansant", "Maison du Faune", "Pompéi", "Italie"],
                coordinates: "40.75108, 14.48462",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "32",
                title: ["Temple de Neptune", "Paestum", "Italie"],
                coordinates: "40.41991, 15.00507",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "33",
                title: ["Temple de Neptune", "Paestum", "Italie"],
                coordinates: "40.42009, 15.0046",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "34",
                title: [
                    "Temple de Neptune et Temple d'Héra",
                    "Paestum",
                    "Italie",
                ],
                coordinates: "40.41992, 15.00469",
            },
            {
                number: "37",
                title: ["Temple de Cérès", "Paestum", "Italie"],
                coordinates: "40.42459, 15.00514",
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "02",
                title: ["Kraemer"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "03",
                title: ["Kraemer"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "05",
                title: ["Kraemer"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "06",
                title: ["Kraemer"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "07",
                title: ["Kraemer"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "16",
                title: ["Kraemer"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "24",
                title: ["Kraemer"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "29",
                title: ["Kraemer"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "30",
                title: ["Kraemer"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "34",
                title: ["Kraemer"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "37",
                title: ["Kraemer"],
                pictures: 1,
                orientation: "portrait",
            },
        ],
        [
            {
                number: "08",
                title: ["Sur le bateau"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "10",
                title: ["Sur le bateau"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "13",
                title: ["Sur le bateau"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "14",
                title: ["Sur le bateau"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "16",
                title: ["Sur le bateau"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "17",
                title: ["Sur le bateau"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "20",
                title: ["Sur le bateau"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "25",
                title: ["Sur le bateau"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "30",
                title: [
                    "Railway Station",
                    "Adderley Street",
                    "Le Cap",
                    "Afrique du Sud",
                ],
                coordinates: "-33.92089, 18.42475",
            },
            {
                number: "32",
                title: ["Cape Point", "Péninsule du Cap", "Afrique du Sud"],
                coordinates: "-34.35087, 18.48426",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "35",
                title: ["Cape Point", "Péninsule du Cap", "Afrique du Sud"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "38",
                title: ["Cape Point", "Péninsule du Cap", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "39",
                title: ["Main Road", "Péninsule du Cap", "Afrique du Sud"],
                coordinates: "-34.181703, 18.359782",
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "03",
                title: ["Le Cap", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "05",
                title: [
                    "Statue de Jan van Riebeeck",
                    "Heerengracht Street",
                    "Le Cap",
                    "Afrique du Sud",
                ],
                coordinates: "-33.91931, 18.42603",
            },
            {
                number: "06",
                title: ["Heerengracht Street", "Le Cap", "Afrique du Sud"],
                coordinates: "-33.91702, 18.42776",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "07",
                title: ["Heerengracht Street", "Le Cap", "Afrique du Sud"],
                coordinates: "-33.91702, 18.42776",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "09",
                title: [
                    "Mostert's Mill",
                    "Mowbray",
                    "Le Cap",
                    "Afrique du Sud",
                ],
                coordinates: "-33.95215, 18.46634",
            },
            {
                number: "11",
                title: [
                    "Rhodes Memorial",
                    "Devil's Peak",
                    "Le Cap",
                    "Afrique du Sud",
                ],
                coordinates: "-33.95129, 18.46294",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "16",
                title: ["Adderley Street", "Le Cap", "Afrique du Sud"],
                coordinates: "-33.92464, 18.4205",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "17",
                title: [
                    "Standard Bank",
                    "Adderley Street",
                    "Le Cap",
                    "Afrique du Sud",
                ],
                coordinates: "-33.92348, 18.42152",
            },
            {
                number: "19",
                title: ["Saunders Rock's Beach", "Le Cap", "Afrique du Sud"],
                coordinates: "-33.92453, 18.37706",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "21",
                title: [
                    "Sea Point Pavilion Swimming Pool",
                    "Le Cap",
                    "Afrique du Sud",
                ],
                coordinates: "-33.91857, 18.38476",
            },
            {
                number: "30",
                title: ["Montagne de la Table", "Le Cap", "Afrique du Sud"],
                coordinates: "-33.95916, 18.40547",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "31",
                title: ["Montagne de la Table", "Le Cap", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "32",
                title: ["Montagne de la Table", "Le Cap", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "38",
                title: ["Montagne de la Table", "Le Cap", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "02",
                title: ["Port", "Le Cap", "Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "07",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "22",
                title: ["Port", "Port Elizabeth", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "26",
                title: [
                    "The Union's Snake Park",
                    "Port Elizabeth",
                    "Afrique du Sud",
                ],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "27",
                title: ["Horse Memorial", "Port Elizabeth", "Afrique du Sud"],
                coordinates: "-33.96215, 25.60881",
            },
            {
                number: "28",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "29",
                title: ["Port", "Port Elizabeth", "Afrique du Sud"],
                coordinates: "-33.95849, 25.63247",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "30",
                title: ["Main Library", "Port Elizabeth", "Afrique du Sud"],
                coordinates: "-33.962, 25.62337",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "33",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "34",
                title: ["Langholm Farm", "Bathurst", "South Africa"],
            },
            {
                number: "39",
                title: ["Port", "East London", "Afrique du Sud"],
                coordinates: "-33.02401, 27.90855",
            },
        ],
        [
            {
                number: "01",
                title: ["Orient Beach", "East London", "Afrique du Sud"],
                coordinates: "-33.02395, 27.91492",
            },
            {
                number: "03",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "05",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "07",
                title: ["Juma Masjid Mosque", "Durban", "Afrique du Sud"],
                coordinates: "-29.85672, 31.01731",
            },
            {
                number: "09",
                title: ["Denis Hurey Street", "Durban", "Afrique du Sud"],
                coordinates: "-29.85669, 31.01733",
            },
            {
                number: "10",
                title: ["Boatmans Road", "Durban", "Afrique du Sud"],
                coordinates: "-29.86523, 31.01732",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "11",
                title: ["Port", "Durban", "Afrique du Sud"],
                coordinates: "-29.86391, 31.02235",
            },
            {
                number: "13",
                title: ["Margaret Mncadi Avenue", "Durban", "Afrique du Sud"],
                coordinates: "-29.86134, 31.02391",
            },
            {
                number: "14",
                title: ["City Hall", "Durban", "Afrique du Sud"],
                coordinates: "-29.85863, 31.0256",
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "15",
                title: ["Florence Mkhize Building", "Durban", "Afrique du Sud"],
                coordinates: "-29.85906, 31.02582",
            },
            {
                number: "19",
                title: ["Bluff Whaling Station", "Durban", "Afrique du Sud"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "31",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "32",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "34",
                title: ["Afrique du Sud"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
        ],
        [
            {
                number: "02",
                title: ["Bertha Mkhize Street", "Durban", "Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "04",
                title: ["Durban", "Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "06",
                title: ["Durban", "Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "07",
                title: ["Durban", "Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "12",
                title: ["Car Park", "Durban", "Afrique du Sud"],
                coordinates: "-29.85741, 31.01976",
            },
            {
                number: "18",
                title: ["Durban", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "22",
                title: ["Cato Manor Hindu Temple", "Durban", "Afrique du Sud"],
                coordinates: "-29.86603, 30.964",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "29",
                title: [
                    "Village Zoulou",
                    "Vallée des Mille Collines",
                    "Afrique du Sud",
                ],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "31",
                title: [
                    "Village Zoulou",
                    "Vallée des Mille Collines",
                    "Afrique du Sud",
                ],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "32",
                title: [
                    "Village Zoulou",
                    "Vallée des Mille Collines",
                    "Afrique du Sud",
                ],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "36",
                title: [
                    "Village Zoulou",
                    "Vallée des Mille Collines",
                    "Afrique du Sud",
                ],
                pictures: 1,
                orientation: "portrait",
            },
        ],
        [
            {
                number: "02",
                title: ["Kingsmead", "Durban", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "11",
                title: ["Kingsmead", "Durban", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "17",
                title: ["Kingsmead", "Durban", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "18",
                title: ["Kingsmead", "Durban", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "19",
                title: ["Post Office", "Durban", "Afrique du Sud"],
                coordinates: "-29.85831, 31.02525",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "20",
                title: ["Samara Machel Street", "Durban", "Afrique du Sud"],
                coordinates: "-29.86009, 31.02846",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "21",
                title: ["Durban", "Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "23",
                title: ["West Street", "Durban", "Afrique du Sud"],
                coordinates: "-29.85829, 31.02477",
            },
            {
                number: "24",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "26",
                title: ["Howick Falls", "Howick", "Afrique du Sud"],
                coordinates: "-29.48609, 30.23868",
            },
            {
                number: "29",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "31",
                title: ["Amphithéâtre", "Drakensberg", "Afrique du Sud"],
                coordinates: "-28.69607, 28.9555",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "32",
                title: ["Amphithéâtre", "Drakensberg", "Afrique du Sud"],
                coordinates: "-28.69607, 28.9555",
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "25",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "28",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "29",
                title: ["Afrique du Sud"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "30",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "34",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "37",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "38",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "04",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "05",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "10",
                title: ["Kruger National Park", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "18",
                title: ["Kruger National Park", "Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "23",
                title: ["Kruger National Park", "Afrique du Sud"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "24",
                title: ["Kruger National Park", "Afrique du Sud"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "25",
                title: ["Kruger National Park", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "33",
                title: ["Kruger National Park", "Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "19",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "27",
                title: [
                    "Jardin Louis Botha",
                    "Union Buildings",
                    "Pretoria",
                    "Afrique du Sud",
                ],
                coordinates: "-25.74226, 28.21135",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "28",
                title: ["Voortrekker Monumen", "Pretoria", "Afrique du Sud"],
                coordinates: "-25.77562, 28.17583",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "33",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "34",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "35",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "36",
                title: ["Afrique du Sud"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "37",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "38",
                title: ["Afrique du Sud"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
        ],
        [
            {
                number: "05",
                title: ["Afrique du Sud"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "12",
                title: ["Anstey's Building", "Johannesburg", "Afrique du Sud"],
                coordinates: "-26.20179, 28.04241",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "14",
                title: ["Anstey's Building", "Johannesburg", "Afrique du Sud"],
                coordinates: "-26.20179, 28.04241",
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "18",
                title: "",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "19",
                title: ["Entebbe", "Ouganda"],
                coordinates: "0.04359, 32.44179",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "25",
                title: ["Aéroport", "Khartoum", "Soudan"],
                coordinates: "15.59276, 32.55223",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "31",
                title: ["Gizeh", "Egypte"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "35",
                title: ["Sphinx de Gizeh", "Gizeh", "Egypte"],
                coordinates: "29.97507, 31.13789",
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "02",
                title: ["Sphinx de Gizeh", "Gizeh", "Egypte"],
                coordinates: "29.97489, 31.13867",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "03",
                title: ["Sphinx de Gizeh", "Gizeh", "Egypte"],
                coordinates: "29.97489, 31.13867",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "04",
                title: ["Pont Qasr al-Nil", "Le Caire", "Egypte"],
                coordinates: "30.04374, 31.22946",
            },
            {
                number: "05",
                title: ["Mosquée Omar Makram", "Le Caire", "Égypte"],
                coordinates: "30.04319, 31.23394",
            },
            {
                number: "07",
                title: ["Le Caire", "Egypte"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "09",
                title: ["Ibrahim Al Lakani Street", "Le Caire", "Egypte"],
                coordinates: "30.08913, 31.32082",
            },
            {
                number: "10",
                title: ["Palais d'el-Orouba", "Le Caire", "Egypte"],
                coordinates: "30.08897, 31.32075",
            },
            {
                number: "11",
                title: ["Baghdad Street", "El-Korba", "Le Caire", "Egypte"],
                coordinates: "30.08872, 31.32143",
            },
            {
                number: "13",
                title: "",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "18",
                title: ["Pjazza tas-Sur", "Mdina", "Malte"],
                coordinates: "35.88745, 14.40295",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "19",
                title: ["Mdina Gate", "Mdina", "Malte"],
                coordinates: "35.88454, 14.40331",
            },
            {
                number: "20",
                title: [
                    "Co-cathédrale Saint-Jean de La Valette",
                    "La Valette",
                    "Malte",
                ],
                coordinates: "35.89728, 14.51223",
            },
            {
                number: "28",
                title: "",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "33",
                title: "",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "36",
                title: "",
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "02",
                title: ["Sibérie", "Russie"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "05",
                title: ["Sibérie", "Russie"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "06",
                title: ["Sibérie", "Russie"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "12",
                title: "",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "16",
                title: ["Kamakura Daibutsu", "Kōtoku-in", "Kamakura", "Japon"],
                coordinates: "35.3166, 139.53567",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "17",
                title: ["Nio-mon Gate", "Kōtoku-in", "Kamakura", "Japon"],
                coordinates: "35.3158, 139.53534",
            },
            {
                number: "18",
                title: ["Kamakura", "Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "20",
                title: ["Japon"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
        ],
        [
            {
                number: "02",
                title: [
                    "Téléphérique Hakone Komagatake",
                    "Ōwakudani",
                    "Hakone",
                    "Japon",
                ],
                coordinates: "35.24394, 139.01842",
            },
            {
                number: "03",
                title: ["Onsen", "Ōwakudani", "Hakone", "Japon"],
                coordinates: "35.24004, 139.01886",
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "07",
                title: ["Japon"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "13",
                title: ["Japon"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "17",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "22",
                title: ["Kinkaku-ji", "Kyoto", "Japon"],
                coordinates: "35.03948, 135.72871",
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "26",
                title: ["Jardin de pierres", "Ryōan-ji", "Kyoto", "Japon"],
                coordinates: "35.03445, 135.7183",
            },
            {
                number: "27",
                title: ["Palais Ninomaru", "Château de Nijō", "Kyoto", "Japon"],
                coordinates: "35.01289, 135.75044",
            },
            {
                number: "29",
                title: ["Ōtenmon", "Heian-jingū", "Kyoto", "Japon"],
                coordinates: "35.01524, 135.78225",
            },
            {
                number: "30",
                title: ["Sōryūrō", "Heian-jingū", "Kyoto", "Japon"],
                coordinates: "35.01599, 135.78253",
            },
            {
                number: "31",
                title: ["Heian-jingū", "Kyoto", "Japon"],
                coordinates: "35.01706, 135.78324",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "33",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "34",
                title: ["Chū-mon", "Tōdai-ji", "Nara", "Japon"],
                coordinates: "34.68747, 135.83984",
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "35",
                title: ["Daibutsu-den", "Tōdai-ji", "Nara", "Japon"],
                coordinates: "34.68829, 135.83982",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "38",
                title: ["Shōrō", "Tōdai-ji", "Nara", "Japon"],
                coordinates: "34.68878, 135.84193",
            },
        ],
        [
            {
                number: "01",
                title: ["Nara", "Japon"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "03",
                title: ["Naishimon Gate", "Kasuga-taisha", "Nara", "Japon"],
                coordinates: "34.68161, 135.84775",
            },
            {
                number: "06",
                title: ["Gojū-no-tō", "Kōfuku-ji", "Nara", "Japon"],
                coordinates: "34.68255, 135.83172",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "07",
                title: ["Japon"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "12",
                title: ["Hyakutai Jizo-Do", "Kiyomizu-dera", "Kyoto", "Japon"],
                coordinates: "34.99483, 135.78571",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "15",
                title: ["Komainu", "Kiyomizu-dera", "Kyoto", "Japon"],
                coordinates: "34.99546, 135.78316",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "19",
                title: ["Kyoto", "Japon"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "21",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "22",
                title: ["Japon"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "26",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "27",
                title: ["Dôme de Genbaku", "Hiroshima", "Japon"],
                coordinates: "34.39595, 132.45244",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "29",
                title: [
                    "Cénotaphe",
                    "Parc du Mémorial de la Paix",
                    "Hiroshima",
                    "Japon",
                ],
                coordinates: "34.39462, 132.4519",
            },
            {
                number: "30",
                title: ["Hiroshima", "Japon"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "33",
                title: ["Torii", "Itsukushima-jinja", "Itsukushima", "Japon"],
                coordinates: "34.29723, 132.31894",
            },
            {
                number: "34",
                title: [
                    "Masugata",
                    "Itsukushima-jinja",
                    "Itsukushima",
                    "Japon",
                ],
                coordinates: "34.29617, 132.32019",
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "01",
                title: ["Japon"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "04",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "05",
                title: ["Japon"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "06",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "07",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "08",
                title: ["Ritsurin-kōen", "Takamatsu", "Japon"],
                coordinates: "34.3293, 134.04369",
            },
            {
                number: "15",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "16",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "19",
                title: ["Japon"],
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "22",
                title: ["Chutes de Kegon", "Parc national de Nikkō", "Japon"],
                coordinates: "36.73826, 139.50359",
                pictures: 1,
                orientation: "portrait",
            },
        ],
        [
            {
                number: "02",
                title: ["Gojūnotō", "Tōshō-gū", "Nikkō", "Japon"],
                coordinates: "36.75648, 139.59939",
            },
            {
                number: "03",
                title: ["Kamijinko", "Tōshō-gū", "Nikkō", "Japon"],
                coordinates: "36.75707, 139.59924",
            },
            {
                number: "04",
                title: ["Sanzaru", "Shinkyusha", "Tōshō-gū", "Nikkō", "Japon"],
                coordinates: "36.75712, 139.59905",
            },
            {
                number: "05",
                title: ["Kamijinko", "Tōshō-gū", "Nikkō", "Japon"],
                coordinates: "36.75722, 139.59903",
            },
            {
                number: "06",
                title: ["Omizuya", "Tōshō-gū", "Nikkō", "Japon"],
                coordinates: "36.75731, 139.5988",
            },
            {
                number: "07",
                title: ["Kairo", "Tōshō-gū", "Nikkō", "Japon"],
                coordinates: "36.75766, 139.59872",
            },
            {
                number: "09",
                title: ["Yomeimon Gate", "Tōshō-gū", "Nikkō", "Japon"],
                coordinates: "36.7578, 139.59872",
            },
            {
                number: "10",
                title: ["Nemuri-neko", "Tōshō-gū", "Nikkō", "Japon"],
                coordinates: "36.7578, 139.59918",
            },
            {
                number: "13",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "15",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "16",
                title: ["Japon"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "19",
                title: ["Japon"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "21",
                title: ["Japon"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "22",
                title: "",
                pictures: 1,
                orientation: "landscape",
            },
        ],
        [
            {
                number: "03",
                title: ["Port", "Nakhodka", "Russie"],
                coordinates: "42.80896, 132.88431",
            },
            {
                number: "06",
                title: ["Russie"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "07",
                title: ["Russie"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "08",
                title: ["Muravyov Amursky Park", "Khabarovsk", "Russie"],
                coordinates: "48.48348, 135.04677",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "10",
                title: ["Khabarovsk", "Russie"],
                coordinates: "48.48233, 135.04913",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "11",
                title: ["Khabarovsk", "Russie"],
                pictures: 1,
                detail: true,
                orientation: "portrait",
            },
            {
                number: "13",
                title: ["Ivanovskaya Square", "Kremlin", "Moscou", "Russie"],
                coordinates: "55.75119, 37.61926",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "14",
                title: [
                    "Cathédrale de la Dormition",
                    "Kremlin",
                    "Moscou",
                    "Russie",
                ],
                coordinates: "55.7513, 37.61799",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "15",
                title: ["Tsar Pouchka", "Kremlin", "Moscou", "Russie"],
                coordinates: "55.75146, 37.618",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "16",
                title: ["Kremlin", "Moscou", "Russie"],
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "17",
                title: [
                    "Palais du Patriarche et Cathédrale de la Dormition",
                    "Kremlin",
                    "Moscou",
                    "Russie",
                ],
                coordinates: "55.7519, 37.6165",
            },
            {
                number: "18",
                title: ["Théâtre Bolchoï", "Moscou", "Russie"],
                coordinates: "55.75856, 37.6196",
            },
            {
                number: "19",
                title: ["Musée historique d'État", "Moscou", "Russie"],
                coordinates: "55.75671, 37.61418",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "20",
                title: [
                    "Église de l'Ascension",
                    "Kolomenskoye",
                    "Moscou",
                    "Russie",
                ],
                coordinates: "55.66762, 37.66934",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "22",
                title: [
                    "Tsar's Courtyard Front Gate",
                    "Kolomenskoye",
                    "Moscou",
                    "Russie",
                ],
                coordinates: "55.66753, 37.66996",
            },
            {
                number: "23",
                title: [
                    "Gate Tower of Saint Nicholas Monastery Korelskogo",
                    "Kolomenskoye",
                    "Moscou",
                    "Russie",
                ],
                coordinates: "55.67396, 37.67766",
            },
            {
                number: "25",
                title: [
                    "Cabane de Pierre Ier le Grand",
                    "Kolomenskoye",
                    "Moscou",
                    "Russie",
                ],
                coordinates: "55.66739, 37.66705",
            },
            {
                number: "27",
                title: [
                    "Church of the Kazan Icon of the Mother of God",
                    "Kolomenskoye",
                    "Moscou",
                    "Russie",
                ],
                coordinates: "55.6688, 37.66716",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "30",
                title: [
                    "Church of the Beheading of John the Baptist in Dyakovo",
                    "Kolomenskoye",
                    "Moscou",
                    "Russie",
                ],
                coordinates: "55.66522, 37.6687",
            },
            {
                number: "33",
                title: ["Philarmonie", "Berlin", "Allemagne"],
                coordinates: "52.51069, 13.37427",
            },
            {
                number: "35",
                title: ["Konzerthaus", "Gendarmenmark", "Berlin", "Allemagne"],
                coordinates: "52.51338, 13.39266",
                pictures: 1,
                orientation: "landscape",
            },
            {
                number: "36",
                title: [
                    "Französischer Dom",
                    "Gendarmenmark",
                    "Berlin",
                    "Allemagne",
                ],
                coordinates: "52.51402, 13.3933",
                pictures: 1,
                orientation: "portrait",
            },
            {
                number: "38",
                title: [
                    "Porte de Brandebourg",
                    "Pariser Platz",
                    "Berlin",
                    "Allemagne",
                ],
                coordinates: "52.51641, 13.37968",
            },
        ],
    ];
    /*     const projectFiles = [
        "1957  - bretagne - départ italie",
        "milan - florence",
        "naples - capri - paestum",
        "kraemer",
        "sur le bateau",
        "le cap",
        "port elizabeth - east london",
        "east london - durban - port - cannes à sucre",
        "durban - marche indigène - le port - mariage hindou - les 1000 collines - zoulous",
        "ngomas danses - durban - en route pour les drakensberg",
        "drakensberg",
        "sur la route du kruger park",
        "kruger park - retour - danses des mines",
        "johannesburg - location - ecole - entebbe - khartoum - le caire",
        "le caire - malte - arrivée à luxembourg",
        "sibérie - japon - hakone",
        "kyoto - nara",
        "kyoto - nara - hiroshima",
        "takamatsu",
        "nikko - départ",
        "khabarovsk - moscou - berlin",
    ]; */

    for (let i = 0; i < picturesData.length; i++) {
        for (const item of picturesData[i]) {
            if (item.hasOwnProperty("pictures")) {
                const thumbnailBox = document.createElement("div");
                const thumbnailCaption = document.createElement("div");
                const captionNumber = document.createElement("p");
                const thumbnailImg = document.createElement("img");
                const imgId = `${i + 1}-${item.number}`;

                thumbnailBox.classList.add("thumbnail");

                (function setCaption() {
                    thumbnailCaption.classList.add("thumbnail__caption");

                    captionNumber.textContent = item.number;
                    thumbnailCaption.appendChild(captionNumber);

                    if (item.title !== "") {
                        const captionTitle = document.createElement("div");

                        for (const element of item.title) {
                            const titleElement = document.createElement("p");

                            titleElement.textContent = element;
                            captionTitle.appendChild(titleElement);
                        }

                        captionTitle.classList.add(
                            "thumbnail__caption__title",
                            `thumbnail__caption__title--${imgId}`
                        );
                        thumbnailCaption.appendChild(captionTitle);
                    }
                })();

                (function createThumbnail() {
                    thumbnailImg.setAttribute("loading", "lazy");
                    thumbnailImg.src = `./img/projet-4/thumbnails/${imgId}.jpg`;
                    thumbnailImg.classList.add(imgId);
                })();

                thumbnailImg.addEventListener("click", () => {
                    const fullPicture = document.querySelector(".picture");
                    const property = innerWidth;
                    const breakpoints = [1366, 1920];

                    responsiveLoading(
                        fullPicture,
                        projectData.id,
                        imgId,
                        property,
                        breakpoints
                    );
                });

                thumbnailBox.appendChild(thumbnailCaption);
                thumbnailBox.appendChild(thumbnailImg);
                document
                    .querySelector(".container--thumbnails")
                    .appendChild(thumbnailBox);
            }
        }
    }
}

(function projectFour() {
    createContent();
    createSpreads(projectData);
})();
