"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TipTapEditor from "@/components/tiptap-editor"
import { generateReport } from "@/lib/report-generator"

type Topic = "History" | "Technology" | "Science" | "Literature" | "Philosophy"

export default function ReportGenerator() {
  const [topic, setTopic] = useState<Topic>("Technology")
  const [editorContent, setEditorContent] = useState("")
  const [generatedReport, setGeneratedReport] = useState("")
  const [url, setUrl] = useState("")
  const [instructions, setInstructions] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerateReport = () => {
    const report = generateReport(topic)
    setGeneratedReport(report)
    setEditorContent(report)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, instructions }),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze')
      }

      const data = await response.json()
      setEditorContent(data.html)
    } catch (error) {
      console.error('Error:', error)
      setError('Failed to analyze the URL. Please try again.')
      setEditorContent('<p>Failed to analyze the URL. Please try again.</p>')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Consultant Report Generator</h1>
          <p className="text-muted-foreground">
            Generate professional consultant reports or create your own using our rich text editor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_300px]">
          <Card className="order-2 md:order-1">
            <CardContent className="p-6">
              <Tabs defaultValue="editor" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="editor">Editor</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="editor" className="space-y-4">
                  <div className="space-y-4 p-4 border rounded-md bg-muted/30">
                    {error && (
                      <div className="text-sm text-red-500 mb-2">
                        {error}
                      </div>
                    )}
                    <div className="space-y-2">
                      <label htmlFor="url" className="text-sm font-medium">
                        URL to Analyze
                      </label>
                      <Input
                        id="url"
                        placeholder="https://example.com/article-to-analyze"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="instructions" className="text-sm font-medium">
                        Analysis Instructions
                      </label>
                      <Textarea
                        id="instructions"
                        placeholder="Provide instructions for analyzing the content (e.g., 'Summarize key points', 'Identify market trends', etc.)"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <Button 
                      onClick={handleSubmit} 
                      disabled={!url.trim() || isLoading} 
                      className="w-full"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin">⏳</span> 
                          Analyzing...
                        </span>
                      ) : (
                        "Analyze URL"
                      )}
                    </Button>
                  </div>
                  <TipTapEditor content={editorContent} onChange={setEditorContent} />
                </TabsContent>
                <TabsContent value="preview" className="min-h-[500px]">
                  <div
                    className="prose max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: editorContent }}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="order-1 md:order-2">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Generate Report</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="topic" className="text-sm font-medium">
                    Topic
                  </label>
                  <Select value={topic} onValueChange={(value) => setTopic(value as Topic)}>
                    <SelectTrigger id="topic">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="History">History</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Science">Science</SelectItem>
                      <SelectItem value="Literature">Literature</SelectItem>
                      <SelectItem value="Philosophy">Philosophy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full" onClick={handleGenerateReport}>
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}

