@echo off 
echo HOLA MUNDO 
sfdx force:auth:web:login -a test1 -r https://test.salesforce.com
pause>nul 
exit