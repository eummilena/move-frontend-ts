import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const inputDir = path.resolve('src/assets/images')
const inputFile = path.join(inputDir, 'wallpaper-house.webp')
const outDir = path.join(inputDir, 'generated')

const sizes = [480, 768, 1200, 2000]
const formats = [
  { ext: 'avif', method: (img, size) => img.resize({ width: size }).avif({ quality: 60 }) },
  { ext: 'webp', method: (img, size) => img.resize({ width: size }).webp({ quality: 75 }) }
]

async function ensureOutDir() {
  await fs.mkdir(outDir, { recursive: true })
}

async function fileExists(file) {
  try {
    await fs.access(file)
    return true
  } catch {
    return false
  }
}

async function generate() {
  if (!(await fileExists(inputFile))) {
    console.error('Arquivo de entrada não encontrado:', inputFile)
    process.exit(1)
  }

  await ensureOutDir()

  for (const size of sizes) {
    for (const fmt of formats) {
      const outName = `wallpaper-house-${size}.${fmt.ext}`
      const outPath = path.join(outDir, outName)
      console.log(`Gerando ${outName}...`)
      const img = sharp(inputFile)
      await fmt.method(img, size).toFile(outPath)
    }
  }

  // gerar um arquivo manifest simples (opcional) para referência
  const manifest = sizes.reduce((acc, size) => {
    acc[size] = {
      avif: `generated/wallpaper-house-${size}.avif`,
      webp: `generated/wallpaper-house-${size}.webp`
    }
    return acc
  }, {})

  await fs.writeFile(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2))

  console.log('Geração finalizada. Arquivos em:', outDir)
}

generate().catch(err => {
  console.error(err)
  process.exit(1)
})