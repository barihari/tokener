# Tokener

A static design-token demo with switchable Bankrate, Capital One, and Sage Mortgage themes.

## Run locally

From the project directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Themes

Brand colors, logos, typography, spacing, and component treatments are defined as semantic tokens in `themes/themes.css`. Components use the same classes in every theme, and the switcher changes only the token values. The selected theme is stored in the browser so it persists after refresh.

Fonts are bundled in `assets/fonts`; licensing notes and available license files are documented there.

[Original Figma file](https://www.figma.com/file/yF81gk6UJP6VA8WYa8sJGl/Design-Tokens-Test?node-id=4%3A363)
