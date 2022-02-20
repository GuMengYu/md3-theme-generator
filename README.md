## MD3 Theme Generator

<span>A md3 dynamic color generation tool, derived from reverse engineering of [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/#/dynamic) </span>

Modified from [KalilDev/material_theme_reverse](https://github.com/KalilDev/material_theme_reverse)

### Install
```
npm install md3-theme-generator
```

### Usage

```javascript
import { generatePaletteFromURL } from 'md3-theme-generator'

const imageUrl = 'https://files.catbox.moe/g2lwbi.jpg';

const palette = await generatePaletteFromURL(imageUrl)
console.log(palette)

const theme = palette.save()
console.log(theme)
```




