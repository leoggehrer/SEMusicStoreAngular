@echo off
REM Anwendung aus Unterverzeichnis starten, mit festem Parameter

dotnet run --project TemplateTools.ConApp -- 4,7,x,x
cls
dotnet run --project TemplateTools.ConApp -- 4,9,x,x
