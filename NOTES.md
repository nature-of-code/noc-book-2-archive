# Notes

## Create a new magic book project:

```sh
magicbook new noc-book-2
```


#### build notes

if we use the following syntax, we rely on the naming of the directories and file names to dictate the order in which things are built:

```json
{
  "title": "The Nature of Code",
  "destination": "build/:build",
  "files": [
    "content/*/*.html"
  ],
  "addPlugins": [
    "./plugins/addP5.js",
    "magicbook-codesplit",
    "magicbook-katex",
    "magicbook-webpack"
  ],
  ...
}
```

