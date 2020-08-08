import { ExcelComponent } from "../../core/ExcelComponent";
export class Formula extends ExcelComponent {
	static className = "excel__formula";
	constructor($root, options) {
		super($root, {
			name: 'Formula',
			listeners: ['input'],
			...options
		})
	}
	toHTML() {
		return `
		<div class="excel__formula-info">F(x):</div>
		<input class="excel__formula-input" value="" placeholder="Formula...">
		`
	}
	onInput(event) {
		const text = event.target.value.trim()
		this.$dispatch("Formula:input", text)
	}

} 