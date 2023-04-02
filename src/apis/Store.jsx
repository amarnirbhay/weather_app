import React, {createContext, useEffect ,useState} from "react";
export const useStore =createContext("Default");
const Store = props => {
    let [city, setCity] =useState("");
    let [data, setData] = useState(false);
    let [search, setSearch]= useState(false);

    useEffect(() => {
        if(search) {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a1e529d8b9118b2881f9e5d3b3a05e3&units=metric`
            ).then(res => 
                res.json().then(arr => {
                    setData([arr]);

                    console.log(arr);
                })
                ); 
        }

        setSearch(false);

    },[search]);

    let handleSubmit =e => {
        e.preventDefault();
        setSearch(true);
        console.log("searching.....");
    };

    return (
        <useStore.Provider value={{ setCity, handleSubmit, data}}>
            {props.children}            
        </useStore.Provider>
    );
};

export default Store;