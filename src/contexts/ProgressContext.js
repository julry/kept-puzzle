import { FTClient } from 'ft-client';
import {createContext, useContext, useEffect, useRef, useState} from 'react'
import {screens} from "../constants/screens";
import {getUrlParam} from "../utils/getUrlParam";

const INITIAL_STATE = {
    screen: 0,
}

const ProgressContext = createContext(INITIAL_STATE)

export function ProgressProvider(props) {
    const {children} = props
    const [currentScreenIndex, setCurrentScreenIndex] = useState(getUrlParam('screen') || INITIAL_STATE.screen)
    const screen = screens[currentScreenIndex];
    const client = useRef();

    useEffect(() => {
        client.current = new FTClient(
            'https://games-admin.fut.ru/api/',
            'kept-pazzle'
        );
    }, []);

    const registrateEmail = async ({email}) => {
       try {
            const emailUser = await client?.current.findRecord('email', email);
            if (emailUser) return;

            const record = await client?.current.createRecord({email});
            return record; 
       } catch (e) {
            return {isError: true}
       }
    };


    function next() {
        const nextScreenIndex = currentScreenIndex + 1;
        if (nextScreenIndex > screens.length - 1) return;

        setCurrentScreenIndex(nextScreenIndex);
    }

    const state = {
        screen,
        next,
        registrateEmail
    }

    return (
        <ProgressContext.Provider value={state}>
            {children}
        </ProgressContext.Provider>
    )
}

export function useProgress() {
    return useContext(ProgressContext)
}
