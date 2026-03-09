# Maharlikanism — Hugo Website

A multi-language Hugo website for the Maharlikanism advocacy with dark/light mode, blue/gold theme, Tailwind CSS, PostCSS, and Lucide icons.

## Requirements

- Hugo Extended v0.123+ (`brew install hugo` or [Hugo releases](https://github.com/gohugoio/hugo/releases))
- Node.js 18+ and npm
<!-- {{ $css := resources.Get "css/main.css" | resources.PostCSS (dict "config" "postcss.config.js") }} -->


## Setup

```bash
# 1. Install dependencies
npm install

# 2. Development server
npm start
# or
hugo server -D

# 3. Production build
npm run build
# or
hugo --minify
```

## Project Structure

```
maharlikanism/
├── hugo.toml              # Site config, multilingual, params
├── tailwind.config.js     # Tailwind with custom blue/gold theme
├── postcss.config.js      # PostCSS pipeline
├── package.json
├── assets/
│   └── css/main.css       # Tailwind + custom styles
├── layouts/
│   ├── index.html         # Homepage template
│   ├── _default/
│   │   ├── baseof.html    # Base layout
│   │   ├── list.html      # Section/list pages
│   │   ├── single.html    # Article pages
│   │   └── index.json     # Search index
│   └── partials/
│       ├── head.html
│       ├── navbar.html    # With dark mode, search, music, lang
│       ├── footer.html
│       ├── scripts.html   # All JavaScript
│       ├── breadcrumb.html
│       ├── article-card.html  # 3 card types
│       ├── icons/
│       │   └── lang-select.html
│       └── sections/
│           ├── hero-video.html
│           ├── quote.html
│           ├── identity-video.html
│           ├── action-steps.html
│           ├── superphysics.html
│           ├── book.html
│           ├── subscribe.html
│           └── contact.html
├── content/
│   ├── en/  (English)
│   ├── tl/  (Filipino/Tagalog)
│   └── cb/  (Cebuano/Bisaya)
│       ├── advocacy/
│       ├── culture/
│       ├── governance/
│       ├── history/
│       ├── infrastructure/
│       ├── laws/
│       │   └── epira/
│       │       └── chapter-01/
│       │           └── section-01.md  ← deeply nested example
│       ├── metaphysics/
│       ├── politicians/
│       └── writers/
├── static/
│   ├── song.mp4           # Hero video (provide yours)
│   ├── maharlika.mp4      # Identity video (provide yours)
│   ├── music.mp3          # Background music (provide yours)
│   ├── photos/
│   │   ├── meta/anito.jpg
│   │   ├── social/lawmaker.jpg
│   │   ├── social/grad.jpg
│   │   └── econ/freight.jpg
│   ├── icons/
│   │   ├── spss.png
│   │   ├── specon.png
│   │   ├── heart.png
│   │   └── favicon.png
│   └── books/
│       └── towards.jpg
└── i18n/
    ├── en.yaml
    ├── tl.yaml
    └── cb.yaml
```

## Features

- ✅ **Dark/Light Mode** — CSS variables, class-based toggle, localStorage persistence
- ✅ **Blue & Gold Theme** — Custom Tailwind palette (royal blues + warm golds)
- ✅ **3 Languages** — English (en), Filipino (tl), Cebuano (cb)
- ✅ **Tailwind CSS + PostCSS** — Full pipeline with autoprefixer, cssnano
- ✅ **Lucide Icons** — Via CDN, auto-initialized
- ✅ **8 Landing Page Sections** — Hero video, quote, identity video, action steps, superphysics, book, subscribe, contact
- ✅ **Search** — Client-side search on title + description via Hugo JSON index
- ✅ **Background Music** — Toggle with visual indicator bars
- ✅ **Navbar** — Fixed, glassmorphic, with all controls
- ✅ **3 Article Card Types** — With image, with avatar, text only
- ✅ **Deeply Nested Routes** — e.g. `/laws/epira/chapter-01/section-01/`
- ✅ **Breadcrumbs** — Automatic from page ancestors
- ✅ **ToC** — Auto table of contents in article sidebar
- ✅ **Prev/Next Navigation** — Between articles in a section
- ✅ **Scroll to Top** — Appears on scroll
- ✅ **Google Analytics** — Configure in hugo.toml
- ✅ **Google AdSense** — Configure in hugo.toml
- ✅ **Tawk.to** — Configure in hugo.toml

## Article Front Matter

```yaml
---
title: "Article Title"
date: 2024-11-01
description: "Short description for SEO and cards"
image: /photos/article.jpg    # → uses image card type
# OR
icon: "Author Name"           # → uses avatar card type
# OR neither                  # → uses text-only card type
c: "firebrick"                # CSS color for card background
heading: "Chapter 1"         # Sub-heading / section label
weight: 1                     # Order in list
tags: ["tag1", "tag2"]
---
```

## Configuration (hugo.toml)

Update these in `hugo.toml`:
- `googleAnalytics` — Your GA4 measurement ID
- `googleAdsense` — Your AdSense publisher ID  
- `tawkTo` — Your Tawk.to property ID

## Static Files to Add

Place these in `/static/`:
- `song.mp4` — Hero section autoplay video
- `maharlika.mp4` — Identity section autoplay video
- `music.mp3` — Background music
- Photos referenced in hugo.toml actionCards and superCards
- Book cover image


BLUE #1e4aaa;


  {{ if $bgStyle }}
  style="{{ $bgStyle | safeCSS }}"
  {{ end }}


c: "#1e4aaa"