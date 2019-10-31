document.addEventListener("DOMContentLoaded", () => {
    let DEFINE = {
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
    document.getElementById("export").addEventListener("click", () => {
        DEFINE.id = document.getElementById("id").value;
        DEFINE.name = document.getElementById("name").value;
        DEFINE.icon = document.getElementById("icon").value;
        DEFINE.version = document.getElementById("version").value;
        DEFINE.author = document.getElementById("author").value;
        DEFINE.view = document.getElementById("view").value;
        DEFINE.script = document.getElementById("script").value;
        DEFINE.css = document.getElementById("css").value;

        DEFINE.support.darkmode = document.getElementById("darkmode").checked;
        DEFINE.support.resize = document.getElementById("resize").checked;
        DEFINE.support.fullscreen = document.getElementById("fullscreen").checked;
        DEFINE.support.multiple = document.getElementById("multiple").checked;

        DEFINE.size.width = document.getElementById("width").value;
        DEFINE.size.height = document.getElementById("height").value;

        var blob = new Blob([ JSON.stringify(DEFINE, null, 4) ], { type: "application/json" });
        document.getElementById("export").href = URL.createObjectURL(blob);
        document.getElementById("export").download = "define.json";
    })
});
