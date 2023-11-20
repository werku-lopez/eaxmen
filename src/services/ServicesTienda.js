import Global from "@/Global";
import axios from "axios";

export default class ServiceTienda {
    getAllCubos() {
        return new Promise((resolve) => {
            var request = "api/cubos";
            var url = Global.apiTienda + request;
            var cubos = [];

            axios.get(url).then((response) => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    getAllMarcas() {
        return new Promise((resolve) => {
            var request = "api/cubos/marcas";
            var url = Global.apiTienda + request;

            var marcas = [];
            axios.get(url).then((response) => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }
    getCuboById(idCubo) {
        return new Promise((resolve) => {
            var request = 'api/comentariocubos/getcomentarioscubo/' + idCubo;
            var url = Global.apiTienda + request;
            var cubo = {};
            axios.get(url).then((response) => {
                cubo = response.data;
                resolve(cubo);
            })
        })
    }

    logIn(auth) {
        return new Promise((resolve) => {
            var dataJON = JSON.stringify(auth);
            var request = 'api/manage/login';
            var config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            var url = Global.apiTienda + request;
            var user = {};
            axios.post(url, dataJON, config).then((response) => {
                user = response.data;
                resolve(user);
            })
        })
    }

    getCubosMarca(marca) {
        return new Promise((resolve) => {
            var request = 'api/cubos/cubosmarca/' + marca;
            var url = Global.apiTienda + request;

            var cubos = [];

            axios.get(url).then((response) => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }
}