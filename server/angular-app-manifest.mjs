
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ATOZ-Frontend/',
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
    'index.csr.html': {size: 2488, hash: 'fb29a83f02822ad99de0a8a30c33a69e47b5221b742fc5d16cc5f55a0caffe9c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: '6209fc5621604dbbc930bece842c40666ef320da7cadbfe220f3f12b65eb33d0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 14389, hash: 'ea2bece470265840f442f29dfd3317b60115d574e3239376aa1d79ae2368a28b', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 34310, hash: '950ebf205a9d133acf534a38c382e33846400673ebe7fbfee99228d2fbd5b2c1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 14609, hash: 'a868ec86ecf090c1bf4ee9ffdbbd43c1661ac25f8dacb0305d5cb1806381519b', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 15267, hash: '503561483d91ab4fb9ceb7c023a2b38f63d0fe97bc0286f32dc303f106d370bd', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 14274, hash: 'dde1e4357272549918af0617451ce8277e826402bd87cf79250c9e3620a7e55e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14219, hash: '4be850d4cb06c3e22d75b63ccd37e89e241bb24e450efb2d257705e6188625c7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 15611, hash: 'b5f860944fca32330a30b0335625234755861a4f4b02a5963be3dc6760edb369', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'payment/index.html': {size: 13765, hash: '964fdd33fcf3a22ca75a1a96edc9c05e2bf581a9ffd7041bdf375a527cf366b1', text: () => import('./assets-chunks/payment_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 16449, hash: 'f56b75ea6e2bad0f2e25e8296d136260ce2bf9aacacc98aa7f231371643a5f86', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-Q4WUWJ7B.css': {size: 9004, hash: 'bYaBBV5MU+g', text: () => import('./assets-chunks/styles-Q4WUWJ7B_css.mjs').then(m => m.default)}
  },
};
