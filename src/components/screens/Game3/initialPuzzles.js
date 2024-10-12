import {
    vector, vector1, vector3, vector4, vector10, vector11, 
    vector5, vector6, vector7, vector8, vector9, vector12, 
    vector13, vector14, vector15, vector2 
} from './assets';

export const initialPuzzles = [
    {
        id: 1,
        sizeX: 1,
        sizeY: 5,
        correctX: [1],
        correctY: [9],
        src: vector,
        isOnlyPosition: true,
        startPuz: {
            rotation: -12,
            right: 40,
            bottom: 29,
        },
        puzzWidth: 16,
        puzzHeight: 79,
        puzzRealWidth: 18,
        puzzRealHeight: 90,
        rectColor: '#2ADBDB',
        borderRadius: (ratio) => `${ratio * 15}px 0 0 ${ratio * 15}px`,
    },
    {
        id: 2,
        sizeX: 1,
        sizeY: 5,
        correctX: [10],
        correctY: [9],
        src: vector1,
        isOnlyPosition: true,
        startPuz: {
            rotation: 0,
            right: 47,
            top: 76,
        },
        puzzWidth: 16,
        puzzHeight: 79,
        puzzRealWidth: 18,
        puzzRealHeight: 90,
        rectColor: '#2ADBDB',
        borderRadius: (ratio) => `0 ${ratio * 15}px ${ratio * 15}px 0`,
    },
    {
        id: 3,
        sizeX: 2,
        sizeY: 2,
        correctX: [4],
        correctY: [15],
        src: vector2,
        startPuz: {
            rotation: 25,
            top: 127,
            right: 85,
        },
        puzzWidth: 31,
        puzzHeight: 31,
        puzzRealWidth: 36,
        puzzRealHeight: 36,
    },
    {
        id: 4,
        sizeX: 2,
        sizeY: 2,
        correctX: [6],
        correctY: [15],
        src: vector3,
        startPuz: {
            rotation: 0,
            left: 63,
            top: 105,
        },
        puzzWidth: 31,
        puzzHeight: 31,
        puzzRealWidth: 36,
        puzzRealHeight: 36,
    },
    {
        id: 5,
        sizeX: 3,
        sizeY: 1,
        correctX: undefined,
        correctY: undefined,
        src: vector5,
        startPuz: {
            rotation: 42,
            left: 160,
            top: 27,
        },
        puzzWidth: 47,
        puzzHeight: 16,
        puzzRealWidth: 54,
        puzzRealHeight: 18,
        rectColor: '#A39CFF',
    },
    {
        id: 6,
        sizeX: 3,
        sizeY: 3,
        correctX: [7],
        correctY: [12],
        src: vector6,
        startPuz: {
            rotation: -13,
            left: 134,
            bottom: 40,
        },
        puzzWidth: 47,
        puzzHeight: 47,
        puzzRealWidth: 54,
        puzzRealHeight: 54,
        isOnlyPosition: true,
        rectColor: '#FF605C',
        borderRadius: (ratio) => `0 0 ${ratio * 5}px 0`,
    },
    {
        id: 7,
        sizeX: 3,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        src: vector7,
        startPuz: {
            rotation: 0,
            right: 40,
            top: 201,
        },
        puzzWidth: 47,
        puzzHeight: 31,
        puzzRealWidth: 54,
        puzzRealHeight: 36,
        rectColor: '#A39CFF',
    },
   
    {
        id: 8,
        sizeX: 2,
        sizeY: 5,
        correctX: [5],
        correctY: [10],
        src: vector8,
        startPuz: {
            rotation: 0,
            left: 52,
            top: 185,
        },
        puzzWidth: 31,
        puzzHeight: 79,
        puzzRealWidth: 36,
        puzzRealHeight: 90,
    },
    {
        id: 9,
        sizeX: 3,
        sizeY: 3,
        correctX: undefined,
        correctY: undefined,
        src: vector9,
        startPuz: {
            rotation: 14,
            left: 34,
            bottom: 155,
        },
        puzzWidth: 47,
        puzzHeight: 47,
        puzzRealWidth: 54,
        puzzRealHeight: 54,
        rectColor: '#FF605C',
    },
    {
        id: 10,
        sizeX: 3,
        sizeY: 2,
        correctX: [2],
        correctY: [13],
        isOnlyPosition: true,
        src: vector4,
        startPuz: {
            rotation: 25,
            bottom: 132,
            right: 34,
        },
        puzzWidth: 47,
        puzzHeight: 32,
        puzzRealWidth: 54,
        puzzRealHeight: 36,
        rectColor: '#A39CFF',
        borderRadius: (ratio) => `0 0 0 ${ratio * 5}px`,
    },
    {
        id: 11,
        sizeX: 3,
        sizeY: 5,
        correctX: [2],
        correctY: [4],
        src: vector10,
        isOnlyPosition: true,
        startPuz: {
            rotation: -28,
            left: 30,
            bottom: 35,
        },
        puzzWidth: 47,
        puzzHeight: 79,
        puzzRealWidth: 54,
        puzzRealHeight: 90,
        xPosition: '100%'
    },
    {
        id: 12,
        sizeX: 3,
        sizeY: 3,
        correctX: [7],
        correctY: [4],
        src: vector11,
        startPuz: {
            rotation: 11,
            left: 134,
            top: 63,
        },
        puzzWidth: 47,
        puzzHeight: 47,
        puzzRealWidth: 54,
        puzzRealHeight: 54,
    },
    {
        id: 13,
        sizeX: 2,
        sizeY: 3,
        correctX: [5, 8],
        correctY: [4, 7],
        src: vector12,
        startPuz: {
            rotation: 42,
            left: 78,
            top: 20,
        },
        puzzWidth: 31,
        puzzHeight: 47,
        puzzRealWidth: 36,
        puzzRealHeight: 54,
        xPosition: '100%'
    },
    {
        id: 14,
        sizeX: 2,
        sizeY: 3,
        correctX: [5, 8],
        correctY: [4, 7],
        src: vector13,
        startPuz: {
            rotation: -32,
            right: 36,
            bottom: 202,
        },
        puzzWidth: 31,
        puzzHeight: 47,
        puzzRealWidth: 36,
        puzzRealHeight: 54,
        rectColor: '#2ADBDB',
    },
    {
        id: 15,
        sizeX: 3,
        sizeY: 3,
        correctX: undefined,
        correctY: undefined,
        src: vector14,
        startPuz: {
            rotation: 15,
            right: 87,
            top: 36,
        },
        puzzWidth: 47,
        puzzHeight: 47,
        puzzRealWidth: 54,
        puzzRealHeight: 54,
        rectColor: '#A39CFF',
    },
    {
        id: 16,
        sizeX: 6,
        sizeY: 3,
        correctX: [3],
        correctY: [1],
        src: vector15,
        isOnlyPosition: true,
        startPuz: {
            rotation: -40,
            right: 89,
            bottom: 33,
        },
        puzzWidth: 92,
        puzzHeight: 46,
        puzzRealWidth: 108,
        puzzRealHeight: 54,
        yPosition: '100%',
    },
];
export const initialPlaced = [{x: 0, y: 0}, {x: 5, y: 0}, {x: 7, y: 0}];