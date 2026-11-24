/** Google Tag Manager container, and the Google Analytics property it sends visits to. */
export const GOOGLE_TAG_ID = 'GTM-5FZ96X6Z';
const GA_MEASUREMENT_ID = 'G-MMCG34E8KV';

const KEY = 'kw-analytics-consent';
const OPEN = 'kw:cookie-settings';

export type Consent = 'granted' | 'denied';

declare global {
  interface Window { kwLoadGoogleTag?: () => void; kwClearGaCookies?: () => void }
}

/**
 * Runs in <head> before the page paints. Defines the loader (Google's standard GTM snippet, unchanged
 * inside the function) and starts it straight away only for visitors who already said yes. For visitors
 * who said no, it removes any Google Analytics cookies left over from before they changed their mind.
 */
export const GOOGLE_TAG_BOOT = `window.dataLayer=window.dataLayer||[];
window.kwClearGaCookies=function(){var h=location.hostname,ds=['','; domain='+h,'; domain=.'+h.replace(/^www\\./,'')];
document.cookie.split(';').forEach(function(c){var n=c.split('=')[0].trim();if(n==='_ga'||n==='_gid'||n.indexOf('_ga_')===0)ds.forEach(function(d){document.cookie=n+'=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'+d;});});};
window.kwLoadGoogleTag=function(){if(window.kwGtmLoaded)return;window.kwGtmLoaded=true;
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(GOOGLE_TAG_ID)});};
try{var kwc=localStorage.getItem(${JSON.stringify(KEY)});if(kwc==='granted')window.kwLoadGoogleTag();else if(kwc==='denied')window.kwClearGaCookies();}catch(e){}`;

export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent) {
  try { localStorage.setItem(KEY, value); } catch { /* private mode: the choice lasts this visit only */ }
  if (value === 'granted') {
    window.kwLoadGoogleTag?.();
  } else {
    // Withdrawing consent: Google's documented opt-out flag stops Analytics sending anything more
    // from this page, then the cookies it already set are removed.
    (window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
    window.kwClearGaCookies?.();
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN));
}

export function onOpenCookieSettings(handler: () => void) {
  window.addEventListener(OPEN, handler);
  return () => window.removeEventListener(OPEN, handler);
}
