import { $ } from "./dom"

export class DomListener {
	constructor($root, listeners = []) {
		if (!$root) {
			throw new Error(`No $root provided for DOMListener!`)
		}
		this.$root = $root
		this.listeners = listeners
	}
	initDomListeners() {
		this.listeners.forEach(listener => {
			// console.log(this, listener);
			const callback = listenersReducer[listener];
			if (!this[callback]) {
				throw new Error(`${callback} not implemented in ${this.name || ''} component`)
			}
			this[callback] = this[callback].bind(this)
			$(this.$root).on(listener, this[callback])
		})
	}
	removeDomListeners() {

		this.listeners.forEach(listener => {
			const callback = listenersReducer[listener];
			$(this.$root).off(listener, this[callback])
		})
	}
}
const listenersReducer = {
	'input': "onInput",
	'click': "onClick",
	'mousedown': "onMouseDown",
	"mousemove": "onMouseMove",
	"mouseup": "onMouseUp",
	"dblclick": "onDbClick",
	"onfocusout": "onFocusOut"
}