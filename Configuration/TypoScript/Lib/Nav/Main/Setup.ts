
lib.nav.main {
	1 {
		wrap = <ul class="nav">|</ul>
		noBlur = 1
		expAll = 0

		IFSUB {
			wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
			ATagParams >
			stdWrap.wrap >
		}
		
		ACTIFSUB {
			wrapItemAndSub = <li class="first active">|</li> |*| <li class="active">|</li> |*| <li class="last active">|</li>
			ATagParams >
			stdWrap.wrap >
		}

		CURIFSUB {
			wrapItemAndSub = <li class="first active">|</li> |*| <li class="active">|</li> |*| <li class="last active">|</li>
			ATagParams >
			stdWrap.wrap >
		}
	}
	
	2 < .1
	2 {
		wrap = <ul>|</ul>

		NO {
			wrapItemAndSub = <li>|</li>
		}

		SPC = 1
		SPC {
			wrapItemAndSub = <li class="divider">|</li>
		}
	}
}
