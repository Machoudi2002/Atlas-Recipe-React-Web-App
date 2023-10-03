

const YoutubeCard = ({ VideoTitle, VideoThumb, VideoLink}) => {
  return (
    <>
        <div className="youtube-card">
            <a href={VideoLink} target='_blank'>
                <img src={VideoThumb} alt={VideoTitle} />
                <h3>{VideoTitle}</h3>

            </a>
        </div>
    </>
  )
}

export default YoutubeCard