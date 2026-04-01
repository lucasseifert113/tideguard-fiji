TideGuard rebuild

1. Replace your project files with the files in this package.
2. Make sure these images are in your project's public folder:
   - public/tideguard-logo.jpg
   - public/fiji-hero.jpg
   - public/fiji-coast.jpg
   - public/mangroves.jpg
3. Install:
   npm install leaflet react-leaflet
   npm install -D @types/leaflet
4. Restart:
   Remove-Item -Recurse -Force .next
   npm run dev

This build uses plain CSS only.
No Tailwind utilities are required.
