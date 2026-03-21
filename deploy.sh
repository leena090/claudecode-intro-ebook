#!/bin/bash
# deploy.sh — 오버플로우 게이트 내장 배포 스크립트
# 사용법: bash deploy.sh "커밋 메시지"

set -e

MSG="${1:-"update: ebook content"}"

echo "🔍 오버플로우 게이트 실행..."
node check-overflow.js

if [ $? -ne 0 ]; then
  echo "❌ 오버플로우 게이트 FAIL — 배포 중단"
  exit 1
fi

echo ""
echo "✅ 게이트 PASS — 배포 시작..."

# Git 커밋
git add -A
git commit -m "feat: $MSG" || echo "(변경사항 없음)"
git push

# Vercel 배포
npx vercel --prod --yes

echo ""
echo "🚀 배포 완료!"
