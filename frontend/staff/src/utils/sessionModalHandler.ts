let openFn: (() => void) | null = null;

export interface SessionModalHandler {
	register(fn: () => void): void;
	open(): void;
}

export const sessionModalHandler = {
	register(fn: () => void): void {
		openFn = fn;
	},

	open() {
		if (openFn) openFn();
	},
};
 