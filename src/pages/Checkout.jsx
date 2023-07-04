import { useState } from "react"
import { Construction, AddressForm } from "../components"


const Checkout = () => {
 
const [sameAddress, setSameAddress] = useState(false);
    return(
        <div className="bg-white flex w-full min-h-screen flex-col items-center py-10 min-h-screen">
          <form>
      <div className="space-y-12">
      <div className="flex flex-wrap w-full gap-10 justify-center">

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-primary">Shipping Address</h2>
            <p className="mt-1 text-sm leading-6 text-secondary">Use a permanent address where you can receive mail.</p>
            <AddressForm/>
        </div>


          <div className="border-b border-tertiary pb-12">
          <h2 className="text-base font-semibold leading-7 text-primary">Billing Address</h2>
            <div className="flex items-center gap-2 mt-1">              
              <input type="checkbox" id="address" name="address" className="rounded focus:ring-highlight focus:checked:bg-highlight checked:hover:bg-tertiary checked:bg-highlight"
            onChange={()=>{setSameAddress(!sameAddress)}}/>
              <label htmlForfor="address" className="text-sm leading-6 text-secondary">Same as shipping address?</label>

            </div>
              {sameAddress ? <></> : <AddressForm/>}
            
        </div>
        </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <a className="text-sm font-semibold leading-6 text-primary" href="/cart">
          Cancel
        </a>
        <button
          type="button"
          className="rounded-md bg-highlight px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Checkout
        </button>
      </div>
      </div>
    </form>
      </div>
    )
}

export default Checkout