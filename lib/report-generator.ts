type Topic = "History" | "Technology" | "Science" | "Literature" | "Philosophy"

const reportTemplates = {
  History: [
    {
      title: "Historical Analysis: The Industrial Revolution",
      intro:
        "<p>This report examines the socioeconomic impact of the Industrial Revolution across Europe and North America during the 18th and 19th centuries.</p>",
      sections: [
        "<h2>Executive Summary</h2><p>The Industrial Revolution represents one of the most transformative periods in human history, fundamentally altering economic structures, social hierarchies, and technological capabilities. This analysis provides stakeholders with a comprehensive understanding of how these historical changes continue to influence modern business environments.</p>",
        "<h2>Key Findings</h2><ul><li>The transition from agrarian to industrial economies created unprecedented economic growth</li><li>Urbanization rates increased dramatically, creating new consumer markets</li><li>Technological innovation accelerated, establishing patterns that continue today</li><li>New social classes emerged, reshaping political and economic power structures</li></ul>",
        "<h2>Recommendations</h2><p>Understanding historical patterns of industrial development provides valuable insights for modern business strategy. Organizations should:</p><ul><li>Recognize parallels between historical industrial transitions and current digital transformation</li><li>Anticipate social impacts of technological disruption</li><li>Develop strategies that account for long-term historical economic cycles</li></ul>",
      ],
      conclusion:
        "<p>Historical analysis reveals that periods of rapid technological change create both unprecedented opportunities and significant disruption. By understanding these patterns, organizations can better position themselves to navigate current transformations in the global economy.</p>",
    },
  ],
  Technology: [
    {
      title: "Technology Assessment: AI Implementation Strategy",
      intro:
        "<p>This report evaluates artificial intelligence implementation strategies for enterprise organizations seeking competitive advantage through automation and enhanced decision-making capabilities.</p>",
      sections: [
        "<h2>Executive Summary</h2><p>Artificial intelligence represents a transformative technology with significant implications for organizational efficiency, product development, and customer experience. This assessment provides a framework for evaluating AI implementation options and developing a strategic roadmap for adoption.</p>",
        "<h2>Key Findings</h2><ul><li>Organizations implementing AI solutions report 15-35% improvements in operational efficiency</li><li>Successful AI adoption requires significant data infrastructure investment</li><li>Integration challenges represent the primary barrier to effective implementation</li><li>Ethical considerations and regulatory compliance remain critical concerns</li></ul>",
        "<h2>Recommendations</h2><p>Based on our analysis, we recommend a phased approach to AI implementation:</p><ul><li>Begin with clearly defined use cases that deliver measurable ROI</li><li>Invest in data quality and governance infrastructure</li><li>Develop internal AI literacy through training programs</li><li>Establish ethical guidelines and compliance frameworks</li></ul>",
      ],
      conclusion:
        "<p>AI implementation represents both significant opportunity and substantial organizational challenge. Organizations that approach adoption strategically, with clear use cases and robust implementation frameworks, will be best positioned to realize competitive advantages while minimizing disruption.</p>",
    },
  ],
  Science: [
    {
      title: "Scientific Research Analysis: Climate Adaptation Strategies",
      intro:
        "<p>This report synthesizes current scientific research on climate adaptation strategies for businesses operating in regions facing increased environmental volatility.</p>",
      sections: [
        "<h2>Executive Summary</h2><p>Climate change presents unprecedented challenges to business operations, supply chains, and risk management. This analysis examines evidence-based adaptation strategies derived from current scientific research to help organizations build resilience against environmental disruption.</p>",
        "<h2>Key Findings</h2><ul><li>Climate volatility is increasing operational disruptions across multiple sectors</li><li>Proactive adaptation strategies demonstrate superior cost-effectiveness compared to reactive approaches</li><li>Diversified supply chains show greater resilience to environmental disruption</li><li>Infrastructure hardening investments deliver measurable ROI in high-risk regions</li></ul>",
        "<h2>Recommendations</h2><p>Scientific evidence supports the following adaptation strategies:</p><ul><li>Conduct comprehensive climate risk assessments across operations</li><li>Implement redundancy in critical supply chain components</li><li>Invest in infrastructure improvements in vulnerable locations</li><li>Develop scenario-based contingency plans for major disruption events</li></ul>",
      ],
      conclusion:
        "<p>Scientific research clearly indicates that climate adaptation represents a critical business imperative rather than an optional consideration. Organizations implementing evidence-based adaptation strategies will maintain competitive advantage through enhanced operational resilience and reduced disruption costs.</p>",
    },
  ],
  Literature: [
    {
      title: "Narrative Analysis: Organizational Storytelling",
      intro:
        "<p>This report examines how principles from literary analysis can enhance organizational communication, brand development, and customer engagement through strategic storytelling.</p>",
      sections: [
        "<h2>Executive Summary</h2><p>Narrative structures fundamentally shape how humans process information and make decisions. This analysis applies literary theory to organizational communication, demonstrating how strategic storytelling can enhance brand perception, employee engagement, and customer loyalty.</p>",
        "<h2>Key Findings</h2><ul><li>Organizations with coherent narrative identities demonstrate stronger brand recognition</li><li>Narrative-based marketing content generates 22% higher engagement than feature-focused content</li><li>Internal organizational narratives significantly impact employee retention and satisfaction</li><li>Consistent narrative frameworks improve stakeholder understanding of complex initiatives</li></ul>",
        "<h2>Recommendations</h2><p>To leverage narrative principles effectively, organizations should:</p><ul><li>Develop core organizational narratives that align with strategic objectives</li><li>Train leadership in narrative communication techniques</li><li>Implement storytelling frameworks in marketing and customer engagement</li><li>Use narrative structures to communicate change initiatives</li></ul>",
      ],
      conclusion:
        "<p>Literary analysis provides valuable frameworks for enhancing organizational communication at all levels. By implementing strategic storytelling approaches, organizations can create more compelling customer experiences, more engaged workforces, and more distinctive brand identities in competitive markets.</p>",
    },
  ],
  Philosophy: [
    {
      title: "Ethical Framework Analysis: AI Governance",
      intro:
        "<p>This report develops a philosophical framework for ethical AI governance, addressing key ethical considerations for organizations implementing artificial intelligence systems.</p>",
      sections: [
        "<h2>Executive Summary</h2><p>As AI systems become increasingly integrated into critical business functions, organizations face complex ethical challenges regarding transparency, accountability, and potential societal impacts. This analysis applies philosophical frameworks to develop practical governance approaches for responsible AI implementation.</p>",
        "<h2>Key Findings</h2><ul><li>Utilitarian approaches to AI ethics often overlook important distributional concerns</li><li>Deontological frameworks provide valuable constraints for algorithmic decision-making</li><li>Virtue ethics offers guidance for organizational AI culture development</li><li>Stakeholder theory provides effective frameworks for balancing competing interests</li></ul>",
        "<h2>Recommendations</h2><p>Based on philosophical analysis, we recommend organizations:</p><ul><li>Develop explicit ethical principles for AI development and deployment</li><li>Implement ethics review processes for high-risk AI applications</li><li>Create transparent documentation of algorithmic decision-making processes</li><li>Establish governance structures with diverse stakeholder representation</li></ul>",
      ],
      conclusion:
        "<p>Philosophical frameworks provide essential guidance for navigating the complex ethical terrain of AI implementation. Organizations that proactively develop robust ethical governance structures will minimize risks while building stakeholder trust in their AI systems.</p>",
    },
  ],
}

export function generateReport(topic: Topic): string {
  const templates = reportTemplates[topic]
  const template = templates[Math.floor(Math.random() * templates.length)]

  let report = `<h1>${template.title}</h1>`
  report += template.intro

  template.sections.forEach((section) => {
    report += section
  })

  report += template.conclusion

  return report
}

