"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class FlightController {
    //* DI
    constructor() {
        //metodo para obtener todo los elementos que estan en deleted=false
        this.getActiveFlights = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const activeFlights = yield postgres_1.prisma.flight.findMany({
                where: {
                    deleted: false,
                },
            });
            return res.json(activeFlights);
        });
        //metodo para convertir deleted=true
        this.softDeleteFlight = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const flight = yield postgres_1.prisma.flight.findFirst({
                where: { code: id },
            });
            if (!flight) {
                return res.status(404).json({ error: `Flight with code ${id} not found` });
            }
            // const softDeletedFlight = await prisma.flight.update({
            //   where: { code: id },
            //   data: {
            //     reason: req.body.reason,
            //     deleted: true,
            //   },
            // })
            // console.log(req.body)
            return res.json({
                message: 'Flight with code ' + id + ' has been soft deleted',
            });
        });
        //metodo para obtener todo los elementos que estan en deleted=true
        this.getDeletedFlight = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const deletedFlights = yield postgres_1.prisma.flight.findMany({
                where: {
                    deleted: true,
                },
            });
            return res.json(deletedFlights);
        });
        //metodo para convertir deleted=false
        this.softActivateFlight = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const functio = yield postgres_1.prisma.flight.findFirst({
                where: { code: id },
            });
            if (!functio) {
                return res.status(404).json({ error: `Flight with code ${id} not found` });
            }
            const softActivateFlight = yield postgres_1.prisma.flight.update({
                where: { id },
                data: {
                    deleted: false,
                },
            });
            return res.json(softActivateFlight);
        });
        //metodo para obtener todos
        this.getFlights = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const functions = yield postgres_1.prisma.flight.findMany();
            return res.json(functions);
        });
        //metodo para obtener uno porId
        this.getFlightById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id)) {
                return res.status(400).json({ error: 'id must be a valid number' });
            }
            const flight = yield postgres_1.prisma.flight.findFirst({
                where: { code: id },
            });
            flight
                ? res.json(flight)
                : res.status(404).json({ error: `flight with id ${id} not found` });
        });
        //metodo para crear flight
        this.createFlight = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createFlightDto] = dtos_1.CreateFlightDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const flightExists = yield postgres_1.prisma.flight.findFirst({
                where: { code: createFlightDto.code },
            });
            if (flightExists)
                return res.status(400).json({ error: 'Flight already exists' });
            const rest = __rest(createFlightDto, []);
            const flight = yield postgres_1.prisma.flight.create({
                data: rest,
            });
            res.json(flight);
        });
        //método para actualizar 'function'
        this.updateFlight = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateFlightDto] = dtos_1.UpdateFlightDto.update(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const flight = yield postgres_1.prisma.flight.findFirst({
                where: { id },
            });
            if (!flight)
                return res.status(404).json({ error: `flight with code ${id} not found` });
            const updatedFlight = yield postgres_1.prisma.flight.update({
                where: { id },
                data: updateFlightDto.values,
            });
            res.json(updatedFlight);
        });
        //metodo para eliminar de la bd
        this.deleteFunction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const functio = yield postgres_1.prisma.flight.findFirst({
                where: { id },
            });
            if (!functio)
                return res.status(404).json({ error: `function with id ${id} not found` });
            const deleted = yield postgres_1.prisma.flight.delete({
                where: { id },
            });
            deleted
                ? res.json(deleted)
                : res.status(400).json({ error: `function with id ${id} not found` });
        });
    }
}
exports.FlightController = FlightController;
