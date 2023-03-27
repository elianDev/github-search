export function Tips() {

    const tips = [
        {
            text: '"Quero comprar um ap de 250 mil em São Paulo"'
        },
        {
            text: '"Quero alugar uma casa com pelo menos 3 quartos"'
        },
        {
            text: '"Quero alugar uma casa de R$ 3 mil mês em santos-sp"'
        },
        {
            text: '"Hugoo, encontre uma casa de R$ 200k pra mim"'
        },
        {
            text: '"Huggo encontre uma casa para alugar com piscina"'
        },
        {
            text: '"Hugoo quero comprar uma fazenda com 10.000 m2"'
        },
    ]

    return (
        <div>
            {
                tips.map((tip, index) => (
                    <div key={index}>{tip.text}</div>
                ))
            }
        </div>
    )
}