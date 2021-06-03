"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadeiraHttpModule = void 0;
const common_1 = require("@nestjs/common");
const cadeira_controller_1 = require("./cadeira.controller");
const cadeira_module_1 = require("./cadeira.module");
const cadeira_service_1 = require("./cadeira.service");
let CadeiraHttpModule = class CadeiraHttpModule {
};
CadeiraHttpModule = __decorate([
    common_1.Module({
        imports: [cadeira_module_1.CadeiraModule],
        providers: [cadeira_service_1.CadeiraService],
        controllers: [cadeira_controller_1.CadeiraController]
    })
], CadeiraHttpModule);
exports.CadeiraHttpModule = CadeiraHttpModule;
//# sourceMappingURL=cadeira-http.module.js.map