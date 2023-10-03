import React, { useEffect, useState } from 'react'
import YoutubeCard from './YoutubeCard'
import axios from 'axios'

const YoutubeSection = () => {
    const [youtubeData, setYoutubeData] = useState()

    const fetchYoutubeData = async () => {

        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/channel/videos',
            params: {
              id: 'UCGeNnbrPXNJb5wfUfdjaWag'
            },
            headers: {
              'X-RapidAPI-Key': 'aefe361792msh1b50291b7ba2596p18bc34jsn2fcd5a0fc1a1',
              'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
            }
        };
          
          try {
              const response = await axios.request(options);
              const dataArray = response.data.data
              dataArray.length = 9
              setYoutubeData(dataArray);
        } catch (error) {
              console.error(error);
          }

    }

    useEffect(() => {
        fetchYoutubeData();
    }, [])



  return (
    <>
        <section className="container">
            <h2 className='display-1 mb-3 text-center'>Food Vlogs</h2>
            <p className='mb-5'>Check Out My Youtube Channel</p>
            <div className="videos-results">
                {
                    youtubeData && youtubeData.map((video, i) => (
                        <div key={i}>
                            <YoutubeCard 
                                Id={i} 
                                VideoTitle={video.title} 
                                VideoLink={`https://www.youtube.com/watch?v=${video.videoId}`} 
                                VideoThumb={video.thumbnail[3].url}
                            />

                        </div>

                        )      
                    )
                }
            </div>

            

        </section>
    </>
  )
}

export default YoutubeSection