# Handsbrew Forte Website

A modern, responsive website for Handsbrew Forte Limited - a licensed money lending organization in Ibadan, Nigeria.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter, Playfair Display (via Google Fonts)
- **Icons**: Material Icons

## 📁 Project Structure

```
handsbrewforte/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/              # About page
│   ├── savings/            # Savings products page
│   ├── loans/              # Loan products page
│   ├── contact/            # Contact page
│   ├── calculator/         # Loan calculator
│   └── application/        # Application forms
│       ├── loan/
│       ├── savings/
│       └── mandate/
├── components/             # React components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── MobileMenu.tsx      # Mobile navigation menu
│   ├── WhatsAppFloat.tsx   # WhatsApp floating button
│   └── sections/           # Homepage sections
│       ├── Hero.tsx
│       ├── PartnersRegulators.tsx
│       ├── VisionMission.tsx
│       ├── ValueProposition.tsx
│       ├── ProductsHighlight.tsx
│       ├── CorporateValues.tsx
│       ├── Testimonials.tsx
│       └── FAQ.tsx
├── public/                 # Static assets
│   ├── HB logo white.png
│   ├── HB logo color.png
│   ├── hero image.png
│   ├── favicon.svg
│   └── icons8-*.svg        # Social media icons
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Move assets to public folder:**
   
   Copy all image files and icons from the root directory to the `public/` folder:
   - `HB logo white.png`
   - `HB logo color.png`
   - `hero image.png`
   - `favicon.svg`
   - `icons8-*.svg` (all social media icons)

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode support
- ✅ SEO optimized with metadata
- ✅ Fast page loads with Next.js optimization
- ✅ Accessible components
- ✅ Modern UI with Tailwind CSS
- ✅ Interactive forms and calculator
- ✅ Smooth animations and transitions

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#0f172a',      // Deep Navy
  secondary: '#881218',    // Dark Red accent
  // ...
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. You can change them by modifying the Google Fonts imports.

## 📄 Pages

- **Home** (`/`) - Main landing page with all sections
- **About** (`/about`) - Company information and values
- **Savings** (`/savings`) - All savings products
- **Loans** (`/loans`) - All loan products
- **Contact** (`/contact`) - Contact form and information
- **Calculator** (`/calculator`) - Loan repayment calculator
- **Applications** (`/application/*`) - Application forms

## 🔧 Development

### Adding New Pages

Create a new folder in `app/` with a `page.tsx` file:

```typescript
// app/new-page/page.tsx
export const metadata = {
  title: 'New Page - Handsbrew Forte',
}

export default function NewPage() {
  return <div>Content</div>
}
```

### Adding New Components

Create components in `components/` directory:

```typescript
// components/NewComponent.tsx
export default function NewComponent() {
  return <div>Component content</div>
}
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📞 Support

For questions or issues, contact:
- Email: info@handsbrew.com.ng
- Phone: +234 810 554 8192

## 📄 License

© 2026 Handsbrew Forte Limited. All Rights Reserved.
