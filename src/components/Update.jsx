import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvaider";

const Update = () => {
  const {id} = useParams();
  console.log(id);

  const {person} = useContext(AuthContext)

  function handle(e) {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const photo = form.photo.value;
    const itemName = form.itemName.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const subcategory = form.subcategory.value;
    const customization = form.customization.value;
    const process = form.process.value;
    const stock = form.stock.value;
    const username = form.username.value;

    const updateItemData = {
      email,
      photo,
      itemName,
      price,
      ratings,
      subcategory,
      customization,
      process,
      stock,
      username,
    };

    console.log(updateItemData)

    fetch(`http://localhost:9000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItemData),
    })
      .then((res) => res.json())
      .then((data) => {
          form.reset()
        alert("updated");
      });
  }
  return (
    <div className="w-[80%] min-h-[500px] border-[15px] border-black border-solid mt-10 m-auto p-10 rounded-3xl">
      <h1 className="text-[40px] font-[700] text-center">Update The Data</h1>
      <div className="text-center w-[95%] md:w-[60%] lg:w-[60%] m-auto">
        <p>
          Embark on your journey with our registration form, where simplicity
          meets security. Join us effortlessly and unlock a world of
          opportunities together.
        </p>
      </div>

      <form
        onSubmit={handle}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div className="w-full">
          <h1 className="text-[20px]">Photo Url</h1>
          <input
            required
            type="text"
            name="photo"
            className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]"
            style={{ boxShadow: "0px 0px 0px 3px black" }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-[20px]">Item Name</h1>
          <input
            required
            type="text"
            name="itemName"
            className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]"
            style={{ boxShadow: "0px 0px 0px 3px black" }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-[20px]">Price : </h1>
          <input
            type="text"
            name="price"
            className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]"
            style={{ boxShadow: "0px 0px 0px 3px black" }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-[20px]">Ratings</h1>
          <input
            required
            type="text"
            name="ratings"
            className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]"
            style={{ boxShadow: "0px 0px 0px 3px black" }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-[20px]">Subcategory Name</h1>
          <input
            required
            type="text"
            name="subcategory"
            className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]"
            style={{ boxShadow: "0px 0px 0px 3px black" }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-[20px]">Customization Yes/No</h1>
          <input
            required
            type="text"
            name="customization"
            className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]"
            style={{ boxShadow: "0px 0px 0px 3px black" }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-[20px]">Process Time</h1>
          <input
            required
            type="text"
            name="process"
            className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]"
            style={{ boxShadow: "0px 0px 0px 3px black" }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-[20px]">Stock Status</h1>
          <input
            required
            type="text"
            name="stock"
            className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]"
            style={{ boxShadow: "0px 0px 0px 3px black" }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-[20px]">User Email</h1>
          <input
            required
            type="text"
            name="email"
            value={person.email || ''}
            className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]"
            style={{ boxShadow: "0px 0px 0px 3px black" }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-[20px]">User Name</h1>
          <input
            required
            type="text"
            name="username"
            className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]"
            style={{ boxShadow: "0px 0px 0px 3px black" }}
          />
        </div>

        <div className="w-full col-span-2">
          <input
            className="btn w-full btn-outline"
            type="submit"
            value="SUBMIT"
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
