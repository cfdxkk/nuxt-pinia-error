export default defineNuxtRouteMiddleware(async (to, from) => {
	try {
		await test();
	} catch (error) {
		console.error("ERROR", error);
	}
});
