import { store } from '../store/store';
import { setLanguage, toggleLanguage } from '../store/languageSlice';

export class LanguageController {
  static init() {
    const lang = localStorage.getItem('language') as 'en' | 'ar' || 'en';
    store.dispatch(setLanguage(lang));
  }

  static toggle() {
    store.dispatch(toggleLanguage());
  }

  static set(lang: 'en' | 'ar') {
    store.dispatch(setLanguage(lang));
  }
}