import { access, readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const distDir = path.join(process.cwd(), 'dist')
const assetsDir = path.join(distDir, 'assets')
const indexPath = path.join(distDir, 'index.html')

async function pathExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

function collectAssetReferences(html) {
  return [...html.matchAll(/\b(?:href|src)="\.\/assets\/([^"]+)"/g)].map(
    ([, fileName]) => fileName,
  )
}

async function assertFile(filePath, label) {
  if (!(await pathExists(filePath))) {
    throw new Error(`${label} is missing at ${filePath}`)
  }

  const fileStat = await stat(filePath)

  if (!fileStat.isFile() || fileStat.size === 0) {
    throw new Error(`${label} must be a non-empty file`)
  }
}

async function verifyStaticBuild() {
  await assertFile(indexPath, 'dist/index.html')

  const html = await readFile(indexPath, 'utf8')

  if (!html.includes('<div id="root"></div>')) {
    throw new Error('dist/index.html is missing the React root element')
  }

  if (html.includes('"/assets/')) {
    throw new Error(
      'dist/index.html contains root-relative asset paths; expected ./assets/ paths for portable static hosting',
    )
  }

  const assetReferences = collectAssetReferences(html)

  if (assetReferences.length === 0) {
    throw new Error('dist/index.html does not reference any built assets')
  }

  const assetFiles = await readdir(assetsDir)
  const hasScript = assetReferences.some((fileName) => fileName.endsWith('.js'))
  const hasStylesheet = assetReferences.some((fileName) =>
    fileName.endsWith('.css'),
  )

  if (!hasScript || !hasStylesheet) {
    throw new Error('dist/index.html must reference both JS and CSS assets')
  }

  for (const fileName of assetReferences) {
    await assertFile(path.join(assetsDir, fileName), `dist asset ${fileName}`)
  }

  process.stdout.write(
    `Static build verified: dist/index.html plus ${assetFiles.length} asset file(s).`,
  )
  process.stdout.write('\n')
}

verifyStaticBuild().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.message : error}\n`)
  process.exitCode = 1
})
