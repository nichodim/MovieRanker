export default function Score({ s }) {
    return <div key={Math.random()} className='anim' id='score'>{s}</div>; 
}