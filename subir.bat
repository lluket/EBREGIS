@echo off
cd /d "%~dp0"
echo Subiendo cambios a GitHub...
git add -A
git commit -m "Blog: mejoras (footer, imagen GIS, articulo coste, marketing)"
git push
echo.
echo === Listo. Revisa arriba que ponga "main -> main" ===
pause
