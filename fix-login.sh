#!/bin/bash

# Script untuk membersihkan localStorage dan restart aplikasi
# Gunakan: ./fix-login.sh

echo "🔧 Memperbaiki masalah login/register..."
echo ""

# Kill process yang menggunakan port 3001
echo "1️⃣ Menghentikan server yang sedang berjalan..."
lsof -ti:3001 | xargs kill -9 2>/dev/null
sleep 1

# Clear Jest cache
echo "2️⃣ Membersihkan Jest cache..."
npm test -- --clearCache 2>/dev/null

# Start server
echo "3️⃣ Memulai development server..."
echo ""
echo "✅ Server akan dimulai..."
echo "📝 Setelah server berjalan:"
echo "   1. Buka http://localhost:3001/clear-storage.html"
echo "   2. Klik tombol 'Clear All Storage'"
echo "   3. Buka http://localhost:3001"
echo "   4. Coba login/register lagi"
echo ""

npm start
