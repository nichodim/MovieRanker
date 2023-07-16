import './App.css'
import Title from './components/Title.jsx'

function App() {
  return (
    <div id='main'>
      <div id='topdiv'>
        <Title />
      </div>
      <div id='gamediv'>
        <div className='option-box1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis, veritatis assumenda quo quae itaque praesentium iusto harum mollitia maxime numquam dolor odio libero sit in sapiente incidunt vel illo.</div>
        <div id='VSdiv'>VS</div>
        <div className='option-box2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id sapiente corporis vero! Magnam consequatur quibusdam, temporibus inventore quos at, aliquam vel dolorum animi dicta aliquid necessitatibus recusandae reprehenderit ipsam?</div>
      </div>
    </div>
  )
}

export default App
