const customer = {
    firstName: "",
    lastName: "",
    occupation: "",
    location: "",
    email: "",
    phoneNumber: "",
    additionalInfo: "",
  };
  function addCustomer() {
    console.log("Addustoemr");
    customer.firstName = document.getElementById("modalFirstName").value;
    customer.lastName = document.getElementById("modalLastName").value;
    customer.occupation = document.getElementById("modalOccupation").value;
    customer.email = document.getElementById("modalEmail").value;
    customer.phoneNumber = document.getElementById("ModalPhoneNumber").value;
    customer.location = document.getElementById("modalLocation").value;
    customer.additionalInfo = document.getElementById(
      "modalAdditionalInfomation"
    ).value;
    console.log(customer);
    showAddCustomerModal();
  }
  
  function showAddCustomerModal() {
    const myModal = new bootstrap.Modal("#modalAddCustomer");
    myModal.show();
  }
  
  //Orders.html Table and Search functionality
  const search = document.querySelector(".input-group input"),
    table_rows = document.querySelectorAll("tbody tr"),
    table_headings = document.querySelectorAll("thead th");
  