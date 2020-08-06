import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table-template";

export class Table extends ExcelComponent {
	static className = "excel__table";
	toHTML = () => {
		console.log(createTable());
		return `<table>${createTable()}</table>`
	}
}