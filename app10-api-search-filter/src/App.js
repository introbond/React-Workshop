import './App.css';
import {useState, useEffect} from 'react';

function App() {
    const [countries, setCountries] = useState([])
    const [target, setTarget] = useState("")
    const [dataFilter] = useState(["name", "capital"])

    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(data => {
            setCountries(data)
        })
    },[])

    const searchCountries = (countries) => {
        return countries.filter((item) => {
            return dataFilter.some((filter) => {
                return item[filter].indexOf(target) > -1
            })
        })
    }
    return (
        <div className = "container">
            <div className = "search-container">
                <label htmlFor = "search-form">
                    <input 
                        type = "text" 
                        className = "search-input" 
                        placeholder = "Seach here" 
                        value = {target}
                        onChange = {(e) => setTarget(e.target.value)}
                    />
                </label>
            </div>
            <ul className = "row">
                {searchCountries(countries).map((item, index) => {
                    return (
                        <li key = {index}> 
                            <div className = "card">
                                <div className = "card-title">
                                    <img src = {item.flag} alt = {item.name}/>
                                </div>
                                <div className = "card-body">
                                    <div className = "card-description">
                                        <h2> {item.name} </h2>
                                        <ol className = "card-list">
                                            <li> Population : <span> {item.population} </span> </li>
                                            <li> Region : <span> {item.region} </span> </li>
                                            <li> Capital : <span> {item.capital} </span> </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;