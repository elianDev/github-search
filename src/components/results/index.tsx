import './index.scss'

type CardProps = {
    title: string;
    infos: Array<string>
  }

export function Result({title, infos}: CardProps ) {
    
    return (
        <div className="card">
           <h2>{title}</h2>
           <p>Endereço: {infos[3]}</p>
           <p>Contato: {infos[4]}</p>
        </div>
    )
}