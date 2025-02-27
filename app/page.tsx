import ReportGenerator from "@/components/report-generator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consultant Report Generator",
  description: "Generate professional consultant reports with ease",
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ReportGenerator />
    </div>
  )
}

