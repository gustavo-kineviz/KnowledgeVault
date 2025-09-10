#!/bin/bash

# Quartz Local Test Script

echo "🧹 Cleaning old content..."
rm -rf content/*

echo "�� Copying your notes..."
cp -r ~/Desktop/Kineviz_Obsidian/* content/

echo "🗑️ Removing unwanted files..."
rm -rf content/.obsidian content/.git content/.trash content/drafts

echo "🔨 Building and serving locally..."
echo "📱 Local server starting at: http://localhost:8080"
echo "⏹️  Press Ctrl+C to stop the server when done testing"

npx quartz build --serve
