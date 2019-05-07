@echo off 
echo HOLA MUNDO 
sfdx force:auth:web:login -h -a test1 -r https://test.salesforce.com
pause>nul 
exit