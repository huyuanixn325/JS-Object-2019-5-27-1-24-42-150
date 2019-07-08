  var user = new Object();
    user.name = "John";
    user.surname = "Mike";
    alert(user.name);
    alert(user.surname);

    user.name = "Peter";

    alert(user.name);
    delete user.name;

    alert(user.name);
