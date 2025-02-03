var app = angular.module('myApp', ['ngRoute'])

// Remove the '!' from the URL hash prefix
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);


//Routing configuration it prapres inside the config block
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
         .when('/home', {
            templateUrl: 'views/home.html'
         })

         .when('/students', {
            templateUrl: 'views/students.html',
            controller:'studentController'
         })

         .otherwise({
            redirectTo: '/home'
         })         
}])


//Controller configuration
app.controller('studentController', ['$scope', '$http', function($scope, $http){
   //All stuents's info
   $scope.students = [];

   //One stuent's info
   $scope.student = {};

   //Fetch all students's info
   $scope.fetchStudents = () => {
      //http://localhost:80
      $http.get('http://localhost:8000/api/students') //api

      //sucess
      .then(response => {
         $scope.students = response.data
      })
  
      //fails
      .catch((err)=> {
         alert('Sorry an error occurred while reading students look the console for more information')
         console.error(err.message)
      })
   }

  // calling fetchall students's info funtion in the loading page
   $scope.fetchStudents()


   //Add Student
$scope.addStudent =() => {
   $http.post('http://localhost:8000/api/new-student', $scope.student)
   //sucess
   .then(() => {
      alert('Student registred successfully')
      $scope.student = {}
      $scope.fetchStudents()
   })
   //fails
   .catch((err)=> {
      alert('Sorry an error occurred while adding a new student look the console for more information')
      console.error(err.message)
   })
}

   // Edit student (copy student data to form)
   $scope.editStudent = (student) => {
       $scope.student = angular.copy(student);
   };


   // Update student
   $scope.updateStudent = () => {
       $http.put(`http://localhost:8000/api/update-student/${$scope.student.id}`, $scope.student)
           .then(() => {
               // sucess
               alert('Student updated successfully');
               $scope.student = {};
               $scope.fetchStudents();
           })
           .catch((err)=> {
            alert('Sorry an error occurred while updating a student look the console for more information')
            console.error(err.message)
         })
   };


   // Delete student
   $scope.deleteStudent = (id) => {
      // Confirmation
      const isConfirmed = confirm("Are you sure you want to delete this student?");
  
      // if yes
      if (isConfirmed) {
          $http.delete(`http://localhost:8000/api/delete-student/${id}`)
              .then(() => {
               alert("Student deleted successfully!"); 
               $scope.fetchStudents();
              })
              .catch((err)=> {
               alert('Sorry an error occurred while deleting a student look the console for more information')
               console.error(err.message)
            })
      } else {
          // if no
          alert("Deletiing canceled.");
      }
  };
}]);