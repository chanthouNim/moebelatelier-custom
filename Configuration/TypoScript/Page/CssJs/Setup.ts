## Including CSS
page {
	includeCSS {
		styles = {$const.custom.path.css}style.css
		styles {
			media = screen
			disableCompression = 1
		}
	}
	includeJSFooter {
		main = {$const.custom.path.script}main.js
		main {
			disableCompression = 1
			excludeFromConcatenation = 1
		}
	}
}