import { makeAutoObservable } from "mobx";

const language = JSON.parse(localStorage.getItem('language'));
const theme = JSON.parse(localStorage.getItem('theme'));
if (!language || language === 'null') localStorage.setItem('language', JSON.stringify({ title: 'English', data: 'en' }));
if (!theme || theme === 'null') localStorage.setItem('theme', JSON.stringify({ title: 'Dark', data: 'dark' }));

class AppStore {
    language = language;
    theme = theme;

    constructor() {
        makeAutoObservable(this);
        this.setLanguage = this.setLanguage.bind(this);
        this.setTheme = this.setTheme.bind(this);
    }

    setLanguage(value) {
        this.language = value
    }

    setTheme(value) {
        this.theme = value
    }
};

export const appStore = new AppStore();
