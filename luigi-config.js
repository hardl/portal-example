//you can now use ES6 goodies here
Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        hideFromNav: true,
        children: [
          {
            category: { label: 'Links', icon: 'cloud' },
            pathSegment: 'luigi',
            label: 'Luigi Project',
            isolateView: true,
            viewUrl: 'https://luigi-project.io/',
            loadingIndicator: {
              enabled: false
            }
          },
        ]
      }
    ]
  },
  routing: {
    useHashRouting: true
  },
  settings: {
    appLoadingIndicator: {
      hideAutomatically: true
    }
  }
});