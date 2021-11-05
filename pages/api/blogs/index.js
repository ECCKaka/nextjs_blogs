// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"

export default async function handler(req, res) {
  const url = `http://localhost:8000/api/blogs/`
  
  if (req.method === "GET"){
    console.log('get request: ');
  }
  else if (req.method === 'POST') {
    const { blog_title, blog_body, blog_pic } = req.body;
    var body = {
      blog_title: blog_title,
      blog_body: blog_body,
      blog_pic: blog_pic
    }
    console.log(body);
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
      // console.log('27 data ', data );
      res.status(201).send({data})
    }).catch(error => {
      // console.log('30 error  ', error);
      // console.log(error);
      res.status(500).send({error})
    });
    
  }
}
