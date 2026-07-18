import {NextRequest} from "next/server"

export async function POST(request) {
    let data = await request.json() //receiving data sent to server
    console.log(data)
    return NextRequest.json({success: "true", data: data})
}

// here, NextRequest is an object used to return the data from the server. We parse it into json here.

// user will receive "success: true, data: yes"

// similiarly to this, GET, PUT, DELETE and PATCH request can also be made