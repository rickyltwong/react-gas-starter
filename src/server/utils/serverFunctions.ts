import { GASClient } from "gas-client";
import type * as publicServerFunctions from "../services";

const { serverFunctions, scriptHostFunctions } = new GASClient<
	typeof publicServerFunctions
>({
	// this is necessary for local development but will be ignored in production
	allowedDevelopmentDomains: (origin) =>
		/https:\/\/.*\.googleusercontent\.com$/.test(origin),
});

export { serverFunctions, scriptHostFunctions };
