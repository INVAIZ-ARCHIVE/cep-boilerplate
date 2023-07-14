xcopy /E /I /Y jsxbin %userprofile%\AppData\Roaming\Adobe\CEP\extensions\invaiz-test\jsxbin
xcopy /E /I /Y host %userprofile%\AppData\Roaming\Adobe\CEP\extensions\invaiz-test\host
xcopy /E /I /Y CSXS %userprofile%\AppData\Roaming\Adobe\CEP\extensions\invaiz-test\CSXS
xcopy /E /I /Y client\dist %userprofile%\AppData\Roaming\Adobe\CEP\extensions\invaiz-test\client\dist
copy client\index.html %userProfile%\AppData\Roaming\Adobe\CEP\extensions\invaiz-test\client
copy client\CSInterface.js %userProfile%\AppData\Roaming\Adobe\CEP\extensions\invaiz-test\client

copy ".debug" %userProfile%\AppData\Roaming\Adobe\CEP\extensions\invaiz-test