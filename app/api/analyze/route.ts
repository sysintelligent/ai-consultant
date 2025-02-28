import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { url, instructions } = body

    // Mock analysis result - in a real app, you'd process the URL here
    const mockAnalysis = `
      <h2>Analysis of: ${url}</h2>
      <h3>Instructions</h3>
      <p>${instructions}</p>
      <h3>Key Findings</h3>
      <ul>
        <li>Mock finding 1: Lorem ipsum dolor sit amet</li>
        <li>Mock finding 2: Consectetur adipiscing elit</li>
        <li>Mock finding 3: Sed do eiusmod tempor incididunt</li>
      </ul>
      <h3>Recommendations</h3>
      <p>Based on our analysis, we recommend the following actions:</p>
      <ol>
        <li>First recommended action item</li>
        <li>Second recommended action item</li>
        <li>Third recommended action item</li>
      </ol>
    `

    return NextResponse.json({ html: mockAnalysis })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to analyze' }, { status: 500 })
  }
} 