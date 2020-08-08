import { DomListener } from "./DOMListener";

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.emitter = options.emitter
		this.prepare()
		this.unsubscribeList = []
	}
	prepare() { }
	$dispatch(event, ...args) {
		this.emitter.dispatch(event, ...args)
	}
	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn)
		this.unsubscribeList.push(unsub)
	}
	init() {
		this.initDomListeners()
	}
	destroy() {
		this.removeDomListeners()
		this.unsubscribeList.forEach(unsub => {
			unsub()
		})
	}
} 