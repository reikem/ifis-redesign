# IFIS – Internet Flight Information Service (Rediseño NO OFICIAL)

> **⚠️ Aviso importante**  
> Este proyecto **NO es la página oficial de IFIS-DGAC Chile**. Es una **recreación/prototipo educativo** para practicar **Vite, React, Tailwind CSS y shadcn/ui**. No consume ni expone datos reales.

---
## 🚀 Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** (con diseño por *CSS variables* para light/dark)
- **shadcn/ui** + **lucide-react**
- **i18n simple con React Context** (ES, EN, PT, FR, ZH, JA)
- **ThemeProvider** (light / dark / system)
- **Twitter Cards + Open Graph** en `index.html`

---
## 📦 Requisitos

- **Node.js ≥ 18**
- **pnpm / npm / yarn** (elige tu gestor)

---

## 🛠️ Instalación

```bash
# Clonar
git clone https://github.com/tu-usuario/ifis-redesign.git
cd ifis-redesign

# Instalar deps
npm install
# o pnpm i / yarn
```

### Correr en desarrollo

```bash
npm run dev
```

### Build de producción

```bash
npm run build
npm run preview
```

### Lint & format (opcional, si lo configuraste)

```bash
npm run lint
npm run format
```

---

## 🌓 Tema (light/dark/system)

- `ThemeProvider` añade/quita la clase `.dark` al `<html>`.
- Persistencia en `localStorage`.
- Botón `ThemeToggle` usando `lucide-react`.

---
## 🤝 Contribuir

1. Haz un fork
2. Crea una rama: `git checkout -b feat/mi-feature`
3. Commit: `git commit -m "feat: agrega X"`
4. Push: `git push origin feat/mi-feature`
5. Abre un PR

---

## 📄 Licencia

MIT — Usa este código como quieras, **respetando el aviso de NO OFICIALIDAD**.

---

## 🙌 Créditos

- **DGAC Chile**: el nombre y referencia aparecen solo con fines educativos.
- **Este prototipo no reemplaza, representa ni utiliza recursos oficiales**.
