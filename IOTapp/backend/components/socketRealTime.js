const express = require("express");
const mongoose=require('mongoose')
const socketIo = require("socket.io");
const http = require("http");
let sensorChange = mongoose.model('humidities')




function realTime(app) {
    const server = http.createServer(app);
    server.listen(8080, "127.0.0.1")
    const io = socketIo(server);

    // let interval;
    // io.origins('*:*')
    io.on("connection", (socket) => {
        console.log("in io")
        // console.log("New client connected");
        // if (interval) {
        //     clearInterval(interval);
        // }
        // interval = setInterval(() => getApiAndEmit(socket), 1000);
        // socket.on("disconnect", () => {
        //     console.log("Client disconnected");
        //     clearInterval(interval);
        // });

        getApiAndEmit(socket)

        socket.on('disconnect', () => {
            io.emit('user disconnected');
          });
    });

    const getApiAndEmit = socket => {
        // const response = 0;
        // Emitting a new message. Will be consumed by the client
        console.log("getApiAndEmit")
        sensorChange.watch().on("change", ()=>{
            socket.emit("FromAPI", true);
        })
    };
}

module.exports = { realTime };
