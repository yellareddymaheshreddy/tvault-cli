![npm version](https://img.shields.io/npm/v/tvault-cli)
![npm downloads](https://img.shields.io/npm/dm/tvault-cli)
![license](https://img.shields.io/npm/l/tvault-cli)
![GitHub Repo stars](https://img.shields.io/github/stars/yellareddymaheshreddy/tvault-cli)

# tvault-cli

A lightweight command-line tool to shorten URLs, store text snippets, and retrieve them using the TVault API. Built with TypeScript, Node.js, and Meow.

## Features

- Shorten URLs (tvault shorten <url>)
- Store text with auto/custom keys (tvault store "text")
- Retrieve stored text/URLs (tvault get <key>)
- Open shortened URLs in your browser (tvault open <key>)

## Installation
```
npm i -g tvault-cli
```

## Usage
```
tvault <command> [options]
```

| Command         | Description                   |
| --------------- | ----------------------------- |
| `shorten <url>` | Shorten a URL                 |
| `store <text>`  | Store text under a key        |
| `get <key>`     | Retrieve stored text/URL      |
| `open <key>`    | Open shortened URL in browser |

| Option      | Description           |
| ----------- | --------------------- |
| `--key, -k` | Custom key (optional) |

## Examples
```
tvault shorten https://google.com
tvault shorten https://github.com -k gh
tvault store "hello world"
tvault store "notes here" --key note1
tvault get note1
tvault open gh

```

## License
MIT