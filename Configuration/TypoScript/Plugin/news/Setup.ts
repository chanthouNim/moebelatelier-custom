## News System Configuration
<INCLUDE_TYPOSCRIPT: source="FILE: EXT:news/Configuration/TypoScript/setup.txt">

## RSS Feed
pageNewsRSS = PAGE
pageNewsRSS {
	typeNum = 100
	10 = USER
	10 {
		userFunc = tx_extbase_core_bootstrap->run
		pluginName = Pi1
		extensionName = News
		switchableControllerActions {
			News {
				1 = list
			}
		}
		settings < plugin.tx_news.settings
		settings.format = xml
		settings.detailPid = {$plugin.tx_news.settings.detailPid}
	}

	config {
		# deactivate Standard-Header
		disableAllHeaderCode = 1
		# no xhtml tags
		xhtml_cleaning = none
		admPanel = 0
		metaCharset = utf-8
		# define charset
		additionalHeaders = Content-Type:text/xml;charset=utf-8
		disablePrefixComment = 1
		absRefPrefix < config.baseURL
	}
}
## Condition set when on news details view
[globalVar = GP:tx_news_pi1|news > 0]
		# Set default action to detail if a news is passed through parameter
	config.defaultGetVars {
		tx_news_pi1.action = detail
	}

		# Clear page title because news title will be used
	lib.misc.pagetitle >
[global]
