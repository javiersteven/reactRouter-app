const List = () => {
  const paragraphs = [
    'Loading new web page content without reloading the page, via Ajax or a WebSocket. For example, users of social media can send and receive messages without leaving the current page.',
    'Web page animations, such as fading objects in and out, resizing, and moving them.',
    'Playing browser games.',
    'Controlling the playback of streaming media.',
    'Generating pop-up ads.',
    'Validating input values of a web form before the data is sent to a web server.',
    'Logging data about the users behavior then sending it to a server. The website owner can use this data for analytics, ad tracking, and personalization.',
    'Redirecting a user to another page.'
  ]
  return (
    <>
      <ul>
        {paragraphs.map((paragraph) => {
          return (
            <li key=''>{paragraph}</li>
          )
        })}
      </ul>
    </>
  )
}

export default List
