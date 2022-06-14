const site_url = process.env.NEXT_PUBLIC_FRONT_URL

export default async function (req, res) {
  if (req.query.secret !== 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTYxNDUyODI3NCwiaWF0IjoxNjE0NTI4Mjc0fQ.m3yQ7ux7qocj2cF5lrUtlMwd_RobZL0B0kQ-usR6EB8' || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  let post = await fetch(process.env.NEXT_PUBLIC_API_URL + '/wp/v2/posts?slug=' + req.query.slug)
  let data = await post.json();

  if (data.length === 0) {
    post = await fetch(process.env.NEXT_PUBLIC_API_URL + '/wp/v2/pages?slug=' + req.query.slug)
    data = await post.json();

    // 30 minut link jest aktywny
    res.setPreviewData({}, {
      maxAge: 60 * 30,
    })

    if (data.length !== 0) {
      res.redirect(site_url + req.query.slug);
      return;
    }

    return res.status(401).json({ message: 'Invalid slug' })
  }

  post = data.pop();

  if (post.type === 'post') {
    // 30 minut link jest aktywny
    res.setPreviewData({ id: post.id }, {
      maxAge: 60 * 30,
    })
    if (post.categories[0] === 9) {
      // blog
      res.redirect(site_url + 'post/' + req.query.slug)
      return;
    } else {
      // realizacja
      res.redirect(site_url + 'realizacja/' + req.query.slug)
      return;
    }
  }

  return res.status(401).json({ message: 'Invalid slug' })
}
