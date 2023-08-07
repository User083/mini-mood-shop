const AddressForm = () => {
  return (
    <form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-primary"
        >
          First name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            required
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-tertiary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-highlight sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="last-name"
          className="block text-sm font-medium leading-6 text-primary"
        >
          Last name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            required
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-tertiary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-highlight sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-primary"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            required
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-tertiary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-highlight sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-primary">
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-tertiary focus:ring-2 focus:ring-inset focus:ring-highlight sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United Kingdom</option>
                <option>Ireland</option>
                <option>France</option>
              </select>
            </div>
          </div> */}

      <div className="col-span-full">
        <label
          htmlFor="street-address"
          className="block text-sm font-medium leading-6 text-primary"
        >
          Street address
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="street-address"
            id="street-address"
            required
            autoComplete="street-address"
            className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-tertiary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-highlight sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2 sm:col-start-1">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-primary"
        >
          City
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="city"
            id="city"
            required
            autoComplete="address-level2"
            className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-tertiary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-highlight sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="region"
          className="block text-sm font-medium leading-6 text-primary"
        >
          County
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="region"
            id="region"
            required
            autoComplete="address-level1"
            className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-tertiary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-highlight sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="postal-code"
          className="block text-sm font-medium leading-6 text-primary"
        >
          Post Code
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="postal-code"
            id="postal-code"
            required
            autoComplete="postal-code"
            className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-tertiary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-highlight sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
