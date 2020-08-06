import { ExcelComponent } from "../../core/ExcelComponent";
export class Formula extends ExcelComponent {
	static className = "excel__formula";
	constructor($root) {
		super($root, {
			name: 'Formula',
			listeners: ['input', 'click']
		})
	}
	toHTML() {
		return `
		<div class="excel__formula-info">F(x):</div>
		<input class="excel__formula-input" value="" placeholder="Formula...">
		`
	}
	onInput(event) {
		console.log('Formula: onInput', event);
	}
	onClick(event) {
		event.preventDefault()
		console.log('Formula: onClick', event);

	}

} 