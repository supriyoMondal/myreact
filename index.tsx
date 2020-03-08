import { React, render } from './react';

const states = [];
let stateCursor = 0;


const rerender = () => {
    stateCursor = 0;
    document.querySelector('#app').firstChild.remove();
    render(<App />, document.querySelector('#app'));
}
const useState = (initialState) => {
    const FROZEN_CURSOR = stateCursor;
    states[FROZEN_CURSOR] = states[FROZEN_CURSOR] || initialState;
    const setState = (newState) => {
        states[FROZEN_CURSOR] = newState;
        rerender();
    };
    stateCursor++;
    return [states[FROZEN_CURSOR], setState];
}

const App = () => {
    const [name, setName] = useState('person');
    const [count, setCount] = useState(0);
    return (
        <div className="my-react">
            <h1>Hello {name}!</h1>
            <div>
                <p>Name :  <span>
                    <input type="text" placeholder="name..."
                        onchange={e => setName(e.target.value)} />
                </span>
                </p>
            </div>
            <h2>The Count in {count}</h2>

            <button onclick={() => { setCount(count + 1) }} >+</button>
            <button onclick={() => {
                setCount(count - 1)
            }} >-</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore quis optio explicabo, earum asperiores voluptate dolor iure voluptatem ipsum similique odit officiis quae eaque.</p>
        </div>
    )
};



render(<App />, document.querySelector('#app'));