import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Language = 'en' | 'ar';

interface LanguageState {
  current: Language;
}

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('language');
  return (saved as Language) || 'en';
};

const initialState: LanguageState = {
  current: getInitialLanguage(),
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.current = action.payload;
      localStorage.setItem('language', action.payload);
      document.documentElement.setAttribute('dir', action.payload === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', action.payload);
    },
    toggleLanguage: (state) => {
      const newLang = state.current === 'en' ? 'ar' : 'en';
      state.current = newLang;
      localStorage.setItem('language', newLang);
      document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', newLang);
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;