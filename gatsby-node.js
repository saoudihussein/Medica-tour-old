const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const data = await graphql(`
    query {
      swapi {
        pages(first: 100) {
            nodes {
              content
              uri
              title
              seo {
                breadcrumbs {
                  text
                  url
                }
                title
                metaDesc
                opengraphTitle
                twitterDescription
                twitterTitle
              }
              childPages {
                nodes {
                  uri
                  content
                  title
                  seo {
                    breadcrumbs {
                      text
                      url
                    }
                    metaDesc
                    opengraphTitle
                  }
                }
              }
            }
          }
      }
    }
  `)

 
  const article1 = await graphql(`
  query {
   swapi {
    posts {
      nodes {
        uri
        title
        excerpt
        date
        featuredImage {
          link
          title
        }
        content
        link
      }
    }
  }
  }
`)
 
  

article1.data.swapi.posts.nodes.forEach(data => {
    actions.createPage({
    path: `${data.uri}`,
    component: path.resolve(`./src/components/actualiteTemplate.js`),
    context: {
      ...data,
      content:data.content,
      title:data.title,
      image:data.featuredImage.link,
      datefab:data.date,
    },
    
  })

})
for(i=1;i<(article1.data.swapi.posts.nodes.length/6)+1;i++){
  actions.createPage({
    path: `${"actualites/"+i}`,
    component: path.resolve(`./src/components/actualites.js`),
    context: {
      ...article1.data.swapi.posts.nodes[i],
      data:article1.data.swapi.posts,
      indice:(i*6)-6
    },
    
  })

}
for(i=1;i<2;i++){
  actions.createPage({
    path: `${"/"}`,
    component: path.resolve(`./src/components/index1.js`),
    context: {
      ...article1.data.swapi.posts.nodes[i],
      data:article1.data.swapi.posts,
      indice:(i*3)-3
    },
    
  })

}
  data.data.swapi.pages.nodes.forEach(page => {
    actions.createPage({
      path: `${page.uri}`,
      component: path.resolve(`./src/components/intern.js`),
      context: {
        ...page,
        content:page.content,
        breadcrumbs:page.seo.breadcrumbs,
        title:page.seo.title,
        SEOTitle:page.seo.title,
        SEODescription:page.seo.metaDesc
      },
    })
  })
  data.data.swapi.pages.nodes.forEach(page1 => {

  if(page1.childPages.nodes){
    page1.childPages.nodes.forEach(page => {
    actions.createPage({
      path: `${page.uri}`,
      component: path.resolve(`./src/components/intern.js`),
      context: {
        ...page,
        content:page.content,
        breadcrumbs:page.seo.breadcrumbs,
        title:page.seo.title,
        SEOTitle:page.seo.title,
        SEODescription:page.seo.metaDesc
      },
    })
  })
  }
})

}