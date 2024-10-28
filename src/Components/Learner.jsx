import Score from './Score'
export default function Learner(props){
    return (
        <div>
          <h1>{props.name}</h1>
          <p>{props.bio}</p>
          <h4>Scores:</h4>
          <ul>
            {props.scores.map((score, index) => (
                 <Score key={index} {...score} />
            ))}
          </ul>
        </div>
      );
    
}