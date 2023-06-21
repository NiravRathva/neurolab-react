import { useSelector } from "react-redux";
const ContactList = () => {
    const contact = useSelector((state) => state.contacts);
    console.log(contact)
    // const email = useSelector((state) => state.email);
    // const mobileNumber = useSelector((state) => state.mobileNumber);
  return (
    <div className="row m-3">
   <table class="table border col-8  table-bordered text-white">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">MobileNo</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{contact.name}</td>
      <td>{contact.mobileNumber}</td>
      <td>{contact.email}</td>
    </tr>
   
    
  </tbody>
</table>
  </div>
  )
}

export default ContactList