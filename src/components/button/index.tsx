import './index.scss'

interface IProp {
    method: () => Promise<any>;
  }
  
  export function Button({ method }: IProp) {
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      await method();
    };
  
    return (
      <div>
        <button className="send-button" onClick={handleClick}> <span>&rarr;</span> </button>
      </div>
    );
  }
  