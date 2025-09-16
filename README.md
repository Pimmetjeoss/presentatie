# Presentatie - Interactive AI & Technology Showcase

Een moderne, interactieve presentatie-applicatie gebouwd met Next.js 15, featuring geavanceerde AI-technologieën, MCP-integratie en dynamische UI-componenten.

## 🚀 Hoofdfuncties

### 🧠 AI & LLM Sectie
- **Interactive Scrolling Story**: Dynamische storytelling over Large Language Models
- **Text Generation Effects**: Real-time typing animaties en visuele effecten
- **Modern UI Components**: Custom designed componenten voor AI-content

### 🔗 MCP (Model Context Protocol) Integratie
- **MCP Server Setup**: Configuratie voor Claude Code integratie
- **Interactive Scroll Components**: Smooth scrolling met content reveals
- **Agent Commands**: Custom agents voor verschillende taken

### 🏷️ Keywords & Technology
- **Interactive Card System**: Scroll-based kaart animaties
- **Technology Showcase**: Overzicht van gebruikte technologieën
- **Responsive Design**: Optimaal op alle devices

### 📅 Agenda Sectie  
- **Dynamic Frame Layout**: Flexibele layout componenten
- **Background Path Animations**: Animaties voor visuele appeal
- **Interactive Elements**: Klikbare en hoverable componenten

### 🔮 Toekomst Visie
- **Future Technology Concepts**: Showcase van toekomstige technologieën
- **Dynamic Layouts**: Flexibele, responsive presentatie layouts

### 🤖 AI Coding Showcase
- **Container Scroll Animation**: Geavanceerde scroll-based animaties
- **Zoom Parallax Effects**: Dynamische zoom en parallax effecten
- **Interactive Demonstrations**: Live voorbeelden van AI coding capabilities
- **Modern Animation Framework**: GSAP en Framer Motion integratie

### 🍌 Nano Banana Timeline (Hoogtepunt!)
- **Interactive Timeline**: 5 timeline entries (Test, mijzelf, Stefan, Sarah, René)
- **Clickable Image Overlays**: Klik op de derde afbeelding voor een full-size overlay
- **Smooth Animations**: Hover effecten en transition animaties  
- **Responsive Grid System**: Perfect op desktop en mobile
- **Custom Branding**: Nano Banana themed assets en styling

## 🎨 Interactive Features

- **Clickable Overlays**: Elke timeline entry heeft clickable afbeeldingen
- **Smooth Transitions**: Framer Motion animaties voor vloeiende UX
- **Responsive Design**: Optimaal op alle schermgroottes
- **TypeScript Support**: Volledig getypeerde codebase
- **Modern UI/UX**: Shadcn/ui componenten met custom styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 met React 19
- **Styling**: Tailwind CSS 4
- **Animations**: 
  - Framer Motion
  - GSAP
- **UI Components**: 
  - shadcn/ui (Button, Card, etc.)
  - Custom Timeline Component
  - Interactive Grid Systems
- **AI Integration**: 
  - Claude Code MCP Integration
  - Custom Agent Commands
- **Images**: External CDN support (Aceternity assets)
- **Development**: TypeScript, ESLint

## 🚦 Aan de slag

### Vereisten

- Node.js (versie 18 of hoger)
- npm, yarn, pnpm, of bun

### Installatie

1. Clone de repository:
```bash
git clone https://github.com/Pimmetjeoss/presentatie.git
cd presentatie
```

2. Installeer dependencies:
```bash
npm install
```

3. Start de development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📍 Navigatie

De presentatie bevat de volgende secties:

- **`/`** - Homepage met introductie
- **`/llm`** - Large Language Models showcase
- **`/mcp`** - Model Context Protocol integratie
- **`/Keywords`** - Technology keywords en begrippen
- **`/agenda`** - Presentatie agenda
- **`/toekomst`** - Toekomst visie
- **`/ai-coding`** - **🤖 AI Coding Showcase met geavanceerde animaties**
- **`/nano_banana`** - **⭐ Interactive Timeline (Hoofdfeature!)**

## 🎯 Nano Banana Timeline Details

De hoogtepunt van deze presentatie is de interactieve Nano Banana timeline:

### Features:
- **5 Timeline Entries**: Test, mijzelf, Stefan, Sarah, René
- **Interactive Images**: Elke entry heeft 3 afbeeldingen in een responsive grid
- **Clickable Overlays**: Klik op de derde afbeelding voor een full-screen overlay
- **Smooth Animations**: Hover effecten en transition animaties
- **Custom Branding**: Nano Banana logo en themed design
- **Mobile Responsive**: Werkt perfect op alle devices

### Hoe te gebruiken:
1. Ga naar `/nano_banana`
2. Scroll door de timeline entries
3. Klik op de derde afbeelding van elke entry
4. Geniet van de overlay met extra content
5. Klik buiten de overlay of op de X-knop om te sluiten

## 📁 Projectstructuur

```
src/
├── app/
│   ├── llm/                    # LLM showcase
│   ├── mcp/                    # MCP integratie  
│   ├── Keywords/               # Technology keywords
│   ├── agenda/                 # Presentatie agenda
│   ├── toekomst/              # Toekomst visie
│   ├── ai-coding/             # 🤖 AI Coding Showcase
│   │   ├── components/
│   │   │   ├── container-scroll-animation.tsx
│   │   │   └── zoom-parallax.tsx
│   │   └── page.tsx           # AI coding demo page
│   └── nano_banana/           # ⭐ Interactive Timeline
│       ├── components/
│       │   └── timeline.tsx   # Main timeline component
│       └── page.tsx           # Timeline page with overlays
├── components/
│   └── ui/                    # Shadcn/ui components
├── lib/                       # Utility functions
public/
├── nano_banana.jpg            # Nano Banana branding
├── nano_banana_white.webp     # Alternative branding
├── contiweb_gebouw.jpg        # Contiweb assets
├── contiweb_machine.png       # Machine imagery
├── van_halen_concert.jpg      # Concert assets
└── ...                        # Other presentation assets
```

## 🎨 Custom Components

- **Timeline**: Framer Motion powered timeline met scroll animations
- **ImageGrid**: Interactive grid met overlay functionaliteit  
- **ScrollCard**: Animating cards voor Keywords sectie
- **DynamicFrameLayout**: Flexible layout system
- **InteractiveScrollingStory**: Dynamic storytelling component

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm run start` - Start productie server  
- `npm run lint` - Code quality check

## 🌐 External Integration

- **Aceternity CDN**: Voor high-quality template afbeeldingen
- **Claude Code**: MCP server integratie
- **Custom Assets**: Nano Banana branding en custom graphics

## 🚀 Deployment

### Vercel (Aanbevolen)
Deploy direct via [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Configuratie
- External images zijn geconfigureerd voor Aceternity CDN
- MCP integratie werkt out-of-the-box
- Alle assets zijn geoptimaliseerd voor productie

## 🎬 Demo

Bekijk de live demo op: [Live Link hier invullen na deployment]

**Hoogtepunten om te proberen:**
1. `/nano_banana` - De interactieve timeline
2. `/ai-coding` - Geavanceerde scroll animaties en zoom effecten
3. `/llm` - Interactive scrolling story  
4. `/mcp` - MCP integratie showcase

## 🤖 AI Integration

Deze presentatie maakt gebruik van:
- **Claude Code**: Voor development en MCP integratie
- **Custom Agents**: Voor verschillende taken via .claude/commands/
- **MCP Protocol**: Voor seamless AI tool integration

## 📚 Meer Informatie

- [Next.js Documentatie](https://nextjs.org/docs)
- [Framer Motion Documentatie](https://motion.dev/)  
- [Tailwind CSS Documentatie](https://tailwindcss.com/docs)
- [Claude Code Documentatie](https://docs.anthropic.com/claude/docs)
- [MCP Protocol](https://modelcontextprotocol.io)

## 🤝 Contributing

Bijdragen zijn welkom! Voel je vrij om een issue te openen of een pull request in te dienen.

## 📄 License

Dit project is gelicenseerd onder de MIT License.

---

**🤖 Generated with [Claude Code](https://claude.ai/code)**

*Deze presentatie toont de kracht van moderne web technologieën gecombineerd met AI-integratie voor een truly interactive experience.*