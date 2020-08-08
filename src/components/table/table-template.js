const CODES = {
	A: 65,
	Z: 90
}
const colsCount = CODES["Z"] - CODES["A"]
function toChar(index) {
	return String.fromCharCode(CODES["A"] + index)
}
function createCell(rowIndex) {
	const cols = []
	cols.push(`
		<td data-type="resizeble">
			${rowIndex + 1}
			<div class="excel__table-row-resize" data-resize="row">
		</td>`)
	for (let i = 1; i <= colsCount + 1; i++) {
		cols.push(`
		<td>
			<div class="excel__table-cell" contenteditable=false data-cellId=${toChar(i - 1)}${rowIndex + 1}></div>	
		</td>`)
	}
	return cols.join('')
}
function createFirstRow() {
	const cols = []
	cols.push(`<th></th>`)
	for (let i = 0; i <= colsCount; i++) {
		cols.push(`
		<th data-type="resizeble">
			${toChar(i)}
			<div class="excel__table-col-resize" data-resize="col">
			</div>
		</th>`)
	}
	return cols.join('')
}
export function createTable(rowsCount = 30) {
	const rows = []
	rows.push(createFirstRow())
	for (let i = 0; i < rowsCount; i++) {
		rows.push(`<tr>${createCell(i)}</tr>`)
	}
	return `<table>${rows.join('')}</table>`
}
