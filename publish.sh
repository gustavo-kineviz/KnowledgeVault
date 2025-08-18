#!/bin/bash
echo "🧹 Cleaning old content..."
rm -rf content/*

echo "📋 Copying your notes..."
cp -r ~/Desktop/Kineviz_Obsidian/* content/

echo "🗑️ Removing unwanted files..."
rm -rf content/.obsidian content/.git content/.trash content/copilot-custom-prompts

echo "🚀 Publishing to website..."
npx quartz sync

echo "✅ Done! Your website is updated."
