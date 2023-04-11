# Github Discovery
Web app to discover GitHub repositories with a layout inspired by Netflix. It's developed with React, and currently, the data is persisted on local storage.

You can log in here with the demo user (username:pass): https://dazzling-arithmetic-3a0de9.netlify.app

Or create a new account here: https://dazzling-arithmetic-3a0de9.netlify.app/sign-up

### Discovery Page on Desktop
![alt text](https://i.ibb.co/NnnZV6W/desktop-github-discovery.png)

### Discovery Page on Mobile
![alt text](https://i.ibb.co/n0tjH8p/mobile-github-discovery.png)

### Details about key features and implementation
• Users can sign in/sign up on the website.<br/>
• Mock demo account implemented (username:pass).<br/>
• Users can toggle the topics to show.<br/>
• Users can bookmark repositories.<br/>
• On each category listing there’s a sort by dropdown.<br/>
• On a repository card click, navigate to it on a new tab.<br/>
• Users and user options (bookmarks, topics, sort) are persisted locally.<br/>
• Users can change their username and email address.<br/>
• Responsive (Desktop, Tablet, and Mobile).<br/>
• Developed with React and styled-components.<br/>
• Tested with Jest, React Testing Library, and Cypress.<br/>

### To build
`yarn build`

### To run
`yarn start`

### To run component tests
`yarn test`

### To run e2e tests (it should be running locally with 'yarn start')
`yarn test-e2e`