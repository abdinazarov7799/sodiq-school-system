import {devtools, persist} from "zustand/middleware";
import config from "../config.js";
import storage from "../services/storage";
import {create} from "zustand";


let store = (set) => ({
    user: null,
    isAuthenticated: true,
    // breadcrumbs: [],
    setUser: (user) => set(state => ({...state, user})),
    setAuth: (isAuthenticated) => set(state => ({...state, isAuthenticated})),
    // setBreadcrumbs: (breadcrumbs) => set(state => ({...state, breadcrumbs}))
})

let settingsStore = (set) => ({
    token: true,
    lang: storage.get('lang') ||  config.DEFAULT_APP_LANG,
    setToken: (token) => set(state => ({...state, token})),
    setLang: (lang) => set(state => ({...state, lang})),
})


store = devtools(store);
settingsStore = devtools(settingsStore)
settingsStore = persist(settingsStore, {name: 'settings'});

export const useStore = create(store)
export const useSettingsStore = create(settingsStore)

