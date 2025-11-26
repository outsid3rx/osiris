# prisma-generator-zod-easy

This generator will convert prisma models to zod-schemas for matching model, create and update operations

## Example

| Input                                                                                                                               | Output                                                                                                                                |
|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| ![Input demo](https://raw.githubusercontent.com/outsid3rx/osiris/refs/heads/main/packages/prisma-generator-zod-easy/docs/input.png) | ![Output demo](https://raw.githubusercontent.com/outsid3rx/osiris/refs/heads/main/packages/prisma-generator-zod-easy/docs/output.png) |

## Installation

Install with your package manager

```shell
yarn add -D prisma-generator-zod-easy
```

## Usage

Add generator block to your `schema.prisma` and run `prisma generate`

```prisma
generator zod {
  provider = "prisma-generator-zod-easy"
  output   = "../src/shared/zod"
}
```