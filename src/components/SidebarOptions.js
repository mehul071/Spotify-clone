import React from 'react'

function SidebarOptions({title,Icon}) {
    return (
        <div className="SidebarOptions text-opacity-60 hover:text-white transition-colors text-white space-x-4 cursor-pointer px-2.5 mb-1 h-9">
            {Icon && <Icon className="SidebarOption_icon inline-block text-2xl"/>}
            {Icon ? <h4 className="option_title inline-block text-lg">{title}</h4>:<p>{title}</p>}
        </div>
    )
}

export default SidebarOptions