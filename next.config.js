module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['jsonplaceholder.typicode.com', "via.placeholder.com", 'localhost'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blogs',
        permanent: true,
      },
    ]
  },
}
