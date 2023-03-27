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
        <button onClick={handleClick}>Botao</button>
      </div>
    );
  }
  