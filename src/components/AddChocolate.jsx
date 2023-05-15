

const AddChocolate = () => {

    const handleAddChocolate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        console.log(name, country, category);
    }


    return (
        <div>
            <h1 className="py-4 text-5xl font-bold text-purple-600 text-center">Add Chocolates</h1>

            <form onSubmit={handleAddChocolate}  className="max-w-md mx-auto">
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
                        name= "country"
                        placeholder="Enter country name"
                        
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
                        
                    >
                        <option  value="" >Select a category</option>
                        <option  value="White Chocolates">White Chocolates</option>
                        <option  value="Dark Chocolates">Dark Chocolates</option>
                        <option  value="Milk Chocolates">Milk Chocolates</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
                >
                    Add Chocolates
                </button>
            </form>
        </div>
    );
};

export default AddChocolate;