import earth from '../images/core/earth.jpg';
import moon from '../images/core/moon.jpg';
import neptune from '../images/core/neptune.jpg';
import jupiter from '../images/core/jupiter.jpg';
import saturn from '../images/core/saturn.jpg';
import uranus from '../images/core/uranus.jpg';
import mars from '../images/core/mars.jpg';
import venus from '../images/core/venus.jpg';

import venus1 from '../images/additional/venus/venus1.jpg'
import venus2 from '../images/additional/venus/venus2.jpg'
import venus3 from '../images/additional/venus/venus3.jpg'
import venus4 from '../images/additional/venus/venus4.jpg'

import earth1 from '../images/additional/earth/earth1.jpg'
import earth2 from '../images/additional/earth/earth2.jpg'
import earth3 from '../images/additional/earth/earth3.jpg'
import earth4 from '../images/additional/earth/earth4.jpg'
import earth5 from '../images/additional/earth/earth5.jpg'

import moon1 from '../images/additional/moon/moon1.jpg'
import moon2 from '../images/additional/moon/moon2.jpg'
import moon3 from '../images/additional/moon/moon3.jpg'
import moon4 from '../images/additional/moon/moon4.jpg'
import moon5 from '../images/additional/moon/moon5.jpg'

import mars1 from '../images/additional/mars/mars1.jpg'
import mars2 from '../images/additional/mars/mars2.jpg'
import mars3 from '../images/additional/mars/mars3.jpg'
import mars4 from '../images/additional/mars/mars4.jpg'

import jupiter1 from '../images/additional/jupiter/jupiter1.jpg'
import jupiter2 from '../images/additional/jupiter/jupiter2.jpg'
import jupiter3 from '../images/additional/jupiter/jupiter3.jpg'

import saturn1 from '../images/additional/saturn/saturn1.jpg'
import saturn2 from '../images/additional/saturn/saturn2.jpg'
import saturn3 from '../images/additional/saturn/saturn3.jpg'
import saturn4 from '../images/additional/saturn/saturn4.jpg'

import uranus1 from '../images/additional/uranus/uranus1.jpg'
import uranus2 from '../images/additional/uranus/uranus2.jpg'
import uranus3 from '../images/additional/uranus/uranus3.jpg'
import uranus4 from '../images/additional/uranus/uranus4.jpg'

import neptune1 from '../images/additional/neptune/neptune1.jpg'
import neptune2 from '../images/additional/neptune/neptune2.jpg'
import neptune3 from '../images/additional/neptune/neptune3.jpg'
import neptune4 from '../images/additional/neptune/neptune4.jpg'


const planets = [
    {
        id: "venus",
        name: "venus",
        index: 0,
        price: 10,
        image: venus,
        profilePicture: venus,
        gallery: [venus1,
            venus2,
            venus3,
            venus4]
    },
    {
        id: "earth",
        name: "earth",
        index: 1,
        price: 20,
        image: earth,
        profilePicture: earth,
        gallery: [earth1,
            earth2,
            earth3,
            earth4,
            earth5]
    },
    {
        id: "moon",
        name: "moon",
        index: 2,
        price: 30,
        image: moon,
        profilePicture: moon,
        gallery: [moon1, 
            moon2, 
            moon3, 
            moon4,
            moon5]
    },
    {
        id: "mars",
        name: "mars",
        index: 3,
        price: 40,
        image: mars,
        profilePicture: mars,
        gallery: [mars1,
            mars2,
            mars3,
            mars4]
    }, 
    {
        id: "jupiter",
        name: "jupiter",
        index: 4,
        price: 50,
        image: jupiter,
        profilePicture: jupiter,
        gallery: [jupiter1,
            jupiter2,
            jupiter3]
    },
    {
        id: "saturn",
        name: "saturn",
        index: 5,
        price: 60,
        image: saturn,
        profilePicture: saturn,
        gallery: [saturn1,
            saturn2,
            saturn3,
            saturn4]
    },
    {
        id: "uranus",
        name: "uranus",
        index: 6,
        price: 70,
        image: uranus,
        profilePicture: uranus,
        gallery: [uranus1,
            uranus2,
            uranus3,
            uranus4]
    },
    {
        id: "neptune",
        name: "neptune",
        index: 7,
        price: 80,
        image: neptune,
        profilePicture: neptune,
        gallery: [neptune1,
            neptune2,
            neptune3,
            neptune4]
    },

];

export default planets;