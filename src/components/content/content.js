const Content = [
  {
    id: 1,
    title: 'My Spotify Dashboard',
    img: require('../images/spotify.png'),
    description: `My Spotify Dashboard is a Full-Stack React application that leverages Spotify's API to display information about the user's listening habits. The user can find recently played tracks, top tracks, and top artists. The backend is using NodeJS and the frontend is using OAuth for authentication.`,
    tech: ['React, ', 'NodeJS, ', 'OAuth, ', 'SCSS'],
    github: 'https://github.com/Ba-Zen/spotify-profile',
    website: 'https://myspotify-dashboard.herokuapp.com/'
  },

  {
    id: 2,
    title: 'Key Conservation',
    img: require('../images/key.png'),
    description: `Key Conservation is a mobile application helping conservationists gain 
    funding and global support by posting campaigns. During this 8 week Sprint, our team had the privilege of getting this app off the ground with it's first version. We made the stakeholder's vision a reality all while having to learn React Native on the fly. The app, complete with analytics is growing and more users are signing up everyday.`,
    tech: ['React, ', 'React Native, ', 'Redux, ', 'NodeJS, ', 'Auth0'],
    github: 'https://github.com/Ba-Zen/Frontend-Mobile',
    website: 'https://www.keyconservation.org/'
  },
  {
    id: 3,
    title: 'In Reach',
    img: require('../images/reach.png'),
    description: `In-Reach is a full-stack MERN application that keeps track of a user's contacts. A user is able to create, read, update, and delete contacts which are categorized as personal or professional. Search functionality is included.`,
    tech: ['React, ', 'NodeJS, ', 'Express, ', 'MongoDb'],
    github: 'https://github.com/Ba-Zen/In-Reach',
    website: 'https://serene-spire-49338.herokuapp.com/login'
  },
  {
    id: 4,
    title: 'Nox Caelo Theme',
    img: require('../images/nox-caelo.png'),
    description: `A minimal dark theme for VS Code available for download on the Visual Studio Marketplace.`,
    tech: ['JavaScript, ', 'VS Code'],
    github: 'https://github.com/Ba-Zen/nox-caelo-vscode-theme',
    website: 'https://nox-caelo-theme.netlify.com'
  }
];

export default Content;
