const mock = [ {
  tasks: [
    {
      id: 1,
      task: "Set up React project",
      time: 90,
      description:
        "Install Node.js and create a new React app using npx create-react-app.",
      techStack: ["React", "Node.js"],
      completed: false,
      resources: [
        "React documentation: https://reactjs.org/docs/getting-started.html",
        "Create React App guide: https://create-react-app.dev/docs/getting-started",
      ],
      subTasks: [
        "Install Node.js",
        "Create React app",
        "Set up project structure",
        "Install necessary dependencies",
      ],
    },
    {
      id: 2,
      task: "Set up Firebase for authentication",
      time: 60,
      description:
        "Create a Firebase project, enable authentication (e.g., Google sign-in), and integrate it with the React app.",
      techStack: ["Firebase", "React"],
      completed: false,
      resources: [
        "Firebase authentication guide: https://firebase.google.com/docs/auth",
        "React Firebase integration: https://www.freecodecamp.org/news/use-firebase-with-react/",
      ],
      subTasks: [
        "Create Firebase project",
        "Enable Google authentication",
        "Integrate Firebase with React",
        "Test authentication flow",
      ],
    },
    {
      id: 3,
      task: "Implement real-time collaboration with WebSockets",
      time: 180,
      description:
        "Set up a Node.js server with WebSockets to enable real-time code editing collaboration.",
      techStack: ["Node.js", "WebSockets"],
      completed: false,
      resources: [
        "WebSockets documentation: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        "Socket.io guide: https://socket.io/docs/v4/",
      ],
      subTasks: [
        "Set up Node.js server",
        "Integrate WebSockets using Socket.io",
        "Sync code changes in real-time",
        "Test real-time collaboration",
      ],
    },
    {
      id: 4,
      task: "Implement video conferencing with WebRTC",
      time: 120,
      description: "Set up WebRTC for real-time video calls between users.",
      techStack: ["WebRTC"],
      completed: false,
      resources: [
        "WebRTC documentation: https://webrtc.org/",
        "WebRTC tutorial: https://www.tutorialspoint.com/webrtc/index.htm",
      ],
      subTasks: [
        "Set up WebRTC signaling server",
        "Implement peer connection logic",
        "Add video call UI components",
        "Test video conferencing functionality",
      ],
    },
  ]},'build a web app', ["React", "Node.js"],
];
export { mock };
