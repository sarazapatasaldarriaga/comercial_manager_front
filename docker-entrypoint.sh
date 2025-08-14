#!/bin/sh

# Replace environment variables in env.js
# This script assumes env.js is located at /usr/share/nginx/html/assets/env.js
# and contains a placeholder like __BACKEND_API_URL__

if [ -f /usr/share/nginx/html/assets/env.js ]; then
  echo "Replacing environment variables in env.js"
  sed -i "s|__API_ENDPOINT_URL__|$API_ENDPOINT_URL|g" /usr/share/nginx/html/assets/env.js
else
  echo "env.js not found at /usr/share/nginx/html/assets/env.js"
fi

# Start Nginx
exec nginx -g "daemon off;"