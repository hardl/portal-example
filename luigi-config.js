Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            category: { label: 'Links', icon: 'cloud' },
            label: 'Luigi Project',
            externalLink: {
              url: 'https://luigi-project.io/'
            }
          },
          {
            category: 'Links',
            label: 'Angular',
            externalLink: {
              url: 'https://angular.io/'
            }
          }
        ]
      }
    ]
  },
  settings: {
    header: {
      title: 'Luigi Angular App',
      logo: '/logo.svg'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
