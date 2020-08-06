import { DomListener } from "./DOMListener";

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
	}
	// returns component template 

	init() {
		this.initDomListeners()
	}
	destroy() {
		this.removeDomListeners()
	}
} 