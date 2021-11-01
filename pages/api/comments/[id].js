export default async function userHandler(req, res) {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      await fetch(`http://localhost:8000/api/comment/?blog_id=${id}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        res.status(201).send({json})
      }).catch(error => {
        res.status(500).send({error})
      });
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
