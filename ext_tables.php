<?php

if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Web Essentials Custom Package');

Tx_Flux_Core::registerProviderExtensionKey('we_custom', 'Content');

// SEO BE Remove Field, Uncomment to remove the field
$removeTqseo = array (
//	'tx_tqseo_pagetitle',
	'tx_tqseo_pagetitle_rel',
//	'tx_tqseo_geo_lat',
//	'tx_tqseo_geo_long',
//	'tx_tqseo_geo_place',
//	'tx_tqseo_geo_region',
//	'tx_tqseo_change_frequency',
//	'tx_tqseo_priority',
//	'tx_tqseo_canonicalurl',
//	'tx_tqseo_is_exclude',
	'tx_tqseo_inheritance',
	'tx_tqseo_pagetitle_suffix',
	'tx_tqseo_pagetitle_prefix'
);
$temp = array();
foreach($removeTqseo as $remove){
	$temp[$remove] = array();
}

\TYPO3\CMS\Core\Utility\GeneralUtility::loadTCA('pages');
\TYPO3\CMS\Core\Utility\GeneralUtility::loadTCA('pages_language_overlay');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $temp, 1);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages_language_overlay', $temp, 1);

	// Same code for adding page type
//$TCA['pages']['columns']['doktype']['config']['items'][40] = array('LLL:EXT:' . $_EXTKEY.'/Resources/Private/Language/locallang_db.xml:pagetype.dropdown', '40', 'i/pages.gif');

?>
