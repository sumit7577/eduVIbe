import { ChangeEvent, HTMLInputTypeAttribute } from "react"



interface InputProps {
    name: string,
    type: HTMLInputTypeAttribute,
    placeholder: string,
    selector?: boolean,
    value: string | number | readonly string[] | undefined,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    classname?: string,
    option?: string[],
    accept?: string,
    onSelect?: (e: ChangeEvent<HTMLSelectElement>) => void,
}

const Input = (props: InputProps) => {
    const { name, type, placeholder, selector, value, onChange, classname, option, accept,onSelect} = props;

    if (selector) {
        return (
            <div className="w-full flex flex-col lg:w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{name}</label>
                <select onChange={onSelect} id={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {option?.map((item, index) => (
                        <option selected={index == 0 ? true : false} key={index} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        )
    }
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            accept={accept}
            className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2 ${classname}`}
        />
    )
}


export default Input;