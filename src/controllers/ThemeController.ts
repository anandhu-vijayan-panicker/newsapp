import { store } from '../store/store';
import { setTheme, toggleTheme } from '../store/themeSlice';

export class ThemeController {
  static init() {
    const theme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    store.dispatch(setTheme(theme));
  }

  static toggle() {
    store.dispatch(toggleTheme());
  }

  static set(mode: 'light' | 'dark') {
    store.dispatch(setTheme(mode));
  }
}