import InstructionsIngridentsSection from './InstructionsIngridentsSection'

const RecipeInfo = ({Id, Name, ImageURL, Instr, Ingri, YoutubeLink, Action, ActionTitle }) => {


  return (
    <>
      <div className="recipe-info-section" key={Id}>
        <h1 className='display-2 text-center'>{Name}</h1>
        <div className="recipe-info">
          <div className="img-area">
            <div className="card">
              <img src={ImageURL} alt={Name} width="100%" />
              <div className="content">
                <a target='_blank' href={YoutubeLink}>See On Youtube</a>
              </div>
              
            </div> 
            <div className="save" onClick={Action}>
              <span className='fav-button'>{ActionTitle}</span>
            </div>
            

          </div>
          <div className="text-area">
            <InstructionsIngridentsSection Instructions={Instr} Ingredients={Ingri} />
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeInfo