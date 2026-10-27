@echo off
chcp 65001 >nul
echo ========================================================
echo   TICKETS UA AGENT DESK - ВІДПРАВКА НА GITHUB
echo ========================================================
echo.

set GIT_EXE="C:\Users\QUBE\.gemini\antigravity\scratch\mingit\cmd\git.exe"

set /p TOKEN="Введіть ваш GitHub Personal Access Token (ghp_...): "
if "%TOKEN%"=="" (
    echo [ПОМИЛКА] Токен не введено. Скасовано.
    pause
    exit /b
)

echo.
echo [1/3] Перевірка файлів...
%GIT_EXE% add .
%GIT_EXE% commit -m "Update Tickets UA Agent Dashboard" >nul 2>&1

echo [2/3] Відправка у репозиторій tickets-ua-agent-desk...
%GIT_EXE% push https://%TOKEN%@github.com/vologymyrgii2004-lang/tickets-ua-agent-desk.git main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   [УСПІХ!] Файли успішно відправлено на GitHub!
    echo ========================================================
) else (
    echo.
    echo [ПОМИЛКА] Не вдалося відправити. Перевірте правильність токена.
)

echo.
pause
