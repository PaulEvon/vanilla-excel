import { $ } from "../../core/dom"

export function TableSelection(group, cell) {
	$(cell).addClass("selected")
	group.push(cell)
}
