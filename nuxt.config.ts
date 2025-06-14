import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    resolve(__dirname, 'modules/test/testModuleIndex.ts'),
		["@pinia/nuxt", {
			autoImports: ["defineStore", "storeToRefs"],
		}],
  ],
	imports: {
		dirs: [
			"components",
			"utils",
			"classes",
			"stores",
		],
	},
})