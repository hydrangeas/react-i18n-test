export const i18n = {
  defaultLocale: "en",
  locales: ["de", "en", "cs", "ja"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
