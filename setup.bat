@echo off
echo.
echo === Ferreteria Pino — Setup ===
echo.
echo Instalando dependencias npm...
call npm install
if %errorlevel% equ 0 (
    echo.
    echo [OK] Dependencias instaladas correctamente
    echo.
    echo Iniciando servidor de desarrollo...
    echo Abre http://localhost:3000 en tu navegador
    echo.
    npm run dev
) else (
    echo.
    echo [ERROR] Fallo al instalar dependencias
    echo Asegurate de tener Node.js 18+ instalado
    echo Descarga: https://nodejs.org/
    echo.
    pause
)
