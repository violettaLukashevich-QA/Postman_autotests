// autotest for method https://reqres.in/api/users?page=2


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

var usersData = pm.response.json();

pm.test("Verify Page Data", function () {
    pm.expect(usersData.page).to.eql(2);
    pm.expect(usersData.per_page).to.eql(6);
    pm.expect(usersData.data[0].id).to.eql(7);
});


//autotest for method https://reqres.in/api/users/23

pm.test("User not found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

//autotest for method https://reqres.in/api/users/2

pm.test("User is displayed successfully", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Correct user is displayed", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.id).to.eql(2);
});