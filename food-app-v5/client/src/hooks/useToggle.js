import { useState } from 'react'

const useToggle = (initialVal=false) => {

    const [value, setValue] = useState(initialVal); 

    const setToggle = () => {
        setValue(() => !value);
    }

    return [value, setToggle];
}

export default useToggle;