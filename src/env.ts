import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		YUMEMI_CODECHECK_API_BASE_URL: z.string().url(),
		YUMEMI_CODECHECK_API_KEY: z.string().min(1),
	},
	runtimeEnv: {
		YUMEMI_CODECHECK_API_BASE_URL: process.env.YUMEMI_CODECHECK_API_BASE_URL,
		YUMEMI_CODECHECK_API_KEY: process.env.YUMEMI_CODECHECK_API_KEY,
	},
});
