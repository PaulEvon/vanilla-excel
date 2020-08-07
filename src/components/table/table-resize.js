import { $ } from "../../core/dom";
export function resizeHandler(event) {
	event.preventDefault()
	const $resizer = $(event.target)
	const $parent = $resizer.$el.closest('[data-type="resizeble"]')
	const coords = $parent.getBoundingClientRect()
	const type = $resizer.$el.dataset.resize;
	const resizerSize = (type === "col" ? "height" : "width")
	let value
	$resizer.css({
		opacity: 1,
		[resizerSize]: '1000px'
	})
	document.onmousemove = e => {
		if (type === 'col') {
			const delta = e.pageX - coords.right;
			value = coords.width + delta
			$resizer.css({ right: -delta + 'px' })
		} else {
			const delta = e.pageY - coords.bottom;
			value = coords.height + delta
			$resizer.css({ bottom: -delta + "px" })
		}
	}
	document.onmouseup = () => {
		document.onmousemove = null
		if (type === 'col') {
			$($parent).css({ width: value + "px" })
			$resizer.css({
				right: '-2px',
			})
		} else {
			$($parent).css({ height: value + "px" })
			$resizer.css({
				bottom: '-2px',
			})
		}
		$resizer.css({
			opacity: null,
			[resizerSize]: "100%"
		})
	}
}