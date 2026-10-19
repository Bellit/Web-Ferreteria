# 🚀 Ferreteria Pino — Setup automático
# Este script instala dependencias y prepara el entorno

Write-Host "🏗️  Instalando dependencias npm..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Dependencias instaladas correctamente" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Iniciando servidor de desarrollo..." -ForegroundColor Cyan
    Write-Host "   Abre http://localhost:3000 en tu navegador" -ForegroundColor White
    Write-Host ""
    npm run dev
} else {
    Write-Host ""
    Write-Host "❌ Error al instalar dependencias" -ForegroundColor Red
    Write-Host "   Asegúrate de tener Node.js 18+ instalado" -ForegroundColor Yellow
    Write-Host "   Descarga: https://nodejs.org/" -ForegroundColor Yellow
}
