import { NextRequest } from "next/server";

export function GET() {
    return new Response("Hello, Next.js!");
}

export async function POST(req: NextRequest) {
    const body = await req.text();
    
    return new Response(`Hello, ${body}!`);
}