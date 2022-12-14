module.exports = {
  appId: 'com.example.app',
  copyright: 'Copyright © 2022 anonymous',
  compression: 'maximum',
  directories: {
    output: 'dist-exe',
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    installerIcon: './electron/assets/icon.ico',
    uninstallerIcon: './electron/assets/icon.ico',
    installerHeaderIcon: './electron/assets/icon.ico',
  },
  win: {
    icon: './electron/assets/icon.ico',
  },
  files: [
    '!**/.env.development',
    '!**/components.d.ts',
    '!**/package-lock.json',
    '!**/postcss.config.js',
    '!**/README.md',
    '!**/tailwind.config.cjs',
    '!**/tsconfig.json',
    '!**/tsconfig.node.json',
    '!**/vetur.config.js',
    '!**/vite.config.ts',
    '!**/src/*',
    '!**/script/*',
    '!**/public/*',
    '!**/dist-exe/*',
    '!**/.vscode',
  ],
}
