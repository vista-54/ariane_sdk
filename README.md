# Ariane SDK
The Ariane SDK give ability to developer call access limited functional without any authorizations steps
# Description
The src folder consist of 2 main folders: sdk and assets.
SDK this is a TypeScript module with all logic, assets folder has images.
# Get Started
1. Run command:
```
git clone https://github.com/vista-54/ariane_sdk.git
```
2. Copy sdk folder to your main app folder:
```
* src/
  * app/
      * sdk(here)
  * assets/
      * sdk(assets)
```
3. Add Sdk module to app app-routing.module.ts:

``` {path: 'sdk', loadChildren: () => import('./sdk/sdk.module').then(m => m.SdkModule)}```

4. Call module. Email and Supplier ID are required params.

```http://localhost/sdk?email={{email}}&supplier_id={{supplierID}}```

5. For correct works with tutorial page with iOS add to config.xml:
 ```
 <allow-intent href="http://*/*" launch-external="yes" />
 <allow-intent href="https://*/*" launch-external="yes" />
 <allow-navigation href="*" />
   ```
 # Note
 
 Exit button doesn't work on iOS. The shut down of app programmatically is disallowed by apple:
 https://developer.apple.com/library/archive/qa/qa1561/_index.html