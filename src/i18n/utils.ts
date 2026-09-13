import { defaultLang, languages, ui, type Lang, type UIKey } from "./ui";

export function getLangFromLocale(locale?: string): Lang {
	if (locale && locale in languages) {
		return locale as Lang;
	}
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: UIKey): string {
		return ui[lang]?.[key] ?? ui[defaultLang][key];
	};
}

