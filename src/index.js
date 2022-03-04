/* eslint-disable import/no-extraneous-dependencies */

import { graphql } from 'gatsby'

export const query = (graphql`
query b {
  swapi {
    pages {
        nodes {
          content
          uri
          title
        }
      }
  }
}


`)
exports.createPages = async ({ graphql, actions }) => {
    const {data} = await graphql(`
     ${query}
    `)

    data.swapi.pages.nodes.forEach(page => {
        actions.createPages({
            path:`/${page.uri}`,
            component: path.resolve(`./src/intern.js`),
            context:{
                ...page,
                content:page.content,
            },
        })
    });
  
}



