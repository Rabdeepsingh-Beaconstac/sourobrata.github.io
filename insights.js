// Load and initialize Uniqode Insights SDK
(function() {
    var script = document.createElement('script');
    script.src = 'https://q.cdn.uniqode.com/insights/staging/v1/latest/sdk.js';
    script.onload = function() {
      window.insights.init({
        clientKey: 'cl_9aebdb05-94ce-48b8-9f44-098564b20f93'
      });
    };
    document.head.appendChild(script);
  })();
