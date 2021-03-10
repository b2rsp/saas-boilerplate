import settings from "./config/vars"; //this also load the .env
import app, { server } from "./config/express";
import { connect } from "./config/mongoose";
import logger from "./utils/logger";
import Sentry from "./config/sentry";
import talkjs from "./config/talk";
import tmp from "tmp";

process.on("unhandledRejection", err => {
	try {
		// Prints "unhandledRejection woops!"
		logger.error("unhandledRejectionCaught", err);
	} catch (error) {
		console.log("we couldnt log the error ", err);
	}

	//Sentry.captureException(err);
	tmp.setGracefulCleanup();
	process.exit(1);
});
process.on("uncaughtExceptionCaught", err => {
	try {
		logger.error("uncaughtException", err);
	} catch (error) {
		console.log("we couldnt log the error ", err);
	}
	Sentry.captureException(err);
	tmp.setGracefulCleanup();
	process.exit(1);
});

// open mongoose connection
connect();
server.listen(settings.port, () =>
	logger.info(
		`server started on http://localhost:${settings.port} (${settings.env})`
	)
);

/**
 * Exports express
 * @public
 */
export default app;
