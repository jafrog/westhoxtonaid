export const extractSections = (data) => (
  data
  .allMarkdownRemark
  .edges
  .filter((edge) => (
    edge.node.parent.sourceInstanceName === "markdown-pages"
  ))
  .sort((s1, s2) => (
    s1.node.frontmatter.position - s2.node.frontmatter.position
  ))
)

export const extractResources = (data) => (
  data
  .allMarkdownRemark
  .edges
  .filter((edge) => (
    edge.node.parent.sourceInstanceName === "resources"
  ))
  .sort((s1, s2) => (
    s1.node.frontmatter.position - s2.node.frontmatter.position
  ))
  .map(e => (
    {
      title: e.node.frontmatter.title,
      html: e.node.html,
      website: e.node.frontmatter.website,
      phone: e.node.frontmatter.phone,
      section: e.node.frontmatter.section,
    }
  ))
)
