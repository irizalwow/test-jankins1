@echo off 
echo HOLA MUNDO 
::sfdx force:auth:jwt:grant --setalias test1Salesforce --clientid 3MVG9T46ZAw5GTfUYFyrMkxQSft.VcPV_L2gLv8P39ZWN6ifSNkoPSM7CCS8GRbALrcMKCqSDDh6O1P4OH2UF --jwtkeyfile C:\_Jairo\SALESFOrCE\DX\certificados\certificates\server.key --username jairo.cordero.masero@bluewolf.com --instanceurl https://jcm-bluewolf1-dev-ed.my.salesforce.com/
sfdx force:mdapi:retrieve -r C:\001_GIT\RETRIEVE -k C:\001_GIT\RETRIEVE\package.xml -u test1Salesforce
sfdx force:mdapi:convert -r C:\001_GIT\RETRIEVE\unpackage.zip -k C:\001_GIT\RETRIEVE\source -u test1Salesforce

pause>nul 
exit