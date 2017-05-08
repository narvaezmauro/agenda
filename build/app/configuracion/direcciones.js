"use strict";
var _1 = require("@angular/core/");
exports.Direcciones = new _1.OpaqueToken('Direcciones');
exports.ProveedorDirecciones = {
    provide: exports.Direcciones,
    useValue: {
        servidor: 'http://localhost:3004',
        faker: 'http://faker.hook.io/?property=image.avatar'
    }
};
//# sourceMappingURL=direcciones.js.map