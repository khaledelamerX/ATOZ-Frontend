
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
    'index.csr.html': {size: 2488, hash: '870069cf4399d68193def1a94a2743fd9cc8b902c2956b3073fa7348ba4209bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: 'e0d743f42d8bc1ed0bb8c509b3fd684677700ad649a12f5d8ef984e7624db5f8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 19142, hash: '37816aee1c5e9f5b55819cd6c9f0ea4057719a191332022df3d313ef1d65c533', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 18427, hash: '0b61721bac4ac6cd96a448a020e906d32d02dfb87cf4701e280dc3bc22cbc373', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'index.html': {size: 43280, hash: '32fd4490a5a8b9c05153e89c4a4ea0ec8332f228abf0b05026021b62a9f2c518', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 18207, hash: '06d54369cff4e2925907590671441d241d2638f98512e0042083f56f37365406', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18105, hash: '3e34a997336ace8cc7d2bd88a7901e8249f8423ed021a232d7099a9f38a8ed20', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17781, hash: '5870a157ff485e7df9ada5d937e246de9810be8b52aec22b3b970f28544c0c97', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 20713, hash: 'c9269516604d4a43da15b984cb5de919d4f394ed3d4f599834291b479b27ee3b', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'payment/index.html': {size: 17617, hash: '73a52f430ce3bf183b5c9dcd476afbb4e2c4568eae4a3c12864b48dd83ccabcb', text: () => import('./assets-chunks/payment_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 19605, hash: 'e7aa5e3b2afb1eefbffba7a4c26526103556de91b0cae806e6fa23750382f985', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'styles-FOLCQLYZ.css': {size: 20250, hash: 'ke85oK+G1+g', text: () => import('./assets-chunks/styles-FOLCQLYZ_css.mjs').then(m => m.default)}
  },
};
