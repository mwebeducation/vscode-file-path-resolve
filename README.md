## The project structure is:

src -- 
    app.js 
    controllers -- 
                  index.js
                  controller.js
    helpers     -- 
                  index.js
                  helpFun1.js
                  helpFun2.js
                  helpFun3.js
    models      -- 
                  index.js 
                  Model.js 
jsconfig.json 
package.json 
README.md 
server.js 
yarn.lock 

___ 

### First of all, look at the **app.js** file in **src**

See how custom modules are imported. You will notice @helpers, @controllers in the file path field

- eg import *something* from *"@someCustomPath"*
- 

You will need to create a jsconfig file to include the file path name you have customized in the full file path.

___ 

### Second, look at **jsconfig.json** 

In the **paths** of **compilerOptions** you will find ***{name: filePath}***

___

Now you will understand how to use custom name instead of full file path.

> Note that this method can only be worked in the visual studio code editor.