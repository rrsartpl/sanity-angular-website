export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'rrsartpl/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '635c22521f72161f793f1cae',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-r7chysku',
                  apiId: '958f7dc8-1100-44c5-aaed-82c2abe24044'
                },
                {
                  buildHookId: '635c2252be39492afa1bbea3',
                  title: 'Website',
                  name: 'sanity-angular-website-web-8u4ts92k',
                  apiId: '8ca6fe92-4e31-46f6-b798-eda66e6a4534'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rrsartpl/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-8u4ts92k.netlify.app', category: 'apps'}
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
