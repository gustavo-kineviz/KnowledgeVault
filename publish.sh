#!/bin/bash
echo "🧹 Cleaning old content..."
rm -rf content/*
echo "📋 Copying your notes..."
cp -r ~/Desktop/knowledge_vault/* content/
echo "🗑️ Removing unwanted files..."
rm -rf content/.obsidian content/.git content/.trash content/drafts
echo "🔄 Staging changes..."
git add content/
echo "📝 Committing changes..."
git commit -m "Update content: $(date)"
echo "🚀 Publishing to website..."
npx quartz sync
echo "✅ Done! Website updated."
