import { esbuildPlugin } from '@web/dev-server-esbuild';
import { defaultReporter } from '@web/test-runner';
import { puppeteerLauncher } from '@web/test-runner-puppeteer';
import { fileURLToPath } from 'url';

/**
 * @type {import('@web/test-runner').TestRunnerConfig}
 * see: https://modern-web.dev/docs/test-runner/cli-and-configuration/
 */
export default {
	nodeResolve: {
		extensions: ['.js', '.mjs', '.ts', '.json'],
	}, // resolve bare module imports
	preserveSymlinks: false, // preserve symlinks when resolving bare module imports
	esbuildTarget: 'es2022', // JS language target to compile down to using esbuild.
	concurrentBrowsers: 1, // amount of browsers to run in parallel. defaults to 2
	concurrency: 1, // amount of test files to run concurrently. default to CPU cores divided by 2
	browserLogs: false, // whether to track browser logs and print them in the node terminal
	debug: true, // whether to print debug messages
	testsFinishTimeout: 10_000, // how long a test file can take to finish. (5 min)

	plugins: [
		esbuildPlugin({
			target: 'auto',
			loaders: {
				'.js': 'js',
				'.mjs': 'js',
				'.ts': 'ts',
			},
			tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
		}),
	],

	browsers: [
		puppeteerLauncher({
			concurrency: 1,
			// see: https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#puppeteerlaunchoptions
			launchOptions: {
				headless: false,
			},
		}),
	],

	// configuration for mocha options
	testFramework: {
		config: {
			timeout: '10s',
		},
	},
};