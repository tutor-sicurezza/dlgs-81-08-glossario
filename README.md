# dlgs-81-08-glossario

[![License: MIT + CC BY-SA 4.0](https://img.shields.io/badge/license-MIT%20%2B%20CC%20BY--SA%204.0-blue.svg)](./LICENSE)
[![entries](https://img.shields.io/badge/voci-218-green.svg)](./data/glossario.json)
[![GitHub release](https://img.shields.io/github/v/release/tutor-sicurezza/dlgs-81-08-glossario)](https://github.com/tutor-sicurezza/dlgs-81-08-glossario/releases)
[![GitHub stars](https://img.shields.io/github/stars/tutor-sicurezza/dlgs-81-08-glossario?style=social)](https://github.com/tutor-sicurezza/dlgs-81-08-glossario/stargazers)
[![CI](https://github.com/tutor-sicurezza/dlgs-81-08-glossario/actions/workflows/ci.yml/badge.svg)](https://github.com/tutor-sicurezza/dlgs-81-08-glossario/actions/workflows/ci.yml)
[![Part of the tutor-sicurezza open-data ecosystem](https://img.shields.io/badge/ecosystem-tutor--sicurezza-blue.svg)](https://github.com/tutor-sicurezza)

Glossario JSON dei termini chiave del **D.Lgs 9 aprile 2008, n. 81** (Testo Unico Sicurezza Lavoro) e della normativa collegata: **218 voci** suddivise in 5 categorie (Figure, Documenti, Normativa, Rischi, Concetti), ciascuna con definizione sintetica, paragrafi di approfondimento e riferimenti incrociati.

Pensato come dataset base per: chatbot legal-tech, motori di ricerca interna su portali HSE, app didattiche per percorsi RSPP/RLS, generatori di contenuti, schede informative aziendali.

## Cos’è

Il D.Lgs 81/08 è disseminato di acronimi (RSPP, ASPP, RLS, DVR, DUVRI, POS, MMC, VDT, ATEX, ecc.) e concetti tecnici che spesso vengono usati senza essere definiti. Questo glossario raccoglie 218 voci in formato JSON portabile — pronte per essere indicizzate, consultate o renderizzate in qualsiasi stack — con riferimenti puntuali alla normativa.

## Installazione

```bash
npm install dlgs-81-08-glossario
```

oppure clona il repo e usa direttamente `data/glossario.json`.

## Esempio d’uso

```ts
import {
  GLOSSARIO,
  getTerminoBySlug,
  getByCategoria,
  search,
} from 'dlgs-81-08-glossario';

const rspp = getTerminoBySlug('rspp');
console.log(rspp?.titoloEsteso);
// "Responsabile del Servizio di Prevenzione e Protezione"

const documenti = getByCategoria('Documenti');
console.log(documenti.length); // 37

const risultati = search('valutazione rischi');
```

### Struttura della voce

```ts
interface TerminoGlossario {
  slug: string;          // es. "rspp"
  termine: string;       // es. "RSPP"
  titoloEsteso: string | null;
  categoria: 'Figure' | 'Documenti' | 'Normativa' | 'Rischi' | 'Concetti';
  definizione: string;   // 1 frase, ideale come meta description
  contenuto: string[];   // paragrafi di approfondimento
  correlati: string[];   // slug di altre voci collegate
}
```

## Esempi di voci

**RSPP** — *Responsabile del Servizio di Prevenzione e Protezione*
> Figura designata dal datore di lavoro per coordinare il servizio di prevenzione e protezione dai rischi aziendali, ai sensi del D.Lgs. 81/08.

**DVR** — *Documento di Valutazione dei Rischi*
> Documento obbligatorio in cui il datore di lavoro analizza, valuta e individua le misure di prevenzione per tutti i rischi presenti in azienda (art. 28 D.Lgs 81/08).

**MMC** — *Movimentazione Manuale dei Carichi*
> Insieme delle operazioni di trasporto o sostegno di un carico ad opera di uno o più lavoratori, che possono comportare rischi di patologie da sovraccarico biomeccanico (Titolo VI D.Lgs 81/08).

## Statistiche dataset

| Categoria | Voci |
|---|---|
| Concetti | 97 |
| Documenti | 37 |
| Rischi | 37 |
| Figure | 27 |
| Normativa | 20 |
| **Totale** | **218** |

Tutte le voci hanno almeno: `slug`, `termine`, `categoria`, `definizione`. La maggior parte ha anche `contenuto` esteso (2-3 paragrafi) e `correlati`.

## Versione consultabile online

Una versione navigabile con ricerca a faccette è disponibile sul [glossario di 123Formazione](https://123formazione.com/glossario), che usa questo dataset come fonte.

## Related repositories

Open dataset / tooling ecosystem for Italian workplace safety (D.Lgs 81/08) maintained by [@tutor-sicurezza](https://github.com/tutor-sicurezza):

**Datasets**
- [italian-ateco-database](https://github.com/tutor-sicurezza/italian-ateco-database) — ATECO 2007 codes + workplace-safety risk
- [italian-province-regioni-dataset](https://github.com/tutor-sicurezza/italian-province-regioni-dataset) — Italian provinces + regions metadata
- [comuni-italiani-istat](https://github.com/tutor-sicurezza/comuni-italiani-istat) — Italian municipalities with ISTAT codes
- [dlgs-81-08-testo-unico](https://github.com/tutor-sicurezza/dlgs-81-08-testo-unico) — D.Lgs 81/08 structured by Title + key articles index
- [haccp-italia-normativa-regionale](https://github.com/tutor-sicurezza/haccp-italia-normativa-regionale) — HACCP regional regulations (20 Italian regions)
- [verifiche-periodiche-inail-attrezzature](https://github.com/tutor-sicurezza/verifiche-periodiche-inail-attrezzature) — Equipment subject to INAIL periodic verification
- [accordi-stato-regioni-sicurezza-lavoro](https://github.com/tutor-sicurezza/accordi-stato-regioni-sicurezza-lavoro) — Stato-Regioni training agreements

**Libraries / tools**
- [scadenze-formazione-calculator](https://github.com/tutor-sicurezza/scadenze-formazione-calculator) — Training renewal schedule calculator
- [next-seo-italian-helpers](https://github.com/tutor-sicurezza/next-seo-italian-helpers) — Next.js SEO helpers for Italian B2B
- [mcp-italian-workplace-safety](https://github.com/tutor-sicurezza/mcp-italian-workplace-safety) — MCP server for Claude Desktop / Cursor / Cline

**Online services**
- [Public REST API + OpenAPI 3.1 + DCAT-AP-IT](https://123formazione.com/api/public/docs) — Free open data API
- [Live documentation site (GitHub Pages)](https://tutor-sicurezza.github.io/accordi-stato-regioni-sicurezza-lavoro/) — Accordi Stato-Regioni

All resources are MIT or CC-BY licensed and maintained as production-quality open data.

## Licenza

Doppia licenza:

- **Codice** (`index.js`, `index.d.ts`, `package.json`): [MIT](./LICENSE).
- **Testi del glossario** (`data/glossario.json`): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.it). Puoi riutilizzarli anche in progetti commerciali a patto di attribuire la fonte e ridistribuire eventuali opere derivate con la stessa licenza.

Attribuzione consigliata: *"Glossario D.Lgs 81/08 — tutor-sicurezza (github.com/tutor-sicurezza/dlgs-81-08-glossario)"*.

## Contributing

PR benvenute per:
- aggiungere voci mancanti (es. nuove figure introdotte da accordi recenti);
- aggiornare riferimenti normativi obsoleti;
- migliorare le definizioni per chiarezza e correttezza tecnica.

Le PR vanno modificate sui file sorgente TS del progetto madre? **No**: questo repo è la **fonte primaria** del dataset, modifica direttamente `data/glossario.json` e aggiorna la voce in modo consistente.

## English summary

`dlgs-81-08-glossario` is a JSON glossary of 218 key terms from the Italian Legislative Decree 81/2008 (Workplace Safety Code), grouped into Figure, Documenti, Normativa, Rischi and Concetti. Each entry includes a one-line definition, deep-dive paragraphs and cross-references — suitable for legal-tech chatbots, HSE portals, and educational apps.

## Disclaimer

Le definizioni sono curate con riferimento alla normativa vigente ma non sostituiscono il testo di legge né una consulenza professionale.
