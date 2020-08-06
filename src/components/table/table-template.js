const CODES = {
	A: 65,
	Z: 90
}
const colsCount = CODES["Z"] - CODES["A"]
function toChar(index) {
	return String.fromCharCode(CODES["A"] + index)
}
function createCell() {
	return `<input type="text">`
}
function createCol(i) {
	const cols = []
	cols.push(`<td>${i + 1}</td>`)
	for (let i = 1; i <= colsCount + 1; i++) {
		cols.push(`<td>${createCell()}</td>`)
	}
	return cols.join('')
}
function createRow(i) {
	return `<tr>${createCol(i)}</tr>`
}
function createFirstRow() {
	const cols = []
	cols.push(`<th></th>`)
	for (let i = 0; i <= colsCount; i++) {
		cols.push(`<th>${toChar(i)}</th>`)
	}
	return cols.join('')
}
export function createTable(rowsCount = 30) {

	const rows = []
	rows.push(createFirstRow())
	for (let i = 0; i < rowsCount; i++) {
		rows.push(createRow(i))
	}
	return rows.join('')
}
