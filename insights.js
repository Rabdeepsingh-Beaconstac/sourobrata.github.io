// Load and initialize Uniqode Insights SDK
// (function() {
//     var script = document.createElement('script');
//     script.src = 'https://q.cdn.uniqode.com/insights/staging/v1/latest/sdk.js';
//     script.onload = function() {
//       window.insights.init({
//         clientKey: 'cl_729c1d2e-e58b-4b29-93e3-722e148e2f7f'
//       });
//     };
//     document.head.appendChild(script);
//   })();

 // <script src="insights.js"></script>  
    // (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    // })(window,document,'script','dataLayer','GTM-KCRDH2FM');
// </head>
// <body>
//     <!-- Google Tag Manager (noscript) -->
//     <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCRDH2FM"
//     height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
//     <!-- End Google Tag Manager (noscript) -->
//   <header class="header">


(function(window){'use strict';var METHODS=['track','identify','getUserId','set','setOnce','unset','add','append','prepend','preInsert','postInsert','remove','addPlugin','removePlugin','processQueuedEvents'];var queue=[];if(window.insights&&window.insights.isReady){return;}window.insights=window.insights||{};METHODS.forEach(function(method){window.insights[method]=function(){queue.push({method:method,args:Array.prototype.slice.call(arguments)});};});Object.defineProperty(window.insights,'isReady',{get:function(){return false;},configurable:true});var pendingInitConfig=null;window.insights.init=function(config){pendingInitConfig=config;return Promise.resolve();};var script=document.createElement('script');script.src='https://cdn.uniqode.com/insights/production/v1/latest/sdk.js';script.crossOrigin='anonymous';script.async=true;script.onload=function(){try{window.insights.init({clientKey:'cl_e6e03b8b-53b5-4d63-a427-9ebc20eef218'}).then(function(){queue.forEach(function(item){if(typeof window.insights[item.method]==='function'){window.insights[item.method].apply(window.insights,item.args);}});queue.length=0;}).catch(function(error){console.error('[Insights] Initialization error:',error);});}catch(error){console.error('[Insights] Initialization error:',error);}};script.onerror=function(){console.error('[Insights] Failed to load SDK from:',script.src);};var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(script);})(window);


// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//     })(window,document,'script','dataLayer','GTM-KCRDH2FM');