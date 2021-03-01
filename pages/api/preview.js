const site_url = 'http://localhost:3000/'

export default async function (req, res) {
  if (req.query.secret !== 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTYxNDUyODI3NCwiaWF0IjoxNjE0NTI4Mjc0fQ.m3yQ7ux7qocj2cF5lrUtlMwd_RobZL0B0kQ-usR6EB8' || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const post = await fetch(process.env.NEXT_PUBLIC_API_URL + '/customPosts/v2/posts/' + req.query.slug)
  const data = await post.json();

  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  if (data.post_type === 'post') {
    // 30 minut link jest aktywny
    res.setPreviewData({ id: data.ID }, {
      maxAge: 60 * 30,
    })
    if (data.post_category[0] === 9) {
      // blog
      res.redirect(site_url + 'post/' + req.query.slug)
      return;
    } else {
      // realizacja
      res.redirect(site_url + 'realizacja/' + req.query.slug)
      return;
    }
  }

  // 30 minut link jest aktywny
  res.setPreviewData({}, {
    maxAge: 60 * 30,
  })

  if (post) {
    res.redirect(site_url + req.query.slug)
  }
}