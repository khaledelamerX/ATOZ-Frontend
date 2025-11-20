
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
    'index.csr.html': {size: 2488, hash: 'e8d907b9ba2263baef13122767e6d34cfe5d06eec9750f8e92432136b0ed6863', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: 'b6c210f807c79fcbd3f56f1f731cdc9d3ef8d80ee055a5b1ddf0eb042441be09', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 14609, hash: '7a6199619f20394e8e316b18966c8842ab6a4dc49097505b1c031f3d17021abd', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 15267, hash: '40ecb39014c28792847f59fb272c0cc666b9f32aa5ef244076c3458602fb847b', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'index.html': {size: 34310, hash: '1c473c1d153c42c6715f269c76ab6075a45172690c380ea824863ffa685c6adc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 14389, hash: 'ccfd969ebb2da0eae6cb6a3c156721190f9d36533044fed8fdfabff9512c4e4a', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 14274, hash: 'eeafb7c918916a98ff181eb0db2e5b2bf4bec396a4bffdbf4661a0d5b651f00d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'payment/index.html': {size: 13765, hash: 'a7df744ecca25f5921ddbfc228e0435b2ca183b986c0580f447b98090a3e2026', text: () => import('./assets-chunks/payment_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14219, hash: '27746faf21a3891d7ea2456f538d4d35111aa42f6c2bf8039f547a4469347bef', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 16449, hash: '96407d57c2d8bd4fc89ebed5a090bf387f8d7fae5e84f1a9845cb98426c73bc7', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 15611, hash: '918b8127a2380bed5efb1b900f5462c9feb042aa60788a15c793111385dcddb8', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'styles-Q4WUWJ7B.css': {size: 9004, hash: 'bYaBBV5MU+g', text: () => import('./assets-chunks/styles-Q4WUWJ7B_css.mjs').then(m => m.default)}
  },
};
