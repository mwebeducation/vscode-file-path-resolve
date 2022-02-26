### First of all, look at the **app.js </br>** file in **src**

See how custom modules are imported. You will notice @helpers, @controllers in the file path field

- eg import *something* from *"@someCustomPath"*
- 

You will need to create a jsconfig file to include the file path name you have customized in the full file path.

___ 

### Second, look at **jsconfig.js </br>on** 

In the **paths** of **compilerOptions** you will find ***{name: filePath}***

___

Now you will understand how to use custom name instead of full file path.

> Note that this method can only be worked in the visual studio code editor.