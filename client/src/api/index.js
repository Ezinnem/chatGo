var socket = new WebSocket('ws://localhost:9000/ws');


let connect = (cb) => {
    console.log("Connecting...")

    socket.onopen = () => {
        console.log("Successfully connected...")
    }

    socket.onmessage = (msg) => {
        console.log("Message from websocket:", msg)
    }

    socket.onclose = (event) => {
        console.log("Socket closed connection:", event)
    }

    socket.onerror = (error) => {
        console.log("An error occured:", error)
    }


}

let sendMsg = (msg) => {
    console.log("Sending Msg:", msg);

    socket.send(msg)
}

export {connect, sendMsg}