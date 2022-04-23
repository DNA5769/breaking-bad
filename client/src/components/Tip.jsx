const Tip = ({name, desc, location}) => {

    return (
        <div className="w-full flex flex-row bg-gray-200 h-20 rounded-md border-2 hover:border-2 hover:border-gray-800 items-center justify-between p-6">
            <h3>{name}</h3>
            <h3>{desc}</h3>
            <h3>{location}</h3>
        </div>
    )
}

export default Tip;