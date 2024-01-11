import { ChangeEvent, HTMLInputTypeAttribute, HtmlHTMLAttributes } from "react"



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
    const { name, type, placeholder, selector, value, onChange, classname, option, accept, onSelect } = props;

    if (selector) {
        return (
            <div className="w-full flex flex-col">
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
        <div className="flex justify-between bg-stroke rounded-md h-15 p-4 items-center w-full">
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                accept={accept}
                className={`w-full bg-stroke outline-none font-sans text-md ${classname}`}
            />
        </div>

    )
}


export default Input;