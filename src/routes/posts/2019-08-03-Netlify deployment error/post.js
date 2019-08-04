export default {
  title: `Netlify deployment error`,
  tags: ['netlify', 'react', 'deploy'],
  spoiler: "failed during stage 'building site': fork/exec /usr/local/bin/build: no such file or directory",
  getContent: () => import('./document.mdx'),
}