import { Head } from '@redwoodjs/web'

import Wave from 'src/components/Wave/Wave'

const Article = ({ article }) => {
  const shrinker = (url) => {
    const parts = url.split('/')
    parts.splice(3, 0, 'resize=height:2000')
    return parts.join('/')
  }
  // TO DO:
  // 1. loop over article object - Object.keys
  // 2. check for if p or if images -- count .length
  // 3. check for null
  // 4. return html with content out remaining

  // const imageLoop = () => {
  // return <div>{article.title}</div>

  // figure out how to get below working

  // Object.keys(article)
  //   .filter((a) => a.includes('url'))
  //   .forEach(function (i, key) {
  //     if (article[i] !== null) {
  //       return (
  //         <img
  //           className="body-image"
  //           src={article[i]}
  //           onError={(e) => (e.target.style.display = 'none')}
  //           alt={article.title}
  //         />
  //       )
  //       // console.log(Object.keys(article)[key], ' -- ', article[i])
  //     }
  //   })
  // }

  // console.log(
  //   Object.keys(article)
  //     .filter((a) => a.includes('url'))
  //     .forEach(function (i, key) {
  //       if (article[i] !== null) {
  //         console.log(Object.keys(article)[key], ' -- ', article[i])
  //       }
  //     })
  // )

  return (
    <article
      id={`article-${article.id}`}
      className="article-page"
      key={article.id}
    >
      <Head>
        <title>{article.title} | Projects</title>
      </Head>
      {/* <header>
        <h1>{article.title}</h1>
        <div className="title-line"></div>
      </header> */}
      <Wave title={article.title}></Wave>
      <div className="article-body">
        <div className="article-copy">
          {article.body && article.body !== '' && <p>{article.body}</p>}
          {article.body2 && article.body2 !== '' && <p>{article.body2}</p>}
          {article.body3 && article.body3 !== '' && <p>{article.body3}</p>}
        </div>
        <div className="article-gallery">
          {/* {imageLoop()} */}
          {article.url && article.url !== '' && (
            <img
              className="body-image"
              src={shrinker(article.url)}
              onError={(e) => (e.target.style.display = 'none')}
              alt={article.title}
            />
          )}
          {article.url2 && article.url2 !== '' && (
            <img
              className="body-image"
              src={shrinker(article.url2)}
              onError={(e) => (e.target.style.display = 'none')}
              alt={article.title}
            />
          )}
          {article.url3 && article.url3 !== '' && (
            <img
              className="body-image"
              src={shrinker(article.url3)}
              onError={(e) => (e.target.style.display = 'none')}
              alt={article.title}
            />
          )}
          {article.url4 && article.url4 !== '' && (
            <img
              className="body-image"
              src={shrinker(article.url4)}
              onError={(e) => (e.target.style.display = 'none')}
              alt={article.title}
            />
          )}
          {article.url5 && article.url5 !== '' && (
            <img
              className="body-image"
              src={shrinker(article.url5)}
              onError={(e) => (e.target.style.display = 'none')}
              alt={article.title}
            />
          )}
          {article.url6 && article.url6 !== '' && (
            <img
              className="body-image"
              src={shrinker(article.url6)}
              onError={(e) => (e.target.style.display = 'none')}
              alt={article.title}
            />
          )}
          {article.url7 && article.url7 !== '' && (
            <img
              className="body-image"
              src={shrinker(article.url7)}
              onError={(e) => (e.target.style.display = 'none')}
              alt={article.title}
            />
          )}
          {article.url8 && article.url8 !== '' && (
            <img
              className="body-image"
              src={shrinker(article.url8)}
              onError={(e) => (e.target.style.display = 'none')}
              alt={article.title}
            />
          )}
        </div>
      </div>
    </article>
  )
}

export default Article
