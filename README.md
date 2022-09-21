# wardrobe

A personal React ⚛️components library to bootstrap ideas quickly. This set of components are very constrained and not
designed to be omnipotent. If you can't find what you want, you're better off using another components library or
implementing yours.

- 🌗 Dark mode inside
- 🌳 Tree-shakeable

## Installation + Usage

Install with

```sh
yarn add @blackmann/wardrobe
npm install @blackmann/wardrobe
```

Enjoy?

```javascript
// Add at top level
import '@blackmann/wardrobe/dist/styles/index.css'

import { Button } from '@blackmann/wardrobe'

function Demo() {
  return <Button onClick={() => console.log('Hah!')}>Click me</Button>
}

```

## Brand (colors, font, sizes, etc)

A lot of brand values can be overridden using css variables. Reference [`src/index.css`](src/index.css) for the possible
list of
variables. _You may/should only be interested in color and font_!

## Components

Stories for components are hosted here: https://wardrobe-components.vercel.app/

## Why not use MUI, React Bootstrap, Base web, etc.

Open source libraries (especially frontend libraries) have now turned into products. Instead of solving a simple
problem, they solve everybody's problem - leading to bloat. I'm a fan of small bundle size and straightforward APIs.
I want to spend more time writing code than referencing docs of a web component library.

The original idea is to develop faster with these libraries, but I find myself developing way slower.
