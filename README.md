# Tokener

A static design-token demo with switchable Bankrate, Capital One, and Sage Mortgage themes.

## Run locally

From the project directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Themes

Brand colors, logos, and typography are defined in `themes/themes.css`. The switcher stores the selected theme in the browser so it persists after refresh.

Open-source fonts are bundled in `assets/fonts`, with each license stored beside its font family.

[Original Figma file](https://www.figma.com/file/yF81gk6UJP6VA8WYa8sJGl/Design-Tokens-Test?node-id=4%3A363)
