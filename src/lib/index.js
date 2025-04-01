export function getCellClass(pos) {
	const row = Math.floor(pos / 3);
	const col = pos % 3;
	let cls = '';

	if (row < 2) {
		if (col < 2) {
			cls = 'border-b border-r';
		} else {
			cls = 'border-b';
		}
	} else {
		if (col < 2) {
			cls = 'border-r';
		}
	}

	return `flex items-center justify-center w-full h-[100px] text-3xl ${cls}`;
}

const checkCells = (cell_1, cell_2, cell_3) =>
	cell_1 && cell_2 && cell_3 && cell_1 === cell_2 && cell_2 === cell_3;

export function getGameStatus(game) {
	const __rows = 3;
	const __cols = 3;

	let cell_1, cell_2, cell_3;

	for (let row = 0; row < __rows; ++row) {
		const pos = row * __rows;
		cell_1 = game[pos];
		cell_2 = game[pos + 1];
		cell_3 = game[pos + 2];

		if (checkCells(cell_1, cell_2, cell_3)) {
			return cell_1;
		}
	}

	for (let col = 0; col < __cols; ++col) {
		cell_1 = game[0 * __rows + col];
		cell_2 = game[1 * __rows + col];
		cell_3 = game[2 * __rows + col];

		if (checkCells(cell_1, cell_2, cell_3)) {
			return cell_1;
		}
	}

	cell_1 = game[0 * __rows + 0];
	cell_2 = game[1 * __rows + 1];
	cell_3 = game[2 * __rows + 2];

	if (checkCells(cell_1, cell_2, cell_3)) {
		return cell_1;
	}

	cell_1 = game[0 * __rows + 2];
	cell_2 = game[1 * __rows + 1];
	cell_3 = game[2 * __rows + 0];

	if (checkCells(cell_1, cell_2, cell_3)) {
		return cell_1;
	}

	if (!game.some((x) => !x)) return 'Draw';

	return null;
}
