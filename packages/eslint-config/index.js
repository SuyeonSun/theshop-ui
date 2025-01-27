import node from './node/index.js'
import packageJson from './package.json'
import react from './react/index.js'
import strict from './strict/index.js'
import typescript from './typescript/index.js'

export default {
  meta: {
    name: packageJson.name,
    version: packageJson.version,
  },
  configs: {
    node,
    react,
    typescript,
    strict,
  },
}
