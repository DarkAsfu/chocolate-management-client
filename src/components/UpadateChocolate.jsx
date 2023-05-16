import { FcLeft } from "react-icons/fc";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpadateChocolate = () => {
    const chocolate = useLoaderData();
    console.log(chocolate);
    const {name, photoURL, category, country, _id} = chocolate;
    const handleUpdateChocolate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photoURL = form.photo.value;
        const updateChocolate = { name, photoURL, country, category }
        console.log(updateChocolate);

        // update specific product
        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateChocolate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Successfully updated chocolate!',
                        'success'
                    )
                    form.reset();
                }
            })
    }
    return (
        <div>
            <h1 className="py-4 text-5xl font-bold text-purple-600 text-center">Update Chocolates: {name}</h1>
            <div className="w-2/3 mx-auto">
                <Link to='/'><button className="text-xl border px-6 py-4 mb-8 flex items-center gap-3"><FcLeft></FcLeft> All Chocolates</button></Link>
            </div>
            <form onSubmit={handleUpdateChocolate} className="w-10/12 md:w-2/3 mx-auto bg-slate-50 p-4 md:p-32">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-bold text-gray-800">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                        name="name"
                        placeholder="Enter chocolate name"
                        defaultValue={name}

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-bold text-gray-800">
                        Photo:
                    </label>
                    <input
                        type="text"
                        id="photo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                        name="photo"
                        placeholder="Enter chocolate photo"
                        defaultValue={photoURL}

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block mb-2 font-bold text-gray-800">
                        Country:
                    </label>
                    <input
                        type="text"
                        id="country"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                        name="country"
                        placeholder="Enter country name"
                        defaultValue={country}

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block mb-2 font-bold text-gray-800">
                        Category:
                    </label>
                    <select
                        id="category"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                        name="category"
                        defaultValue={category}

                    >
                        <option value="" >Select a category</option>
                        <option value="White Chocolates">White Chocolates</option>
                        <option value="Dark Chocolates">Dark Chocolates</option>
                        <option value="Milk Chocolates">Milk Chocolates</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-purple-500 mt-6 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
                >
                    Update Chocolates
                </button>
            </form>
        </div>
    );
};

export default UpadateChocolate;