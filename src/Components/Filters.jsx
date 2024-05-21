import React, { useState } from 'react'

const yearData = [
    { title: "Sort by year" },
    { title: "1970 - 1980" },
    { title: "1980 - 1990" },
    { title: "1990 - 2000" },
    { title: "2000 - 2010" },
    { title: "2010 - 2024" },
]

const timesData = [
    { title: "Sort by hours " },
    { title: "1 - 2 hours" },
    { title: "2 - 5 hours" },
    { title: "5 - 10 hours" },
    { title: "10 - 20 hours" },
]

const ratesData = [
    { title: "Sort by Rates" },
    { title: "1-star" },
    { title: "2-star" },
    { title: "3-star" },
    { title: "4-star" },
    { title: "5-star" },

]



const Filters = () => {

    const [category, setCategory] = useState({ title: "Category " });
    const [year, setYear] = useState(yearData[0]);
    const [times, setTimes] = useState(timesData[0]);
    const [rates, setRates] = useState(ratesData[0]);

    const Filter = [

        {
            value: category,
            onchange: setCategory,
            items: CategoriesData
        },
        {
            value: year,
            onchange: setYear,
            items: yearData
        },
        {
            value: times,
            onchange: setTimes,
            items: timesData
        },
        {
            value: rates,
            onchange: setRates,
            items: ratesData
        }
    ]


    return (
        <div className='my-6 bg-dry text-dryGray border-gray-800 grid md:grid-grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6 '>
            {Filters.map((item, index) => (
                <ListBox key={index} value={item.value} onchange={item.onchange}>
                    <div className='relative'>
                        <ListBox.Button className="relative w-full pr-10 py-4 pl-6 text-left text-sm cursor-default">
                            <span className="block truncate">{item.value.title}</span>
                            <span className='absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2'>
                            </span>
                        </ListBox.Button>
                    </div>
                </ListBox>
            ))}
        </div>
    )
}

export default Filters