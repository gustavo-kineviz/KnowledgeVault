#!/bin/bash

# Quartz Local Test Script

# Ensure we're in the right directory
cd "$(dirname "$0")"

echo "📍 Working in: $(pwd)"
echo "🧹 Cleaning old content..."
rm -rf content/*

echo "📋 Copying your notes..."
cp -r ~/Desktop/Kineviz_Obsidian/* content/

echo "🗑️ Removing unwanted files..."
rm -rf content/.obsidian content/.git content/.trash content/drafts

echo "🔨 Building and serving locally..."
echo "📱 Local server starting at: http://localhost:8080"
echo "⏹️  Press Ctrl+C to stop the server when done testing"

npx quartz build --serve
