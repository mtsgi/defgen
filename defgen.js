document.addEventListener("DOMContentLoaded", () => {
    const DEFINE = {
        "id": "",
        "name": "",
        "icon": "",
        "version": "",
        "author": null,
    
        "support": {
            "darkmode": false,
            "resize": false,
            "fullscreen": false,
            "multiple": false
        },
    
        "size": {
            "width": null,
            "height": null
        },
    
        "view": "",
        "script": "",
        "css": ""
    }
    document.querySelector('#export').addEventListener("click", () => {
        DEFINE.id = document.querySelector('#id').value;
        DEFINE.name = document.querySelector('#name').value;
        DEFINE.icon = document.querySelector('#icon').value;
        DEFINE.version = document.querySelector('#version').value;
        DEFINE.author = document.querySelector('#author').value;
        DEFINE.view = document.querySelector('#view').value;
        DEFINE.script = document.querySelector('#script').value;
        DEFINE.css = document.querySelector('#css').value;

        DEFINE.support.darkmode = document.querySelector('#darkmode').checked;
        DEFINE.support.resize = document.querySelector('#resize').checked;
        DEFINE.support.fullscreen = document.querySelector('#fullscreen').checked;
        DEFINE.support.multiple = document.querySelector('#multiple').checked;

        DEFINE.size.width = document.querySelector('#width').value || 'auto';
        DEFINE.size.height = document.querySelector('#height').value || 'auto';

        var blob = new Blob([ JSON.stringify(DEFINE, null, 4) ], { type: "application/json" });
        document.querySelector('#export').href = URL.createObjectURL(blob);
        document.querySelector('#export').download = "define.json";
    })
});
