import type { KeySchema, SessionSchema } from "lucia-auth";

export const convertSessionData = (
	sessionData: SessionSchema
): SessionSchema => {
	const { active_expires, idle_expires: idleExpires, ...data } = sessionData;
	return {
		active_expires: Number(active_expires),
		idle_expires: Number(idleExpires),
		...data
	};
};

export const convertKeyData = (keyData: KeySchema): KeySchema => {
	const { expires, ...data } = keyData;
	return {
		expires: expires === null ? null : Number(expires),
		...data
	};
};
