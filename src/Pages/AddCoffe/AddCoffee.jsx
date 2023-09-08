import "./AddCoffee.css";

const AddCoffee = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const url = form.photoUrl.value;

        const coffeeInfo = { name, chef, supplier, taste, category, details, url };
        console.log(coffeeInfo);
    }
    return (
        <>
            <div className="text-5xl text-center m-5">
                <h1>Add new Coffee</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="form-style-9">
                    <ul>
                        <li>
                            <input type="text" name="name" className="field-style field-split align-left" placeholder="Enter your name" />
                            <input type="chef" name="chef" className="field-style field-split align-right" placeholder="Enter Coffee chef" />

                        </li>
                        <li>
                            <input type="text" name="supplier" className="field-style field-split align-left" placeholder="Enter Coffee Supplier" />
                            <input type="text" name="taste" className="field-style field-split align-right" placeholder="Enter Coffee Taste" />
                        </li>
                        <li>
                            <input type="text" name="category" className="field-style field-split align-left" placeholder="Enter Coffee Category" />
                            <input type="text" name="details" className="field-style field-split align-right" placeholder="Enter Coffee Details" />
                        </li>
                        <li>
                            <input type="url" name="photoUrl" className="field-style field-full align-none" placeholder="Enter Photo URL" />
                        </li>

                        <li>
                            <input type="submit" value="Add Coffee" />
                        </li>
                    </ul>
                </form>
            </div>

        </>
    );
};

export default AddCoffee;