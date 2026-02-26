# Netlify Deployment Helper Script
# Run this to prepare and push to GitHub

Write-Host "`n═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "   🚀 Netlify Deployment Helper" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════`n" -ForegroundColor Cyan

# Change to project directory
$projectPath = "C:\Users\HP\Desktop\Rohit\purva\KukrejaConsaltancy"
Set-Location $projectPath

Write-Host "✅ Current directory: $projectPath`n" -ForegroundColor Green

# Check git status
Write-Host "📋 Current Git Status:" -ForegroundColor Yellow
git status
Write-Host ""

# Ask user if they want to commit
$commit = Read-Host "Do you want to commit and push these changes? (yes/no)"

if ($commit -eq "yes" -or $commit -eq "y") {
    Write-Host "`n📦 Adding files to git..." -ForegroundColor Yellow
    git add .
    
    Write-Host "💾 Committing changes..." -ForegroundColor Yellow
    git commit -m "Configure for Netlify deployment with MongoDB Atlas"
    
    Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
    
    Write-Host "`n✅ SUCCESS! Code pushed to GitHub!`n" -ForegroundColor Green
    
    Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host "   📋 NEXT STEPS:" -ForegroundColor Yellow
    Write-Host "═══════════════════════════════════════════════════`n" -ForegroundColor Cyan
    
    Write-Host "1. Go to: https://app.netlify.com" -ForegroundColor White
    Write-Host "2. Click: 'Add new site' → 'Import an existing project'" -ForegroundColor White
    Write-Host "3. Choose: GitHub" -ForegroundColor White
    Write-Host "4. Select: wastec-group/KUKREJA-S-CONSULTANCY" -ForegroundColor White
    Write-Host "5. Build settings:" -ForegroundColor White
    Write-Host "   - Build command: npm run build" -ForegroundColor Gray
    Write-Host "   - Publish directory: build" -ForegroundColor Gray
    Write-Host "   - Functions directory: netlify/functions" -ForegroundColor Gray
    Write-Host "6. Deploy!" -ForegroundColor White
    Write-Host ""
    
    Write-Host "⚠️  IMPORTANT: After deployment, add MongoDB URI:" -ForegroundColor Yellow
    Write-Host "   Key: MONGODB_URI" -ForegroundColor White
    Write-Host "   Value: mongodb+srv://kukrejaadmin:c8dxyCooae17TU28@kukrejacluster.c2ejbdr.mongodb.net/kukreja-consultancy?retryWrites=true&w=majority" -ForegroundColor Gray
    Write-Host ""
    
    Write-Host "🎉 Ready to deploy!" -ForegroundColor Green
    
} else {
    Write-Host "`n❌ Deployment cancelled." -ForegroundColor Red
    Write-Host "Run this script again when you're ready to deploy.`n" -ForegroundColor Yellow
}

Write-Host "`n═══════════════════════════════════════════════════`n" -ForegroundColor Cyan

# Pause
Read-Host "Press Enter to exit"
