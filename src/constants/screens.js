import { Intro } from '../components/screens/Intro';
import { Game1 } from '../components/screens/Game1';
import { PostGame1 } from '../components/screens/PostGame1';
import { Game2 } from '../components/screens/Game2';
import { PostGame2 } from '../components/screens/PostGame2';
import { Game3 } from '../components/screens/Game3';
import { PostGame3 } from '../components/screens/PostGame3';
import { Final } from '../components/screens/Final';
// import { PreFinal } from '../components/screens/PreFinal';

import * as picGame3 from '../components/screens/Game3/assets';
import * as picGame2 from "../components/screens/Game2/assets";
import * as picGame1 from "../components/screens/Game1/assets";

import bgFinal from '../assets/images/bgFinal.svg';
import bgPostLvl1 from '../assets/images/bgPostLvl1.svg';
import bgPostLvl2 from '../assets/images/bgPostLvl2.svg';
import bgPostLvl3 from '../assets/images/bgPostLvl3.svg';
import finalImg from '../assets/images/finalImg.png';
import postLvl1 from '../assets/images/postLvl1.png';
import postLvl2 from '../assets/images/postLvl2.png';
import postLvl3 from '../assets/images/postLvl3.png';
import blockHeaderRules from '../assets/images/blockHeaderRules.svg';
import hand from '../assets/images/hand.png';

export const screens = [
    {
        id: 0,
        component: Intro
    },
    {
        id: 1,
        component: Game1
    },
    {
        id: 2,
        component: PostGame1
    },
    {
        id: 3,
        component: Game2
    },
    {
        id: 4,
        component: PostGame2
    },
    {
        id: 5,
        component: Game3
    },
    {
        id: 6,
        component: PostGame3
    },
    // {
    //     id: 7,
    //     component: PreFinal
    // },
    {
        id: 8,
        component: Final
    },
];

export const preloadImages = [
    blockHeaderRules, picGame1.arm_left, picGame1.arm_right, picGame1.boardPic, picGame1.body_up, picGame1.head_left,
    picGame1.head_right, picGame1.leg_left, picGame1.leg_right, postLvl1, bgPostLvl1, picGame2.boardPic, picGame2.rect,
    picGame2.rect1, picGame2.rect2, picGame2.vector7, picGame2.vector8, picGame2.vector3, 
    picGame2.vector4, picGame2.vector5, picGame2.vector6, picGame2.vector10, picGame2.vector11, 
    picGame2.vector9, postLvl2, bgPostLvl2, picGame3.boardPic, picGame3.vector, picGame3.vector1, picGame3.vector2, 
    picGame3.vector3, picGame3.vector4, picGame3.vector5, picGame3.vector6, picGame3.vector7, 
    picGame3.vector8, picGame3.vector9, picGame3.vector10, picGame3.vector11, picGame3.vector12, 
    picGame3.vector13, picGame3.vector14, picGame3.vector15, postLvl3, bgPostLvl3, bgFinal, finalImg, hand
];
