// Firefox //
// more at https://github.com/pyllyukko/user.js/blob/master/user.js

user_pref("ui.caretWidth", 5);
user_pref("ui.caretBlinkTime", 0);
// disable web page accesskey, this leads to key conflict
user_pref("ui.key.generalAccessKey", 0);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
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
// do not track
user_pref("privacy.donottrackheader.enabled", true);
// no new tab page
user_pref("browser.newtabpage.enabled", false);
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
user_pref("browser.pocket.enabled", false);
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

// Extension //

// session manager
// backup every 4 hours
user_pref("extensions.{1280606b-2510-4fe0-97ef-9b5a22eafe30}.backup_every", true);
user_pref("extensions.{1280606b-2510-4fe0-97ef-9b5a22eafe30}.backup_every_time", 240);

// class theme restorer
user_pref("extensions.classicthemerestorer.appbutton", "appbutton_off");
user_pref("extensions.classicthemerestorer.ctabheight", 24);
user_pref("extensions.classicthemerestorer.ctabheightcb", true);
user_pref("extensions.classicthemerestorer.hidetbwot", true);
user_pref("extensions.classicthemerestorer.smallnavbut", true);
user_pref("extensions.classicthemerestorer.tabs", "tabs_default");

// beyond australis
user_pref("extensions.thefoxonlybetter.awesomerURLBar", false);
user_pref("extensions.thefoxonlybetter.skyLights", false);
user_pref("extensions.thefoxonlybetter.slimAnimation", "none");
