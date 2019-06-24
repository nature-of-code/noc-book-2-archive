# Contributing and Development

## Directory Structure

* TBD: this is subject to change
```
noc-book-2
├── CONTRIBUTING.md
├── NOTES.md
├── README.md
├── node_modules
├── fonts
├── build
│   ├── build1
│   ├── build2
├── content
│   ├── 00_0_welcome
│   │   └── index.html
│   └── 00_1_titlepage
│       └── index.html
├── context
│   ├── noc_html
│   │   ├── imgs    
│   └── noc_pdf
│       ├── imgs    
├── includes
│   ├── footnotes.html
│   ├── navigation.html
│   ├── toc.html
│   └── toc_item.html
├── javascripts
│   └── scripts.js
├── layouts
│   ├── html.html
│   └── pdf.html
├── magicbook.json
├── package-lock.json
├── package.json
├── plugins
│   └── addP5.js
├── stylesheets
│   ├── _shared.scss
│   ├── html.scss
│   └── pdf.scss
└── webpack.config.js
```

* **/context**:
  * contains context specific assets for the respective builds - e.g. `imgs`, etc.