import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import rawData from '../data/programs.json';
const rawPrograms = rawData.programs;

const MOROCCO_IMAGE = 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80';

const getLangValue = (obj, lang) => {
  if (!obj) return '';
  return obj[lang] || obj.en || '';
};

const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

export const useMoroccoPrograms = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const supported = ['ar', 'en', 'es', 'pt', 'it'];
  const activeLang = supported.includes(lang) ? lang : 'en';

  return useMemo(() => {
    return rawPrograms
      .filter((prog) => prog.id === 'MRC-01')
      .map((prog) => ({
        id: prog.id,
        title: getLangValue(prog.name, activeLang),
        slug: slugify(`${prog.id}-${getLangValue(prog.name, 'en')}`),
        images: [MOROCCO_IMAGE],
        duration: getLangValue(prog.duration, activeLang),
        highlights: getLangValue(prog.highlights, activeLang),
        overview: getLangValue(prog.overview, activeLang),
        code: getLangValue(prog.code, activeLang),
        minPax: getLangValue(prog.minPax, activeLang),
        price: prog.price || prog.priceFrom || prog.pricing?.winter?.[0]?.dbl || prog.pricing?.summer?.[0]?.dbl || 0,
        includes: getLangValue(prog.includes, activeLang),
        excludes: getLangValue(prog.excludes, activeLang),
        days: prog.days.map((day) => ({
          day: day.day,
          description: getLangValue(day.description, activeLang),
          meals: day.meals ? getLangValue(day.meals, activeLang) : null,
        })),
        raw: prog,
      }));
  }, [activeLang]);
};

export const useMoroccoProgram = (programSlugOrId) => {
  const programs = useMoroccoPrograms();
  if (!programSlugOrId) return null;
  const raw = decodeURIComponent(programSlugOrId).toLowerCase().trim();
  const clean = raw.replace(/^prog-/, '').replace(/[^a-z0-9]/g, '');

  return (
    programs.find((p) => {
      const pId = p.id.toLowerCase().replace(/[^a-z0-9]/g, '');
      const pSlug = p.slug.toLowerCase().replace(/[^a-z0-9]/g, '');
      const pTitle = (p.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      return (
        pSlug === clean ||
        pId === clean ||
        pSlug.includes(clean) ||
        clean.includes(pId) ||
        clean.includes(pSlug) ||
        (pTitle && (pTitle.includes(clean) || clean.includes(pTitle)))
      );
    }) || null
  );
};
