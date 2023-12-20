
# Getting Started with Workspaces Widgets in React

This widget serves as a boilerplate for developing Avaya Workspaces Widgets. It demonstrates functionalities and capabilities from the Workspaces Widget Framework SDK and Avaya Experience Platform APIs. This widget is specifically designed for use within the Avaya Experience Platform.

---

## :warning: **Disclaimer**

> :bulb: This sample application is provided **for demonstration purposes only** and is not intended for production use. We assume no responsibility for any issues arising from its use.

---

## Current Capabilities
### Workspaces Widget Framework SDK

#### Events
- `onAgentStateEvent`: Subscribe to changes in Agent's state (logged in, ready, not ready, etc.).
- `onAnyInteractionEvent`: Subscribe to any new Interaction on the agent's desktop.
- `onMediaEvent`: Subscribe to Chat, SMS, Messaging, Email, or Social media data like participants or previous messages.

#### Methods
- `getConfiguration().user`: Retrieve the full logged-in Agent configuration.
- `getTeamData()`: Get the Agent's team data (colleagues & supervisors).
- `getInteractionData()`: Obtain details of the current interaction.

For more events & methods, visit the [documentation](https://documentation.workspaces.avayacloud.com/widget-framework/docs/api-reference/introduction).

### TODO: AXP APIs

## Technology
The widget is built using React, Redux, and Webpack.

### Folder Structure

``` js
├── build // Build output folder
├── src
│   ├── app
│   │   ├── config.js // Configuration file
│   │   └── store.js // Combined Store
│   ├── assets // Static Assets (Images, Files, etc.)
│   │   └── images 
│   ├── features 
│   │   └── sample-content // Sample Component
│   │       ├── SampleContent.js // React Component 
│   │       ├── SampleContent.module.css // Styling
│   │       ├── sampleContentAPI.js // API Client Calls
│   │       ├── sampleContentSlice.js // State Manager
│   │       └── sampleContentSlice.spec.js // Test File
│   ├── services
│   │   └── Auth.js // Authorization Service
│   └── shared-components // Shared React Components 
├── secrets // Includes SSL certificates
├── server.conf
├── sample-widget.json // Widget JSON file to import to WS
└── webpack.config.js // Webpack configuration
```

To create your own feature:

- Copy the `sample-component` folder format, adding required Components, API Calls, and WS Widget SDK Calls. 
- Update `store.js` with your new component reducer.

## Build & Develop
Build and deploy your widget with the following steps after making necessary changes.

### Prerequisites
- Node.js version 18+.
- Yarn.
- Docker & Docker Compose (optional).
- SSL Certificate & Key for serving built files.
- Upload `sample-widget.json` to Avaya Experience Platform Admin Portal and Widget Management.

### Using Docker
1. Update `docker-compose-dev.yml` with SSL certificate locations.
2. Build and deploy the widget:
   ```sh
   yarn install
   npm run build
   docker-compose -f docker-compose-dev.yml up # add -d for background process
   ```
3. To apply changes, run `npm run build` and refresh workspaces.

### Without Docker
1. Install dependencies and build:
   ```sh
   yarn install
   npm run build
   ```
2. Serve the `build/` folder contents (especially `bundle.js`) using your preferred web server (NGINX, TomCat, IIS, etc.).

All Done!

---

If you've done everything correctly, it should look something like this.

![Widget Screenshot](./public/screenshot.png)

---

    Contributions are welcome!
