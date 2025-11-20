
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://khaledelamerX.github.io/ATOZ-Frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ATOZ-Frontend"
  },
  {
    "renderMode": 2,
    "route": "/ATOZ-Frontend/services"
  },
  {
    "renderMode": 2,
    "route": "/ATOZ-Frontend/projects"
  },
  {
    "renderMode": 2,
    "route": "/ATOZ-Frontend/about"
  },
  {
    "renderMode": 2,
    "route": "/ATOZ-Frontend/news"
  },
  {
    "renderMode": 2,
    "route": "/ATOZ-Frontend/signin"
  },
  {
    "renderMode": 2,
    "route": "/ATOZ-Frontend/signup"
  },
  {
    "renderMode": 2,
    "route": "/ATOZ-Frontend/contact"
  },
  {
    "renderMode": 2,
    "route": "/ATOZ-Frontend/payment"
  },
  {
    "renderMode": 2,
    "redirectTo": "/ATOZ-Frontend",
    "route": "/ATOZ-Frontend/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2519, hash: '86758c62d13fc2f8d45d6e90d5a94054b503fc15444245d27165569d2cfa0a3d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: 'a72f21ba05ecb53695aae8e02f4f566c6b70c72eb223f9f9d12cf31082a92e7b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 19514, hash: '5e84a9302bbf0e30f5b7665c47ccb6bc82e3705fe550f4ad3a73063ff4e0e4ac', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 18579, hash: 'd087f1848ac4ea7c10d2ea27e59df58a9a8d80f43458ec383041c16711000373', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 18799, hash: '3d87c9e4ce11787c509302695f3985bba8f503ed522bb6b99615deaa42df5624', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18477, hash: 'f25fb493dfcc39316171a90465666b9fd01fcd840da30d912c0b757a7a74a936', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 18153, hash: 'd1d230b94a323292a549e7f867b39eca6b53e1314eb79ff71b0b4c6adab2b45f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 43807, hash: '810c77f818aa8b77ef1997ce604d185ee2cd1a9cafdc90e6cfec84810e8038fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'payment/index.html': {size: 17989, hash: '3dbe6817802cce7a2732a0e1f885993796ea51648f6935b0b77d7661cb267ebc', text: () => import('./assets-chunks/payment_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 21178, hash: 'b30eff7fbbf4c8799a7d9dc173a9641fea99abd8effc5991d55635908b620163', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 20070, hash: 'd25ca23689c4a4482e60d43935df0d510742228d67a432bf0b6aa0a66cd23425', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'styles-FOLCQLYZ.css': {size: 20250, hash: 'ke85oK+G1+g', text: () => import('./assets-chunks/styles-FOLCQLYZ_css.mjs').then(m => m.default)}
  },
};
