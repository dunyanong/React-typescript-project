import React from "react";

interface IProps{
    people: {
      name: string,
      url: string,
      age: number,
      note?: string // ? indicates optional
    }[]
}

const List: React.FC<IProps> = ({people}) => {    
    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20 mt-10">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Age
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Note
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">                   
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                    <img className="w-10 h-10 rounded-full" alt="Jese" src={person.url} />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">{person.name}</div>
                                    </div>  
                                </th>
                                <td className="px-6 py-4">
                                    {person.age}
                                </td>
                                <td className="px-6 py-4">
                                    {person.note}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    );
}
 
export default List;