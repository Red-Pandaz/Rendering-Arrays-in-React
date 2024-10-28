export default function Learner(props){
    return (
        <div>
          <h1>{props.name}</h1>
          <p>{props.bio}</p>
          <ul>
            {props.scores.map((score, index) => (
              <li key={index}>
                {score.date} - {score.score}
              </li>
            ))}
          </ul>
        </div>
      );
    
}