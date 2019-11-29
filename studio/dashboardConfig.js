export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de0a0eafb96068e4ef8d572',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2yxe8e9q',
                  apiId: '99d00c06-e6d4-405b-bded-18024bb8c0de'
                },
                {
                  buildHookId: '5de0a0eac2685ae36e15f249',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-oorp142a',
                  apiId: 'd90efdfe-2474-4afc-84fc-b48b503b2d6c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/locnguyenreactplus/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-oorp142a.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
