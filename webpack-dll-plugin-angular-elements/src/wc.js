function loader(src) {
    if (!loader.srcs) loader.srcs = [];

    if (loader.srcs.indexOf(src) != -1) {
        return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
        loader.srcs.push(src);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
    });

}


Promise.resolve()
    .then(() => loader("/core_js.dll.js"))
    .then(() => loader("/rxjs.dll.js"))
    .then(() => loader("/angular_core.dll.js"))
    .then(() => loader("/angular_common.dll.js"))
    .then(() => loader("/angular_platform_browser.dll.js"))
    .then(() => loader("/angular_elements.dll.js"))
    .then(() => loader("/scripts.js"))
    .then(() => loader("/main.js"))
    .then(() => {

        /* component is loaded */

    })
