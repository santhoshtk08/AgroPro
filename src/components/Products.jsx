import React from 'react';

function Products() {
    return (
        <>
            <div>
                <h1 className='text-center m-4 font-bold text-3xl'>Our Top Products</h1>
            </div>
            <div className='flex flex-wrap'>
                <div className="bg-white shadow-2xl m-4 w-96" >
                    <div className="flex flex-col">
                        <img src="https://images.unsplash.com/photo-1606914998137-d9b33982be02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VlZHN8ZW58MHx8MHx8fDA%3D" alt="" className="w-100% h-48 object-cover p-2" />
                        <div className="flex flex-col  ml-4">
                            <div>
                                <h3 className="text-xl font-medium text-black">Combo 1</h3>
                                <div className='flex gap-3'>
                                    <p className="text-lg text-black">₹500</p>
                                    <p className=" text-lg line-through text-gray-600">₹750</p>
                                </div>

                               <ul className='flex gap-5 flex-wrap'>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                                <li>Item 4</li>
                                <li>Item 5</li>
                                <li>Item 6</li>
                                <li>Item 7</li>
                                <li>Item 7</li>
                                <li>Item 7</li>
                                <li>Item 7</li>
                                <li>Item 7</li>


                               </ul>

                            </div>
                            <div className='flex justify-center'>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-35">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Products;
