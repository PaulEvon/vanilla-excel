import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table-template";
import { resizeHandler } from "./table-resize";
import { TableSelection } from "./table-selection";
import { $ } from "../../core/dom";

export class Table extends ExcelComponent {
	static className = "excel__table";
	constructor($root, options) {
		super($root, {
			name: "Table",
			listeners: ['mousedown', 'dblclick'],
			...options
		})
	}
	state = {
		group: []
	}
	toHTML = () => createTable()
	prepare() {
	}
	init() {
		super.init()
		const $cell = $(this.$root).find('[data-cellId = "A1"]').$el
		TableSelection(this.state.group, $cell)
		this.$on('Formula:input', (text) => {
			console.log("text:", text)
		})
	}
	onMouseDown(event) {
		resizeHandler(event)
		// this.state.group = TableSelection(this.state.group, event.target)
	}

	onDbClick(event) {
		if (event.target.isContentEditable === false) {
			event.target.contentEditable = true;
			event.target.focus();
			event.target.addEventListener("focusout", () => {
				event.target.contentEditable = false
			})
		}
	}
}