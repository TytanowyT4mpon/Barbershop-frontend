import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path } = await params
    const backendUrl = process.env.BACKEND_INTERNAL_URL || 'http://backend:8000'
    const url = `${backendUrl}/media/${path.join('/')}`

    const upstream = await fetch(url)
    const contentType = upstream.headers.get('Content-Type') ?? 'image/jpeg'

    return new NextResponse(upstream.body, {
        status: upstream.status,
        headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=86400',
        },
    })
}
