const fs = require('fs');
const path = require('path');

const componentsDir = 'c:\\Users\\ACER\\Desktop\\novaorganizasyon\\src\\components';

const replacements = [
  { from: /bg-\[\#1E050B\]/g, to: 'bg-brand-darkest' },
  { from: /bg-\[\#2E0A11\]/g, to: 'bg-brand-deeper' },
  { from: /bg-\[\#4A0F1A\]/g, to: 'bg-brand-dark' },
  { from: /bg-\[\#6B1525\]/g, to: 'bg-brand-base' },
  { from: /bg-\[\#8A1E32\]/g, to: 'bg-brand-light' },
  { from: /text-\[\#2E0A11\]/g, to: 'text-brand-deeper' },
  { from: /text-\[\#4A0F1A\]/g, to: 'text-brand-dark' },
  { from: /text-\[\#6B1525\]/g, to: 'text-brand-base' },
  { from: /text-\[\#D4AF37\]/g, to: 'text-gold' },
  { from: /bg-\[\#D4AF37\]/g, to: 'bg-gold' },
  { from: /border-\[\#D4AF37\]/g, to: 'border-gold' },
  { from: /bg-\[\#FAF8F5\]/g, to: 'bg-surface-warm' },
  
  { from: /from-\[\#2E0A11\]/g, to: 'from-brand-deeper' },
  { from: /to-\[\#4A0F1A\]/g, to: 'to-brand-dark' },
  { from: /from-\[\#6B1525\]/g, to: 'from-brand-base' },
  { from: /to-\[\#2E0A11\]/g, to: 'to-brand-deeper' },
  { from: /via-\[\#2E0A11\]/g, to: 'via-brand-deeper' },
  { from: /from-\[\#D4AF37\]/g, to: 'from-gold' },
  { from: /to-\[\#B8952E\]/g, to: 'to-gold-dark' },
  { from: /to-\[\#E8C84A\]/g, to: 'to-gold-light' },
  { from: /from-\[\#1E050B\]/g, to: 'from-brand-darkest' },
  { from: /via-\[\#4A0F1A\]/g, to: 'via-brand-dark' },
  { from: /from-\[\#8A1E32\]/g, to: 'from-brand-light' },
  
  { from: /bg-\[\#6B1525\]\/10/g, to: 'bg-brand-base/10' },
  { from: /hover:border-\[\#D4AF37\]\/40/g, to: 'hover:border-gold/40' },
  { from: /focus:border-\[\#D4AF37\]/g, to: 'focus:border-gold' },
  { from: /hover:shadow-\[\#6B1525\]\/10/g, to: 'hover:shadow-brand-base/10' },
  { from: /shadow-\[\#D4AF37\]\/20/g, to: 'shadow-gold/20' },
  { from: /ring-\[\#D4AF37\]\/50/g, to: 'ring-gold/50' },

  { from: /bg-\[\#1E050B\]\/(\d+)/g, to: 'bg-brand-darkest/$1' },
  { from: /bg-\[\#2E0A11\]\/(\d+)/g, to: 'bg-brand-deeper/$1' },
  { from: /bg-\[\#4A0F1A\]\/(\d+)/g, to: 'bg-brand-dark/$1' },
  { from: /bg-\[\#6B1525\]\/(\d+)/g, to: 'bg-brand-base/$1' },
  { from: /bg-\[\#8A1E32\]\/(\d+)/g, to: 'bg-brand-light/$1' },
  { from: /text-\[\#2E0A11\]\/(\d+)/g, to: 'text-brand-deeper/$1' },
  { from: /text-\[\#4A0F1A\]\/(\d+)/g, to: 'text-brand-dark/$1' },
  { from: /text-\[\#6B1525\]\/(\d+)/g, to: 'text-brand-base/$1' },
  { from: /text-\[\#D4AF37\]\/(\d+)/g, to: 'text-gold/$1' },
  { from: /bg-\[\#D4AF37\]\/(\d+)/g, to: 'bg-gold/$1' },
  { from: /border-\[\#D4AF37\]\/(\d+)/g, to: 'border-gold/$1' },
  { from: /bg-\[\#FAF8F5\]\/(\d+)/g, to: 'bg-surface-warm/$1' },
  { from: /shadow-\[\#D4AF37\]\/(\d+)/g, to: 'shadow-gold/$1' },
  { from: /ring-\[\#D4AF37\]\/(\d+)/g, to: 'ring-gold/$1' },
  { from: /hover:border-\[\#D4AF37\]\/(\d+)/g, to: 'hover:border-gold/$1' },
  { from: /hover:shadow-\[\#6B1525\]\/(\d+)/g, to: 'hover:shadow-brand-base/$1' },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      if (file === 'Services.tsx') {
        content = content.replace(/border border-black\/5 hover:border-\[\#D4AF37\]\/40/g, 'border border-brand-base/10 hover:border-gold/40');
      }

      if (file === 'Hero.tsx') {
        content = content.replace(/transition=\{\{ duration: \d+, repeat: Infinity, ease: "easeInOut" \}\}/g, "$& style={{ willChange: 'transform' }}");
      }
      
      if (file === 'Footer.tsx') {
        // Fix Footer.tsx links to point to #hizmetler
        // Wait, the prompt says they already point to #hizmetler: 
        // "currently col1Link1 through col1Link6 all point to #hizmetler. They should all point to #hizmetler... This is actually fine."
        // Oh so no action needed, but I should maybe check if it really is fine.
      }

      let newContent = content;
      for (const r of replacements) {
        newContent = newContent.replace(r.from, r.to);
      }
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(componentsDir);
