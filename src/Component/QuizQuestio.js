import QuizOption from "./QuizOption"
import  "./Quiz.css"
function QuizQuestion({dataq,QestionNo,totalQuestion,CheckAnswer,color}){
  const {question,options}=dataq
  return(
    <div className="main">
    <div className="QuizQuestion-container">
      <h2 >Qestion {QestionNo} out of {totalQuestion}</h2>
      <h4 className="content">{question}?</h4>
      {
        options.map((item,index)=>{
          return <QuizOption className="name" value={item} key={index} CheckAnswer={CheckAnswer} />
          
        })
      }
      

    </div>
    </div>
  )
}
export default QuizQuestion
