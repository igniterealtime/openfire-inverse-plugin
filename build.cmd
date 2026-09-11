call mvn clean package -Dmaven.test.skip=true

cd target
rename inverse-openfire-plugin-assembly.jar inverse.jar
rd "D:\Openfire\openfire_5_1_2\plugins\inverse" /q /s
del "D:\Openfire\openfire_5_1_2\plugins\inverse.jar" 
del /q "D:\Openfire\openfire_5_1_2\logs\*.*"
copy inverse.jar D:\Openfire\openfire_5_1_2\plugins\inverse.jar

pause