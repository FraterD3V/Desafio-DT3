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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cadeira = void 0;
const typeorm_1 = require("typeorm");
let Cadeira = class Cadeira {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Cadeira.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cadeira.prototype, "modelo", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], Cadeira.prototype, "preco", void 0);
__decorate([
    typeorm_1.Column({ length: 5000 }),
    __metadata("design:type", String)
], Cadeira.prototype, "descricao", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cadeira.prototype, "urlImg", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], Cadeira.prototype, "disponivel", void 0);
Cadeira = __decorate([
    typeorm_1.Entity()
], Cadeira);
exports.Cadeira = Cadeira;
//# sourceMappingURL=cadeira.entity.js.map