export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              CR
            </div>
            <span className="font-semibold">ConsultReport</span>
          </div>

          <div className="text-sm text-muted-foreground">© {currentYear} ConsultReport. All rights reserved.</div>

          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

