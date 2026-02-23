# 🌙 Bebê Noites Tranquilas - Landing Page

Landing page desenvolvida para o método de consultoria de sono infantil "Bebê Noites Tranquilas" da Rafaela Amaral.

## 🎨 Design

Cores do projeto:
- **Primary**: `#37716F` (Verde escuro)
- **Primary Light**: `#72C0BE` (Verde médio)
- **Primary Lighter**: `#9DB7B7` (Verde claro)
- **Accent**: `#7C3AED` (Roxo/Violet)

## 🚀 Tecnologias

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## 📦 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/               # Componentes do shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── accordion.tsx
│   ├── sections/         # Seções da landing page
│   │   ├── HeroSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ForWhoSection.tsx
│   │   ├── WhyItWorksSection.tsx
│   │   ├── WhatYouGetSection.tsx
│   │   ├── SupportSection.tsx
│   │   ├── BioSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FinalCTASection.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts          # Utilitários
├── App.tsx               # Componente principal
└── main.tsx              # Entry point
```

## 🎯 Seções da Landing Page

1. **Hero** - Headline principal com CTA
2. **Depoimentos** - Testemunhos de influenciadoras
3. **Sobre** - Apresentação do problema e da Rafaela
4. **Para Quem Serve** - Grid com público-alvo
5. **Por Que Funciona** - Benefícios do método
6. **Conteúdo** - O que está incluído no curso
7. **Suporte 24h** - Diferencial exclusivo
8. **Bio da Rafaela** - Credenciais e história
9. **Preço** - Plano com garantia de 7 dias
10. **FAQ** - Perguntas frequentes com Accordion
11. **CTA Final** - Última chamada para ação
12. **Footer** - Links e redes sociais

## 🛠️ Como Rodar o Projeto

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build

Para criar a versão de produção:

```bash
npm run build
```

### Preview

Para visualizar a build de produção:

```bash
npm run preview
```

## 📱 Features Implementadas

- ✅ Design mobile-first e responsivo
- ✅ Alta escaneabilidade com hierarquia visual clara
- ✅ CTAs contrastantes em roxo/violet
- ✅ Accordion para FAQ (shadcn/ui)
- ✅ Componentes reutilizáveis
- ✅ SEO otimizado com meta tags
- ✅ Cores da marca integradas no tema
- ✅ Animações suaves

## 🎨 Customização

### Cores

As cores podem ser ajustadas em `tailwind.config.js`:

```javascript
primary: {
  DEFAULT: "#37716F",
  light: "#72C0BE",
  lighter: "#9DB7B7",
}
```

### Componentes

Todos os componentes são modulares e podem ser facilmente editados em suas respectivas pastas.

## 📝 FAQ Content

Todas as 9 perguntas frequentes fornecidas foram implementadas no componente `FAQSection.tsx` usando o Accordion do shadcn/ui.

## 📄 Licença

© 2024 Rafaela Amaral. Todos os direitos reservados.

---

Desenvolvido com ❤️ para transformar noites de bebês e famílias.
