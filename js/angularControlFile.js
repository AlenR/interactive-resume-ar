var app = angular.module('intResume',[]);

app.controller('Resume',
    ['$scope', '$rootScope','UserModel',"$interval",'$timeout',
        function ($scope, $rootScope, UserModel, $interval, $timeout) {
    
     $scope.UserModel = UserModel;

     
         

             $scope.link = function (number) {
                if(number === 1){
                        window.open(UserModel.cape);
                    }
                    else if(number === 2){
                        window.open(UserModel.like);
                    }
                    };
$scope.data = $("#appendStars").text();
console.log($scope.data );
                    $scope.$watch(function () {
            return $scope.data;
        }, function() {
        var stars = "";
   if($scope.data == 1){
                        stars = '<span class="five columns starsAndSkills" ><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i></span>';
                        $("#appendStars").append(stars);
                        }
                        else if($scope.data == 2){
                        stars = '<span  class="five columns starsAndSkills" ><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i></span>';
                        $("#appendStars").append(stars);
                        }
                        else if($scope.data == 3){
                        stars = '<span  class="five columns starsAndSkills" ><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i></span>';
                        $("#appendStars").append(stars);
                        }
                        else if($scope.data == 4){
                        stars = '<span  class="five columns starsAndSkills" ><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i></span>';
                        $("#appendStars").append(stars);
                        }
                        else if($scope.data == 5){
                        stars = '<span  class="five columns starsAndSkills" ><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i></span>';
                        
                        $("#appendStars").append(stars);}
    });
}]);

app.factory('UserModel', function () {
    
        var data = {

    //Profile
    profileTitle:'Software Developer',
    profileName:'Alen Rahmanovic',
    profileAge: 25,
    profileLocation: 'Tuzla, Bosnia and Herzegovina',
    profileAbout:'I am a Software Developer for about 2 years. It includes Front End, Back End and QA. At the same time I am working on two jobs and my main occupation is developing web applications. Also very comunicative and team player, but also able to work indenpendetly.',

    profileImage: 'images/me.jpg',
    //Education
    eduTitle:'Bachelor in Science in Electrical Engeneering',
    eduGlobal:[{
         date: 'Sep 2008 - Dec 2013',
         school: 'Faculty of Electrical Engeneering',
         diploma: 'Bachelor of Science in Electrical Engeneering',
         description: 'Lorem Ipsum',
         city: 'Tuzla',
         web: 'http://www.fe.untz.ba/' 
    },
    {
         date: 'Sep 2004 - May 2008',
         school: 'Gymnasium "Mesa Selimovic"',
         diploma: 'Highschool Diploma',
         description: 'Lorem Ipsum',
         city: 'Tuzla',
         web: 'http://www.gmstz.stud.ba/' 
    }],

    //Experience
    expTitle:'Web Developer',
    expGlobal:[{
         date: 'Jan 2014 - present',
         company: 'Cape Ann Enterprises, Boston, USA',
         title: 'Software Developer',
         description: 'Lorem Ipsum',
         city: 'Tuzla',
         web: 'http://capeannenterprises.com/' 
    },
    {
         date: 'Aug 2014 - present',
         company: 'Like Rock, Tampa, USA',
         title: 'Software Developer (outsourcing)',
         description: 'Lorem Ipsum',
         city: 'Tuzla',
         web: 'http://www.likerock.com/'
    },
    {
         date: 'Jun 2013 - Sep 2013',
         company: 'BH Telecom, Tuzla, BiH',
         title: 'Practice in telecomunications',
         description: 'Lorem Ipsum',
         city: 'Tuzla',
         web: 'http://www.bhtelecom.ba/'
    }],

    //Skills

    skillTitle:'Angular Front-End developer',
    skills:['Skills','Tools','Language'],
    skillSet:[{
        skill:'JavaScript',
        skillStar:'5'
    },
    {
        skill:'CSS3',
        skillStar:'5'
    },
    {
        skill:'HTML5',
        skillStar:'5'
    },
    {
        skill:'AngularJs',
        skillStar:'5'
    },
    {
        skill:'JSON',
        skillStar:'5'
    },
    {
        skill:'JQuery',
        skillStar:'5'
    },
    {
        skill:'Bootstrap',
        skillStar:'4'
    },
    {
        skill:'PHP',
        skillStar:'3'
    },
    {
        skill:'MATLAB',
        skillStar:'3'
    },
    {
        skill:'Python',
        skillStar:'2'
    },
    {
        skill:'Wordpress',
        skillStar:'2'
    },
    {
        skill:'C',
        skillStar:'2'
    },
    {
        skill:'C++',
        skillStar:'2'
    },
    {
        skill:'JAVA',
        skillStar:'1'
    }],
    toolSet:[
    {
        skill:'Git',
        skillStar:'5'
    },
    {
        skill:'FileZilla',
        skillStar:'5'
    },
    {
        skill:'Firefox',
        skillStar:'5'
    },
    {
        skill:'NetBeans',
        skillStar:'5'
    },
    {
        skill:'Sublime Text',
        skillStar:'5'
    },
    {
        skill:'Notepad++',
        skillStar:'5'
    },
    {
        skill:'Webkit browsers',
        skillStar:'5'
    },
    {
        skill:'Ms Office',
        skillStar:'5'
    },
    {
        skill:'Windows',
        skillStar:'5'
    },
    {
        skill:'XAMPP',
        skillStar:'5'
    },
    {
        skill:'Redmine',
        skillStar:'5'
    },
    {
        skill:'TestRail',
        skillStar:'5'
    },
    {
        skill:'MS Visual Studio',
        skillStar:'4'
    },
    {
        skill:'IE 8 +',
        skillStar:'4'
    },
    {
        skill:'Oracle Virtual Box',
        skillStar:'4'
    },
    {
        skill:'Eclipse',
        skillStar:'2'
    },
    {
        skill:'Linux',
        skillStar:'2'
    },
    {
        skill:'MAC',
        skillStar:'2'
    }
    ],
    languageSet:[{
        skill:'Bosnian',
        skillStar:'5'
    },
    {
        skill:'English',
        skillStar:'4'
    },
    {
        skill:'German',
        skillStar:'2'
    }],

    //contact
    contactSkype:'alen.rahmanovic',
    contactEmail:'alen.rahmanovic.zd@gmail.com',
    contactPhone:'00387 61 684 125'
    
}
    return data;
});

app.factory('Personal', function () {
    return {
        options:[{element: "FIRST NAME:"},{element: "LAST NAME:"},{element: "DATE OF BIRTH:"},{element: "PLACE OF BIRTH:"},{element: "MARITIAL STATUS:"},{element: "ADDRESS:"}],
        values:[{element: "Alen"},{element: "Rahmanovic"},{element: "02.02.1990"},{element: "Zadar, Croatia"},{element: "Single"},{element: "Vukovarska 120, 75000 Tuzla,"},{element: "Bosnia and Herzegovina"}]
    };
});
app.factory('Education', function () {
    return {
        options:[{element: "DATE:"},{element: "COLLEGE:"},{element: "DEGREE:"}],
        values:[{element: "10/2008 - 12/2013"},{element: "University of Tuzla,"},{element: "Faculty of Electrical Engineering"},{element: "Bachelor of Science in Electrical Engineering"}]
    };
});
app.factory('Contact', function () {
    return {
        options:[{element: "MOBILE:"},{element: "MAIL:"},{element: "ADDRESS:"}],
        values:[{element: "00387616841253"},{element: "alen.rahmanovic.zd@gmail.com"},{element: "Vukovarska 120, 75000 Tuzla"},{element: "Bosnia and Herzegovina "}]
    };
});

