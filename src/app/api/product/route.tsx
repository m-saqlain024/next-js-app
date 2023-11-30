import { NextResponse } from "next/server";

export async function GET(request : Request){
    const product ={
        name : "cigrate",
        price : 15
    }
    return NextResponse.json(product)
}