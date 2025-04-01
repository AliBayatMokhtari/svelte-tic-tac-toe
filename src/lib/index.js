export function getCellClass(pos) {
	const __row = Math.floor(pos / 3);
	const __col = pos % 3;
	let __cls = '';

	if (__row < 2) {
		if (__col < 2) {
			__cls = 'border-b border-r';
		} else {
			__cls = 'border-b';
		}
	} else {
		if (__col < 2) {
			__cls = 'border-r';
		}
	}

	return `flex items-center justify-center w-full ${__cls}`;
}
