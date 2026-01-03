@echo off
echo ========================================
echo   CHAY WEBSITE FRONTEND
echo ========================================
echo.
echo Dang khoi dong server...
echo Website se mo tai: http://localhost:8000
echo.
echo Nhan Ctrl+C de dung server
echo ========================================
echo.

start http://localhost:8000
python -m http.server 8000
