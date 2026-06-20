export type CategoriaGlossario =
  | 'Figure'
  | 'Documenti'
  | 'Normativa'
  | 'Rischi'
  | 'Concetti';

export interface TerminoGlossario {
  /** Slug URL-safe (es. "rspp") */
  slug: string;
  /** Termine o acronimo (es. "RSPP") */
  termine: string;
  /** Forma estesa (es. "Responsabile del Servizio di Prevenzione e Protezione") */
  titoloEsteso: string | null;
  /** Categoria del termine */
  categoria: CategoriaGlossario | string;
  /** Definizione sintetica (1 frase) */
  definizione: string;
  /** Paragrafi di approfondimento */
  contenuto: string[];
  /** Slug di altri termini del glossario correlati */
  correlati: string[];
}

export const GLOSSARIO: TerminoGlossario[];
export function getTerminoBySlug(slug: string): TerminoGlossario | undefined;
export function getByCategoria(categoria: string): TerminoGlossario[];
export function search(query: string): TerminoGlossario[];
