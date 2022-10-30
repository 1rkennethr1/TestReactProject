type MyProps = {
    name: string;
    role: string;
    pr: string;
    age: number;
    sex?: string;
}

export default function MyProps (props: MyProps) {
    return (
        <div>
            <h2>Player Introduction</h2>
            <p>Player Name: {props.name} </p>
            <p>Player IGN: {Math.round(Math.random() * 100000000)}</p>
            <p>Player Role: {props.role}</p>
            <p>Peak Rank: {props.pr}</p>
            <p>Player Age: {props.age}</p>
            <p>Player Sex: {props.sex}</p>
        </div>
    )
}