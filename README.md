# Punjab Land Area Converter

A Progressive Web App (PWA) for converting between land area units commonly used in Punjab and India. Works offline!

## 🌾 Features

- **Area Converter**: Convert between Square Feet, Square Meters, Acres, Kanal, Marla, and Sarsai
- **Rakba Converter**: Convert between Rakba format (kanal-marla-sarsai) and total Sarsai
- **Offline Support**: Works without internet connection (PWA)
- **Mobile Friendly**: Responsive design works on all devices
- **No Dependencies**: Pure vanilla JavaScript, no frameworks required

## 📐 Supported Units

| Unit | Description |
|------|-------------|
| Square Feet | Standard imperial unit |
| Square Meters | Standard metric unit |
| Acres | 1 acre = 8 kanal |
| ਕਨਾਲ (Kanal) | 1 kanal = 20 marla |
| ਮਰਲਾ (Marla) | 1 marla = 9 sarsai = 272.25 sq ft |
| ਸਰਸਾਈ (Sarsai) | 1 sarsai = 30.25 sq ft |

## 🏗️ Project Structure

```
punjab-land-area-converter/
├── index.html          # Main page with both converters
├── rakba.html          # Dedicated Rakba converter page
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline support
├── css/
│   └── styles.css     # Custom styles
├── js/
│   ├── areaConverter.js    # Area conversion logic
│   └── rakbaConverter.js   # Rakba conversion logic
├── icons/             # PWA icons (add your own)
└── html/              # Legacy files (deprecated)
```

## 🚀 Getting Started

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/har-singh/web-punjab-land-area-converter.git
   cd web-punjab-land-area-converter
   ```

2. Serve the files using any static server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open `http://localhost:8000` in your browser

### Installing as PWA

1. Open the website in Chrome/Edge/Safari
2. Click the "Install" prompt or use browser menu
3. The app will be added to your home screen

## 📊 Conversion Reference

### Area Units
- 1 Acre = 8 Kanal = 160 Marla = 1440 Sarsai
- 1 Kanal = 20 Marla = 180 Sarsai
- 1 Marla = 9 Sarsai = 272.25 sq ft
- 1 Sarsai = 30.25 sq ft

### Rakba Format
Rakba is written as: `kanal-marla-sarsai`

Example: `13-5-4` means 13 kanal, 5 marla, 4 sarsai

**Formula**: Total Sarsai = (Kanal × 180) + (Marla × 9) + Sarsai

## 🛠️ Technology Stack

- HTML5
- CSS3 with Bootstrap 5.3.2
- Vanilla JavaScript (ES6+)
- Service Workers (PWA)

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11.1+
- Edge 79+

## 📄 License

MIT License - feel free to use and modify.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ for Punjab farmers and land owners
