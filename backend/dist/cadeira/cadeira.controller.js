"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadeiraController = void 0;
const common_1 = require("@nestjs/common");
const cadeira_entity_1 = require("./cadeira.entity");
const cadeira_service_1 = require("./cadeira.service");
let CadeiraController = class CadeiraController {
    constructor(cadeiraService) {
        this.cadeiraService = cadeiraService;
    }
    verCadeiras() {
        return this.cadeiraService.pegarCadeiras();
    }
    verCadeira(id) {
        return this.cadeiraService.encontrarCadeira(id);
    }
    async criarCadeira(cadeira) {
        return this.cadeiraService.criarCadeira(cadeira);
    }
    async deletarCadeira(id) {
        return this.cadeiraService.removerCadeira(id);
    }
    async atualizarCadeira(cadeira) {
        return this.cadeiraService.atualizarCadeira(cadeira);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CadeiraController.prototype, "verCadeiras", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CadeiraController.prototype, "verCadeira", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cadeira_entity_1.Cadeira]),
    __metadata("design:returntype", Promise)
], CadeiraController.prototype, "criarCadeira", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CadeiraController.prototype, "deletarCadeira", null);
__decorate([
    common_1.Patch(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cadeira_entity_1.Cadeira]),
    __metadata("design:returntype", Promise)
], CadeiraController.prototype, "atualizarCadeira", null);
CadeiraController = __decorate([
    common_1.Controller('cadeira'),
    __metadata("design:paramtypes", [cadeira_service_1.CadeiraService])
], CadeiraController);
exports.CadeiraController = CadeiraController;
//# sourceMappingURL=cadeira.controller.js.map