(function ($) {
    'use strict'

    let connected_ids = []

    let peer = new Peer({
        key: "ff41857f-5c18-4191-86d7-9137345c7d8b",
        serialization: "binary"
    })

    peer.on("open", () => {
        $("#my-id").text(peer.id)
    })

    peer.on("connection", (connection) => {
        connection.on("open", () => {
            console.log("remote => this")
            connection.send(Date())
        })
    })

    $(document).on("click", "#connect-button", () => {
        const connection = peer.connect($("#other-id").val())

        connection.on("open", () => {
            // connected
        })

        connection.on("data", (data) => {
            // remote => this (message)
            console.log(data)
        })
    })
})($)