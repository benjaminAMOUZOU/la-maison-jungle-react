import monstera from '../images/monstera.jpg'
import ficus from '../images/fucus-lyrata.jpeg'
import pothos from '../images/pothos-argente.jpg'
import geranium from '../images/geranium.jpg'
import aloe from '../images/aloe.jpg'
import succulente from '../images/succulente.webp'
import yucca from '../images/yucca.jpeg'
import olivier from '../images/olivier.jpeg'
import basilique from '../images/basilique.jpg'

export const plantList = [
    {
        name: 'Monstera',
        category: 'Classique',
        id: '1ed',
        isBestSale: true,
        cover: monstera,
        light: 2,
        water: 3,
        price: 1500,
    },
    {
        name: 'Ficus lyrata',
        category: 'Classique',
        cover: ficus,
        id: '2ab',
        light: 3,
        water: 1,
        price: 2000,
    },
    {
        name: 'Pothos argenté',
        category: 'Classique',
        id: '3sd',
        light: 1,
        cover: pothos,
        water: 2,
        price: 1000,
    },
    {
        name: 'Yucca',
        category: 'Classique',
        id: '4kk',
        light: 3,
        cover: yucca,
        water: 1,
        price: 3000,
    },
    {
        name: 'Olivier',
        category: 'Extérieur',
        id: '5pl',
        light: 3,
        cover: olivier,
        water: 1,
        price: 2500,
    },
    {
        name: 'Géranium',
        category: 'Extérieur',
        id: '6uo',
        light: 2,
        cover: geranium,
        water: 2,
        price: 5000,
    },
    {
        name: 'Basilique',
        category: 'Extérieur',
        id: '7ie',
        isBestSale: true,
        light: 2,
        cover: basilique,
        water: 3,
        price: 750,
    },
    {
        name: 'Aloe',
        category: 'Plante grasse',
        id: '8fp',
        light: 2,
        cover: aloe,
        water: 1,
        price: 1850,
    },
    {
        name: 'Succulente',
        category: 'Plante grasse',
        id: '9vn',
        light: 2,
        cover: succulente,
        water: 1,
        price: 2200,
    },
]
