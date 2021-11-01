// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"

export default async function handler(req, res) {
  const url = `http://localhost:8000/api/comments/`
  // res.status(200).json({ name: 'John Doe' })
  console.log('7 hhhh:   ', url);
  if (req.method === "GET"){
    console.log('9',req);
    // await fetch('http://localhost:8000/api/comment/?blog_id='+req.body)
    // .then(response => {
    //   console.log('11\n\n', response);
    //   // res.status(201).send({response})
    // }).then(function(data){
    //   console.log('14\n\n', data);
    //   res.status(201).send({data})
    // }).catch(error => {
    //   console.log('17\n\n', error);
    //   res.status(500).send({error})
    // });
  }

  else if (req.method === 'POST') {
    if (req.body.submit===true){
      const { comments, blog_id } = req.body;
      console.log('19\n', req.body);
      var body = {
        comments: comments,
        blog_id: blog_id
      }
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }).then(response => {
        console.log('27\n\n');
        // res.status(201).send({response})
      }).then(data => {
        console.log('29\n\n');
        // console.log('Success:', data);
        res.status(201).send({data})
      }).catch(error => {
        console.log('33\n\n');
        // console.log(error);
        res.status(500).send({error})
      });
    }else{
      await fetch('http://localhost:8000/api/comment/?blog_id='+req.body.blog_id)
      .then(response => response.json())
      .then(json => {
        console.log('14\n\n', json);
        res.status(201).send({json})
      }).catch(error => {
        console.log('17\n\n', error);
        res.status(500).send({error})
      });
    }
    
  }
  // console.log(req.body); // {"name":"Kieran","age":26}
  // console.log(req.query) // {} in our example

  // console.log(req.method); // POST
  // console.log(req.headers.host); // localhost:3000
  // console.log(req.url); // /api/user

  // res.status(200).json({ message: "success" })
}
