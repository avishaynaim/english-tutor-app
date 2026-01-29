#!/data/data/com.termux/files/usr/bin/bash
echo ""
echo "  Starting English Tutor..."
echo ""

# Kill any existing server on port 8080
kill $(lsof -t -i:8080 2>/dev/null) 2>/dev/null

# Start server
node ~/server.js &
SERVER_PID=$!

sleep 1

# Try to open in browser
if command -v termux-open-url &>/dev/null; then
  termux-open-url "http://localhost:8080"
elif command -v xdg-open &>/dev/null; then
  xdg-open "http://localhost:8080"
elif command -v am &>/dev/null; then
  am start -a android.intent.action.VIEW -d "http://localhost:8080" 2>/dev/null
else
  echo "  Open Chrome and go to: http://localhost:8080"
fi

echo "  Server PID: $SERVER_PID"
echo "  Press Ctrl+C to stop."
echo ""

wait $SERVER_PID
