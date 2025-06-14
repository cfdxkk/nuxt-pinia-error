export const getUserInfo = async (): Promise<string> => {
	const USER_NAME = 'foo'

	const userInfoStore = useUserInfoStore();
	userInfoStore.userName = USER_NAME
	return USER_NAME
}
