 export default function CoreConcept({image, title, description}){
    return (
      <li>
        <h1>{title}</h1>
        <img src={image} alt={title}/>
        <p>{description}</p>
      </li>
    );
  }