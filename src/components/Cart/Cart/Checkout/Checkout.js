import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div
        className={classes.control}
        onSubmit={handleOrderSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={handleStreetChange}
          value={street}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="zip-code">Zip Code</label>
        <input
          type="text"
          id="zip-code"
          onChange={handleZipChange}
          value={zip}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={handleCityChange}
          value={city}
        />
      </div>
      <button onClick={getMeals}>Confirm</button>
    </form>
  );
};

export default Checkout;
