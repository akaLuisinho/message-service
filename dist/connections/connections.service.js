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
exports.ConnectionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const uuid_1 = require("uuid");
let ConnectionsService = class ConnectionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createConnectionDto) {
        createConnectionDto.id = (0, uuid_1.v4)();
        return await this.prisma.connection.create({ data: createConnectionDto });
    }
    async findAll() {
        return await this.prisma.connection.findMany();
    }
    async findOne(id) {
        return await this.prisma.connection.findUnique({
            where: {
                id: id,
            },
        });
    }
    async update(id, updateConnectionDto) {
        return await this.prisma.connection.update({
            where: {
                id: id,
            },
            data: updateConnectionDto,
        });
    }
    async remove(id) {
        return await this.prisma.connection.delete({
            where: {
                id: id,
            },
        });
    }
};
ConnectionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConnectionsService);
exports.ConnectionsService = ConnectionsService;
//# sourceMappingURL=connections.service.js.map