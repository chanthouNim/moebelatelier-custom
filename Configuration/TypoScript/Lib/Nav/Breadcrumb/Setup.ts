lib.nav.breadcrumb {
	wrap = <nav id="breadcrumb"><ul>|</ul></nav>
	10 {
		wrap >
		1.wrap >
		1.NO.allWrap = <li class="first">|<span class="glyphicon glyphicon-play"></span></li> |*| <li>|<span class="glyphicon glyphicon-play"></span></li> |*| <li>|<span class="glyphicon glyphicon-play"></span></li>
	}
	
}

## Add news title to the last part of breadcrumb in news single view
[globalVar = GP:tx_news_pi1|news > 0]
	lib.nav.breadcrumb {
		## Clear current state in news single view
		10.1.CUR >

		## Use news title as the current state
		20 = RECORDS
		20 {
			dontCheckPid = 1
			tables = tx_news_domain_model_news
			source.data = GP:tx_news_pi1|news
			source.intval = 1
			conf.tx_news_domain_model_news = TEXT
			conf.tx_news_domain_model_news.field = title
			wrap = <li class="last current">|</li>
		}
	}
[end]