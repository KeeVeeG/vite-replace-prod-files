import type { PluginOption } from 'vite'
import path from 'path'

export default (files: string | string[]): PluginOption => {
  if (!Array.isArray(files)) {
    files = [files]
  }
  const paths = files.map(file => path.join(__dirname, file))
  return {
    name: 'vite-replace-prod-files',
    enforce: 'pre',
    async resolveId(
      source: string,
      importer: string | undefined,
      options: {
        assertions: Record<string, string>
        custom?: { [plugin: string]: any }
        isEntry: boolean
      }
    ): Promise<null | { id: string }> {
      const resolved = await this.resolve(source, importer, {
        ...options,
        skipSelf: true,
      })
      const target = paths.find(file => file === resolved?.id)
      if (target) {
        const parts = target.split('.')
        parts.splice(-1, 0, 'prod')
        return { id: parts.join('.') }
      } else {
        return null
      }
    },
  }
}
