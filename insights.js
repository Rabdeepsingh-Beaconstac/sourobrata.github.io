// Load and initialize Uniqode Insights SDK
(function() {
    var script = document.createElement('script');
    script.src = 'https://q.cdn.uniqode.com/insights/staging/v1/latest/sdk.js';
    script.onload = function() {
      window.insights.init({
        clientKey: 'cl_729c1d2e-e58b-4b29-93e3-722e148e2f7f'
      });
    };
    document.head.appendChild(script);
  })();
