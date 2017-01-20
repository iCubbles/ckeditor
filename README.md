## ckeditor

This webpackage contains components that wraps [CKEditor][ckeditor].

## Docs
The generated documentation for this webpackage and its artifacts is available [here][wpDocs].

## Artifacts of the webpackage
| Name | Type | Description | Links |
|--------------------------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| **cubx-ckeditor** | Elementary component | Wrap the CKEditor, it should be configurated using the config slot, otherwise it would not work | [Demo][demoCke], [Docs][docsCke] |
| **cubx-ckeditor-basic** | Compound component | Compound to make use of the [basic][ckeDownload] package of ckeditor  | [Demo][demoCkeB], [Docs][docsCkeB] |
| **cubx-ckeditor-standard** | Compound component | Compound to make use of the [standard][ckeDownload] package of ckeditor  | [Demo][demoCkeS], [Docs][docsCkeS] |
| **cubx-ckeditor-full** | Compound component | Compound to make use of the [full][ckeDownload] package of ckeditor  | [Demo][demoCkeF], [Docs][docsCkeF] |
| **cubx-ckeditor-util** | Compound component | Utility to provide the CKEditor v 4.6.1 within the Cubbles platform| |

## Use of components

The html file should contain the desire component using its tag, e.g. the `<cubx-ckeditor>`, as follows:

```html
<cubx-ckeditor cubx-webpackage-id="ckeditor@1.0.0-SNAPSHOT"></cubx-ckeditor>
```
Note that the `webpackageId` should be provided, which in this case is: `ckeditor@1.0.0-SNAPSHOT`

Additionally, this component can be initialized using the `<cubx-core-slot-init>` tag (available from _cubx.core.rte_ version 1.9.0). For example, lets initilize the `config` slot to get the basic package of ckeditor:

```html
<cubx-ckeditor cubx-webpackage-id="ckeditor@1.0.0-SNAPSHOT">
        <!--Initilization-->
        <cubx-core-init>
                <cubx-core-slot-init slot="config">{"toolbar": [{ "name": "basicstyles", "items": [ "Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript", "-", "CopyFormatting", "RemoveFormat" ] }]}</cubx-core-slot-init>
        </cubx-core-init>
</cubx-ckeditor>
```
Or it can be initialized and later manipulated from Javascript as follows:

```javascript
var ckeditor= document.querySelector('cubx-editor');

// Wait until CIF is ready
document.addEventListener('cifReady', function() {
	// Manipulate slots
	ckeditor.setConfig({"toolbar": [{ "name": "basicstyles", "items": [ "Bold", "Italic", "Underline", "Strike", "Subscript",     "Superscript", "-", "CopyFormatting", "RemoveFormat" ] }]});
});
```
You may also like to check [CKEditor official documentation][ckeOfDoc].

[Want to get to know the Cubbles Platform?](https://cubbles.github.io)

[ckeditor]: http://ckeditor.com/
[ckeOfDoc]: http://docs.ckeditor.com/
[ckeDownload]: http://ckeditor.com/download
[wpDocs]: https://cubbles.world/shared/ckeditor@1.0.0-SNAPSHOT/docs/index.html

[demoCke]: https://cubbles.world/shared/ckeditor@1.0.0-SNAPSHOT/cubx-ckeditor/demo/index.html
[docsCke]: https://cubbles.world/shared/ckeditor@1.0.0-SNAPSHOT/cubx-ckeditor/docs/index.html

[demoCkeB]: https://cubbles.world/shared/ckeditor@1.0.0-SNAPSHOT/cubx-ckeditor-basic/demo/index.html
[docsCkeB]: https://cubbles.world/shared/ckeditor@1.0.0-SNAPSHOT/cubx-ckeditor-basic/docs/index.html

[demoCkeS]: https://cubbles.world/shared/ckeditor@1.0.0-SNAPSHOT/cubx-ckeditor-standard/demo/index.html
[docsCkeS]: https://cubbles.world/shared/ckeditor@1.0.0-SNAPSHOT/cubx-ckeditor-standard/docs/index.html

[demoCkeF]: https://cubbles.world/shared/ckeditor@1.0.0-SNAPSHOT/cubx-ckeditor-full/demo/index.html
[docsCkeF]: https://cubbles.world/shared/ckeditor@1.0.0-SNAPSHOT/cubx-ckeditor-full/docs/index.html
