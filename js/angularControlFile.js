var app = angular.module('intResume',[]);

app.controller('Resume',
    ['$scope', '$rootScope','UserModel',
        function ($scope, $rootScope, UserModel) {
    
     $scope.UserModel = UserModel;
             
}]);

//Stars templates
app.directive('setFiveStars', function(){
    return {
        template:'<i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i>'
   };
});
app.directive('setFourStars', function(){
    return {
        template:'<i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:grey"></i>'
   };
});
app.directive('setThreeStars', function(){
    return {
        template:'<i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:grey"></i><i class="fa fa-star" style="color:grey"></i>'
   };
});
app.directive('setTwoStars', function(){
    return {
        template:'<i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:grey"></i><i class="fa fa-star" style="color:grey"></i><i class="fa fa-star" style="color:grey"></i>'
   };
});
app.directive('setOneStars', function(){
    return {
        template:'<i class="fa fa-star" style="color:#22A39F"></i><i class="fa fa-star" style="color:grey"></i><i class="fa fa-star" style="color:grey"></i><i class="fa fa-star" style="color:grey"></i><i class="fa fa-star" style="color:grey"></i>'
   };
});
//End of star templates

app.factory('UserModel', function () {
        var data = {
    //Profile
    profileTitle:'Software Developer',
    profileName:'Alen Rahmanovic',
    profileAge: 26,
    profileLocation: 'Tuzla, Bosnia and Herzegovina',
    profileAbout:'I am a Software Developer for about 2 years. It includes Front End, Back End and QA. My main occupation is developing web applications. Also very comunicative and team player, but also able to work indenpendetly.',

    profileImage: 'images/me.jpg',
    //Education
    eduTitle:'Bachelor in Science in Electrical Engeneering',
    eduGlobal:[{
         date: 'Sep 2008 - Dec 2013',
         school: 'Faculty of Electrical Engeneering',
         diploma: 'Bachelor of Science in Electrical Engeneering',
         description: 'The education on Faculty of Electrical Engineering was based on wide aspect of subjects like math, physic, electricity, electronics, automatics and robotics area, and information technologies. During four years of my education in this school, I obtained programming skills, math skills, robotics and electronic skills. The education here is equal to 250 ETC.   ',
         city: 'Tuzla',
         web: 'http://www.fe.untz.ba/' 
    },
    {
         date: 'Sep 2004 - May 2008',
         school: 'Gymnasium "Mesa Selimovic"',
         diploma: 'Highschool Diploma',
         description: 'Gymnasium provided me general education that includes mathematical-scientific education, modern language, classical languages, economical and social-scientific education. There was a wide aspect of subjects like English, Bosnian, Latin and German language, mathematics, informatics, physics, chemistry, biology, geography, art, music, history, philosophy, social sciences. As a result this school provided me general knowledge in all these subjects. ',
         city: 'Tuzla',
         web: 'http://www.gmstz.stud.ba/' 
    }],

    //Experience
    expTitle:'Web Developer',
    expGlobal:[{
         date: 'Jan 2014 - present',
         company: 'Cape Ann Enterprises, Boston, USA',
         title: 'Software Developer',
         description: 'I am working at Cape Ann Enterprises for more than two years. I am working as a Software developer, and from the beginning I found myself best with Front-End development, especially with AngularJs. During these two years, I have also worked on Back-End and testing, then, C, C++, PHP and Python, where I have average skills. Set of different tools is used on daily base.',
         city: 'Tuzla',
         web: 'http://capeannenterprises.com/' 
    },
    {
         date: 'Aug 2014 - present',
         company: 'Like Rock, Tampa, USA',
         title: 'Software Developer (outsourcing)',
         description: 'Financial reasons made me to find one more job, so I am working as outsourcing web developer for Like Rock for about year and half. Developing web applications in PHP, resolving different issues on existing web applications, both Front-End and Back-End development, all of this are description of my contributions for Like Rock so far.',
         city: 'Tuzla',
         web: 'http://www.likerock.com/'
    },
    {
         date: 'Jun 2013 - Sep 2013',
         company: 'BH Telecom, Tuzla, BiH',
         title: 'Internship',
         description: 'During last year of my studies on Faculty of Electrical Engineering I got internship with duration of three months in BH-Telecom in Tuzla, and that was my first work experience. Setup and installation of routers, modems, phones and internet, and communicating with customers was my main obligation. ',
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
    contactSkype:'alen.rahmanovic',
    contactEmail:'alen.rahmanovic.zd@gmail.com',
    contactPhone:'-',

    git:'https://github.com/AlenR/interactive-resume-ar'
    
}
    return data;
});


