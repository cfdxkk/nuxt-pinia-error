import { addImports, createResolver, defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
	async setup(_options, nuxt) {
		const { resolve } = createResolver(import.meta.url);

		const testModule = resolve("testModule");
		addImports({ name: "test", as: "test", from: testModule });
	}
})
