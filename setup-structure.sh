#!/bin/bash

# Create directories
mkdir -p src/{assets/{images,styles},components,hooks,pages,contexts,services,utils}
mkdir -p public/assets/images

# Create basic files
touch src/index.js src/App.jsx src/index.css src/reportWebVitals.js
touch public/index.html public/manifest.json public/robots.txt

# Optional: Add boilerplate code
echo "import React from 'react';" > src/index.js
echo "import ReactDOM from 'react-dom';" >> src/index.js
echo "import './index.css';" >> src/index.js
echo "import App from './App';" >> src/index.js
echo "import reportWebVitals from './reportWebVitals';" >> src/index.js
echo "" >> src/index.js
echo "ReactDOM.render(" >> src/index.js
echo "  <React.StrictMode>" >> src/index.js
echo "    <App />" >> src.index.js
echo "  </React.StrictMode>," >> src/index.js
echo "  document.getElementById('root')" >> src/index.js
echo ");" >> src/index.js
echo "" >> src/index.js
echo "reportWebVitals();" >> src/index.js

echo "import React from 'react';" > src/App.jsx
echo "const App = () => {" >> src/App.jsx
echo "  return <div>Hello, React!</div>;" >> src/App.jsx
echo "};" >> src/App.jsx
echo "export default App;" >> src/App.jsx

# Notify the user
echo "Project structure has been set up!"
