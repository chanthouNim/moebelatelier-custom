## Accessibility
## Standard key usage defined here: http://webaim.org/techniques/keyboard/accesskey#standard
## S - Skip navigation
## 1 - Home page
## 2 - What's new
## 3 - Site map
## 4 - Search
## 5 - Frequently Asked Questions (FAQ)
## 6 - Help
## 7 - Complaints procedure
## 8 - Terms and conditions
## 9 - Feedback form
## 0 - Access key details

lib.misc.accessibility = COA
lib.misc.accessibility {
	wrap = <ul>|</ul>
	10 = TEXT
	10.wrap = <li> | </li>
	10.typolink.ATagParams = accesskey = S
	10.typolink.section = main-content
	10.typolink.parameter.data = page:uid
	10.value = {$const.accessibility.skip_nav_label}
	
	20 < .10
	20.typolink >
	20.typolink.ATagParams = accesskey = 1
	20.typolink.parameter = {$const.page.home}
	20.value = {$const.page.home_label}
	
	30 < .10
	30.typolink >
	30.typolink.ATagParams = accesskey = 2
	30.typolink.parameter = {$const.page.news}
	30.value = {$const.page.news_label}
	
	40 < .10
	40.typolink >
	40.typolink.ATagParams = accesskey = 3
	40.typolink.parameter = {$const.page.sitemap}
	40.value = {$const.page.sitemap_label}

	50 < .10
	50.typolink >
	50.typolink.ATagParams = accesskey = 4
	50.typolink.section = search-box
	50.typolink.parameter.data = page:uid
	50.value = {$const.page.search_label}
	
	90 < .10
	90.typolink >
	90.typolink.ATagParams = accesskey = 8
	90.typolink.parameter = {$const.page.terms}
	90.value = {$const.page.terms_label}
	
	100 < .10
	100.typolink >
	100.typolink.ATagParams = accesskey = 9
	100.typolink.parameter = {$const.page.contact}
	100.value = {$const.page.contact_label}
}
