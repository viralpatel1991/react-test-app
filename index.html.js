module.exports = (hash) => {
  return (
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="app"></div>
        <script type="text/javascript" src="${hash}"></script>
      </body>
    </html>`
  );
};
