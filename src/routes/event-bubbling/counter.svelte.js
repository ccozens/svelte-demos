export function createCounter() {
	let count = $state(0);

	return {
		get count() {
			return count;
		},
		increment: () => {
			count += 1;
		},
        decrement: () => {
            count -= 1;
        }
	};
}

export const counter = createCounter();
