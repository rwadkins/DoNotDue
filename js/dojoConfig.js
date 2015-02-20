window.dojoConfig = {
    has: { deviceReady: false },
    baseUrl: "/js/src",
    packages: [
        {name: "dnd", location: "dnd"},
        {name: "vendor", location: "vendor/"},
        {name: "dojo", location: "dojo"},
        {name: "dijit", location: "dijit"}
    ],
    async: true,
    parseOnLoad: false,
    cacheBust: false,
    //deviceReady: true
};
