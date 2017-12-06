// Firefox //
// more at https://github.com/pyllyukko/user.js/blob/master/user.js

// enable extensions update explicitly
user_pref("extensions.update.enabled", true);
user_pref("ui.caretBlinkTime", 0);
// disable web page accesskey, this leads to key conflict
//user_pref("ui.key.generalAccessKey", 0);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
user_pref("browser.tabs.tabClipWidth", 50);
// enable ctrl+tab preview
user_pref("browser.ctrlTab.previews", true);
user_pref("network.proxy.socks_remote_dns", true);
// shorten http connection timout
user_pref("network.http.connection-timeout", 30);
user_pref("browser.startup.page", 3);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.manager.showWhenStarting", false);
user_pref("browser.download.manager.showAlertOnComplete", true);
user_pref("general.warnOnAboutConfig", false);
user_pref("intl.accept_languages", "en-us,en,zh-cn,zh");
user_pref("view_source.wrap_long_lines", true);
// do not reload tabs when restarting firefox, see http://blog.zpao.com/post/1140456188/cascaded-session-restore-a-hidden-bonus
user_pref("browser.sessionstore.restore_on_demand", true);
// save session every 5min, see http://lifehacker.com/5342636/
user_pref("browser.sessionstore.interval", 300000);
// disable the install-dialog delay
user_pref("security.dialog_enable_delay", 0);
// disable fullscreen animation
user_pref("browser.fullscreen.animate", false);
// disable tab animation
user_pref("browser.tabs.animate", false);
user_pref("toolkit.scrollbox.smoothScroll", false);
// scroll step
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
// do not track
user_pref("privacy.donottrackheader.enabled", true);
user_pref("network.http.referer.userControlPolicy", 2);
// no new tab page
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
// disable pdfjs
user_pref("pdfjs.disabled", true);
// set reader mode style
user_pref("reader.color_scheme", "sepia");
user_pref("reader.font_type", "serif");
// enable pipelining
//user_pref("network.http.pipelining", true);
//user_pref("network.http.proxy.pipelining", true);
// enable tracking protection
user_pref("privacy.trackingprotection.enabled", true);
// disable addon signature checking
user_pref("xpinstall.signatures.required", false);
// search suggest
user_pref("browser.urlbar.suggest.searches", true);
// show protocol on url bar
user_pref("browser.urlbar.trimURLs", false);
// disable services
user_pref("loop.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);
// disable safe browsing
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
// disable data reporting, https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// webRTC
user_pref("media.peerconnection.enabled", false);
// https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("beacon.enabled", false);
// disable GEO
user_pref("geo.enabled", false);
// http://kb.mozillazine.org/Browser.send_pings
user_pref("browser.send_pings", false);
// disable domain guessing
user_pref("browser.fixup.alternate.enabled", false);
// disable addon metadata updates, https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
user_pref("extensions.getAddons.cache.enabled", false);
// disable openh264
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url.override", "data:text/plain,");
// disable about:home update
user_pref("browser.aboutHomeSnippets.updateUrl", "");
// disable search engine update
user_pref("browser.search.update", false);
// enable console in devtools
user_pref("devtools.chrome.enabled", true);
// try harder to use ipv6
//user_pref("network.http.fast-fallback-to-IPv4", false);
// acceleration
//user_pref("layers.acceleration.force-enabled", true);
//user_pref("gfx.content.azure.backends", "skia");
// show punycode
user_pref("network.IDN_show_punycode", true);
// multi content processes
user_pref("dom.ipc.processCount", 6);
// hide html5 full screen api warning
user_pref("full-screen-api.warning.timeout", -1);
// disable bottom search engines on location bar
user_pref("browser.urlbar.oneOffSearches", false);
// container tabs
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
