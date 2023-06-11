import { parentPort, threadId, Worker} from "worker_threads"

parentPort.addListener("message", (message)=>{
    for(let i = 0; i < message; i++){
        console.log(`thread${threadId} send message ${i}`)
        parentPort.postMessage(i)
    }
    parentPort.close()
})