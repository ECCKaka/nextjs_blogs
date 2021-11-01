module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['jsonplaceholder.typicode.com', "via.placeholder.com", 'localhost:8000'],
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
