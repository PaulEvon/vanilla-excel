import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table-template";
import { resizeHandler } from "./table-resize";
import { shouldResize } from "./table-functions";

export class Table extends ExcelComponent {
	static className = "excel__table";
	constructor($root) {
		super($root, {
			listeners: ['mousedown', 'dblclick',],

		})
	}
	toHTML = () => createTable()

	onMouseDown(event) {
		if (shouldResize(event)) {
			resizeHandler(event)
		}
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